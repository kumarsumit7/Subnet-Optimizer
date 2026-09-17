/* =====================================================
   SUBNET OPTIMIZER
   VLSM CALCULATION ENGINE
===================================================== */


/* =====================================================
   IPv4 → Integer
===================================================== */

function ipToInt(ip) {

    const parts = ip.split('.').map(Number);

    return (
        ((parts[0] << 24) >>> 0) +
        ((parts[1] << 16) >>> 0) +
        ((parts[2] << 8) >>> 0) +
        parts[3]
    ) >>> 0;
}


/* =====================================================
   Integer → IPv4
===================================================== */

function intToIp(int) {

    return [
        (int >>> 24) & 255,
        (int >>> 16) & 255,
        (int >>> 8) & 255,
        int & 255
    ].join('.');
}


/* =====================================================
   Validate IPv4
===================================================== */

function isValidIPv4(ip) {

    const parts = ip.split('.');

    if (parts.length !== 4) {
        return false;
    }

    return parts.every(part => {

        if (part === '' || !/^\d+$/.test(part)) {
            return false;
        }

        const value = Number(part);

        return value >= 0 && value <= 255;
    });
}


/* =====================================================
   Create Dynamic Subnet Rows
===================================================== */

function generateInputRows() {

    const count = parseInt(
        document.getElementById('subnetCount').value
    );

    const rowsList =
        document.getElementById('rowsList');

    const container =
        document.getElementById('dynamicRowsContainer');

    const outputSection =
        document.getElementById('outputSection');


    /* Clear previous rows */

    rowsList.innerHTML = '';

    outputSection.style.display = 'none';


    /* Validate subnet count */

    if (isNaN(count) || count < 1) {

        alert(
            "Please enter a valid number of subnets."
        );

        return;
    }


    /* Maximum subnet limit */

    if (count > 50) {

        alert(
            "For this calculator, maximum 50 subnets are allowed."
        );

        return;
    }


    /* Create rows */

    for (let i = 0; i < count; i++) {

        const row =
            document.createElement('div');

        row.className =
            'dynamic-input-row';


        row.innerHTML = `

            <input
                type="text"
                class="subnet-name-input"
                placeholder="Subnet ${i + 1}"
            >

            <input
                type="number"
                class="subnet-host-input"
                min="1"
                placeholder="50"
            >

        `;


        rowsList.appendChild(row);
    }


    /* Show requirement section */

    container.style.display = 'block';


    /* Scroll to section */

    container.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });
}


/* =====================================================
   Calculate VLSM
===================================================== */

function calculateVLSM() {

    const baseIpStr =
        document
            .getElementById('ipAddress')
            .value
            .trim();


    const baseCidr =
        parseInt(
            document.getElementById('cidr').value
        );


    const nameInputs =
        document.querySelectorAll(
            '.subnet-name-input'
        );


    const hostInputs =
        document.querySelectorAll(
            '.subnet-host-input'
        );


    const outputSection =
        document.getElementById('outputSection');


    const tableBody =
        document.getElementById('outputTableBody');


    const summaryText =
        document.getElementById('summaryText');


    /* Clear old results */

    tableBody.innerHTML = '';


    /* =================================================
       Validate IP
    ================================================= */

    if (!isValidIPv4(baseIpStr)) {

        alert(
            "Please enter a valid IPv4 address.\nExample: 192.168.1.0"
        );

        return;
    }


    /* =================================================
       Validate CIDR
    ================================================= */

    if (
        isNaN(baseCidr) ||
        baseCidr < 0 ||
        baseCidr > 32
    ) {

        alert(
            "CIDR must be between 0 and 32."
        );

        return;
    }


    /* =================================================
       Check dynamic rows
    ================================================= */

    if (nameInputs.length === 0) {

        alert(
            "Please click CREATE and add subnet requirements first."
        );

        return;
    }


    /* =================================================
       Read subnet requirements
    ================================================= */

    let subnetsData = [];


    for (
        let i = 0;
        i < nameInputs.length;
        i++
    ) {

        const name =
            nameInputs[i]
                .value
                .trim() ||
            `Subnet ${i + 1}`;


        const needed =
            parseInt(
                hostInputs[i].value
            );


        if (
            isNaN(needed) ||
            needed <= 0
        ) {

            alert(
                `Please enter valid hosts for ${name}.`
            );

            return;
        }


        subnetsData.push({

            id: i,

            name: name,

            needed: needed

        });
    }


    /* =================================================
       Sort largest subnet first
       VLSM Logic
    ================================================= */

    subnetsData.sort(
        (a, b) => b.needed - a.needed
    );


    /* =================================================
       Major Network
    ================================================= */

    const originalIp =
        ipToInt(baseIpStr);


    const blockSize =
        Math.pow(
            2,
            32 - baseCidr
        );


    const networkMask =
        baseCidr === 0
            ? 0
            : (0xFFFFFFFF << (32 - baseCidr)) >>> 0;


    const networkAddress =
        (originalIp & networkMask) >>> 0;


    const networkEnd =
        networkAddress +
        blockSize -
        1;


    const totalNetworkHosts =
        blockSize >= 2
            ? blockSize - 2
            : 0;


    let currentIpInt =
        networkAddress;


    let totalAllocatedHostsNeeded = 0;


    /* =================================================
       Allocate VLSM Blocks
    ================================================= */

    for (const subnet of subnetsData) {

        const totalNeeded =
            subnet.needed + 2;


        let bits = 0;


        while (
            Math.pow(2, bits) <
            totalNeeded
        ) {

            bits++;
        }


        const currentSubnetSize =
            Math.pow(2, bits);


        const currentCidr =
            32 - bits;


        const available =
            currentSubnetSize - 2;


        const unused =
            available - subnet.needed;


        /* =================================================
           Check if subnet fits inside major network
        ================================================= */

        if (
            currentIpInt +
            currentSubnetSize -
            1 >
            networkEnd
        ) {

            alert(
                `The requested subnets do not fit inside ${baseIpStr}/${baseCidr}.`
            );

            return;
        }


        /* =================================================
           Network Address
        ================================================= */

        const netAddress =
            intToIp(currentIpInt);


        /* =================================================
           Subnet Mask
        ================================================= */

        const maskInt =
            currentCidr === 0
                ? 0
                : (0xFFFFFFFF <<
                    (32 - currentCidr)) >>> 0;


        const maskStr =
            intToIp(maskInt);


        /* =================================================
           Usable Host Range
        ================================================= */

        const firstUsable =
            available > 0
                ? intToIp(currentIpInt + 1)
                : 'N/A';


        const lastUsable =
            available > 0
                ? intToIp(
                    currentIpInt +
                    currentSubnetSize -
                    2
                )
                : 'N/A';


        /* =================================================
           Broadcast
        ================================================= */

        const broadcast =
            intToIp(
                currentIpInt +
                currentSubnetSize -
                1
            );


        /* =================================================
           Total Requested Hosts
        ================================================= */

        totalAllocatedHostsNeeded +=
            subnet.needed;


        /* =================================================
           Create Result Row
        ================================================= */

        const row =
            document.createElement('tr');


        row.innerHTML = `

            <td>
                ${escapeHTML(subnet.name)}
            </td>

            <td>
                ${subnet.needed}
            </td>

            <td>
                ${available}
            </td>

            <td>
                ${unused}
            </td>

            <td>
                ${netAddress}
            </td>

            <td>
                /${currentCidr}
            </td>

            <td>
                ${maskStr}
            </td>

            <td>
                ${firstUsable} - ${lastUsable}
            </td>

            <td>
                ${broadcast}
            </td>

        `;


        tableBody.appendChild(row);


        /* Move to next subnet */

        currentIpInt +=
            currentSubnetSize;
    }


    /* =================================================
       Summary
    ================================================= */

    const remainingHosts =
        totalNetworkHosts -
        totalAllocatedHostsNeeded;


    summaryText.innerHTML = `

        <strong>${intToIp(networkAddress)}/${baseCidr}</strong>
        contains
        <strong>${totalNetworkHosts}</strong>
        usable hosts.

        <br>

        Requested:
        <strong>${totalAllocatedHostsNeeded}</strong>
        hosts

        &nbsp;•&nbsp;

        Remaining capacity:
        <strong>${remainingHosts}</strong>
        hosts.

    `;


    /* =================================================
       Show Results
    ================================================= */

    outputSection.style.display =
        'block';


    outputSection.scrollIntoView({

        behavior: 'smooth',

        block: 'start'

    });
}


/* =====================================================
   Prevent HTML Injection in Subnet Names
===================================================== */

function escapeHTML(value) {

    const div =
        document.createElement('div');

    div.textContent =
        value;

    return div.innerHTML;
}


/* =====================================================
   HERO TYPING ANIMATION
   Runs ONLY ONCE
===================================================== */

document.addEventListener('DOMContentLoaded', function () {

    const typingElement =
        document.getElementById('typingText');


    if (!typingElement) {
        return;
    }


    const text =
        typingElement.dataset.text ||
        "Optimize every subnet.";


    let index = 0;


    function typeText() {

        if (index < text.length) {

            typingElement.textContent +=
                text.charAt(index);

            index++;

            setTimeout(typeText, 75);

        } else {

            typingElement.classList.add(
                'typing-complete'
            );
        }
    }


    /* Start typing once */

    typeText();

});

