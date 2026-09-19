🌐 Subnet Optimizer
VLSM Network Planning Tool
Project Documentation

🌐 Subnet Optimizer – VLSM Network Planning Tool

Subnet Optimizer is a web-based VLSM (Variable Length Subnet Masking) Network Planning Tool designed to make IPv4 subnetting easier, faster, and more efficient.
The project allows users to enter a major IPv4 network, define the required number of subnets, specify host requirements for each subnet,
and automatically generate an optimized VLSM subnet allocation.

The application provides detailed subnet information including:-
•	Network Address
•	CIDR / Slash Notation
•	Subnet Mask
•	Hosts Required
•	Hosts Available
•	Unused Hosts
•	Usable Host Range
•	Broadcast Address
•	Network Summary

The project combines a networking-focused calculation engine with a modern cybersecurity-inspired user interface,
animated network visualization, and responsive design.
🚀 Live Project
🌐 Subnet Optimizer:- https://kumarsumit7.github.io/Subnet-Optimizer/

✨ Features

🌐 IPv4 Network Configuration
Users can enter their major IPv4 network and CIDR prefix. Example: 192.168.10.0 / 24. The application validates the IPv4 address and CIDR value before performing the subnet calculation.

📊 VLSM Subnet Calculation
Subnet Optimizer uses Variable Length Subnet Masking (VLSM) to allocate different subnet sizes according to the host requirements. The calculator automatically sorts requirements from the largest host requirement to the smallest and allocates the subnet blocks accordingly.

🧮 Automatic Subnet Allocation
The application calculates the required subnet size for each host requirement. Example: 100 Hosts → /25, 50 Hosts → /26, 25 Hosts → /27, 10 Hosts → /28.

📍 Network Address Calculation
For every generated subnet, the application calculates the appropriate network address.

🔢 CIDR / Slash Notation
The result table displays the CIDR prefix assigned to every subnet.

🎯 Subnet Mask Calculation
Subnet Optimizer automatically converts the CIDR prefix into its corresponding subnet mask.

💻 Host Requirement Management
Users can dynamically create subnet requirement fields and specify the subnet name and hosts required.

📈 Hosts Available
The application calculates how many usable host addresses are available in each allocated subnet.

♻️ Unused Host Calculation
The application calculates the number of unused host addresses within every subnet.

🔗 Usable Host Range
For every subnet, the application displays the first and last usable IP address.

📡 Broadcast Address
The broadcast address for every subnet is automatically calculated.

📋 Result Table
After generating the network, the application displays a detailed result table.

Column	Description
NAME	Name of the subnet
HOSTS NEEDED	Number of hosts requested
HOSTS AVAILABLE	Usable hosts provided by the subnet
UNUSED HOSTS	Remaining usable host addresses
NETWORK ADDRESS	Starting network address
SLASH	CIDR prefix
MASK	Subnet mask
USABLE RANGE	First and last usable host IP
BROADCAST	Broadcast address

📊 Network Summary
Subnet Optimizer provides a network summary after calculation.
Major Network: 192.168.10.0/24
Usable Hosts: 254
Requested Hosts: 185
Remaining Capacity: 69
This allows users to quickly understand how much of the major network has been allocated.

🛡️ Input Validation
IPv4 Validation
The application checks whether the entered IP address is a valid IPv4 address.
Valid:   192.168.10.0
Invalid: 192.168.10.300
Invalid: 192.168.10
Invalid: 192.168.10.x
CIDR Validation
CIDR values are validated within the IPv4 range:
0 - 32
Host Requirement Validation
Each subnet must contain a valid positive host requirement. Invalid or empty host values are rejected before calculation.

🔐 HTML Injection Protection
Subnet names are processed through an HTML escaping function before being inserted into the result table.
This helps prevent user-provided subnet names from being interpreted as HTML content.

🧠 How VLSM Works in This Project :-

Step 1 – Enter Major Network
192.168.10.0 / 25

Step 2 – Enter Number of Subnets 4

Step 3 – Define Host Requirements
IT → 100, HR → 50, Finance → 25, Admin → 10

Step 4 – Sort Requirements
100, 50, 25, 10

Step 5 – Calculate Required Block Size
Required Addresses = Hosts Required + 2

Step 6 – Allocate the Subnets
192.168.10.0/25, 192.168.10.128/26, 192.168.10.192/27, 192.168.10.224/28

Step 7 – Generate Results
Display complete subnet information in the result table.

🖥️ User Interface
The project includes a modern networking and cybersecurity-inspired interface.
•	Header with Subnet Optimizer branding and system status
•	Hero section with terminal-style introduction
•	Animated networking visualization
•	Network Configuration section
•	Dynamic Subnet Requirements section
•	Subnet Optimization Results section
•	Responsive footer

🎨 Design & UI
•	🌐 Network-style background
•	💠 Cyan and blue visual effects
•	🟢 System status indicator
•	💻 Networking device visualization
•	📡 Animated connection lines
•	⚡ Data signal animations
•	📊 Technical result table
•	📱 Responsive layout
•	✨ Smooth scrolling
•	⌨️ Terminal-style interface elements

📱 Responsive Design
The application is designed to work across different screen sizes.
•	Desktop
•	Laptop
•	Mobile
•	Tablet
For smaller screens, input fields stack vertically, the network visualization adjusts, buttons remain accessible, result tables become horizontally scrollable,
and footer content changes to a mobile-friendly layout.

🛠️ Technologies Used

HTML5 Used to create the structure of the application, including the header, hero section, network configuration, subnet requirements, results section, and footer.

CSS3 Used for UI design, responsive layouts, animations, network background, buttons, cards, tables, glowing effects, and device visualization.

JavaScript Used for IPv4 validation, CIDR validation, dynamic subnet fields, VLSM calculation, subnet sorting, network address calculation, subnet mask calculation,
host range calculation, broadcast calculation, remaining capacity calculation, result generation, UI interaction, and typing animation.

SVG Used for graphical networking visualization icons such as PC, SERVER, ROUTER, GATEWAY, and NETWORK.

📂 Project Structure
Subnet-Optimizer/
│
├── index.html
├── style.css
├── script.js
├── Logo.png
└── README.md

index.html
Contains the complete structure and interface of the application.

style.css
Contains the complete visual design, responsive layout, animations, network background, buttons, cards, tables, and networking UI.

script.js
Contains the VLSM calculation engine and application functionality.

Logo.png
Contains the custom project logo used in the application interface and browser tab.

README.md
Contains the project documentation and information.

⚙️ How to Run the Project

Step 1 – Download or Clone the Repository
git clone https://github.com/yourusername/subnet-optimizer.git
Or download the repository as a ZIP file and extract it.

Step 2 – Open the Project
Open the project folder in Visual Studio Code.

Step 3 – Check Project Files
index.html
style.css
script.js
Logo.png

Step 4 – Run the Project
Open index.html directly in a web browser. For a better development experience, you can use the Live Server extension in Visual Studio Code.

🧪 Example

Major Network: 192.168.10.0

CIDR: 24

Required Subnets: 4

IT       → 100 Hosts
HR       → 50 Hosts
Finance  → 25 Hosts
Admin    → 10 Hosts

The application can generate allocations such as:
IT       → 192.168.10.0/25
HR       → 192.168.10.128/26
Finance  → 192.168.10.192/27
Admin    → 192.168.10.224/28

🎯 Project Objectives
•	To simplify IPv4 subnetting.
•	To demonstrate VLSM subnet allocation.
•	To reduce manual subnetting calculations.
•	To calculate subnet masks automatically.
•	To calculate usable host ranges.
•	To calculate broadcast addresses.
•	To display network utilization.
•	To provide a user-friendly subnet planning interface.
•	To help networking students understand VLSM practically.
•	To provide a useful tool for basic network planning.

👨‍💻 Who Can Use This Project?
•	🎓 Networking Students
•	🧑‍💻 Computer Science Students
•	🌐 Network Engineering Beginners
•	🛡️ Cybersecurity Students
•	👨‍💼 Network Administrators
•	🧪 Networking Lab Practice
•	📚 VLSM Learning and Demonstration

📚 Networking Concepts Demonstrated
IPv4 Addressing
CIDR
Subnet Mask
Network Address
Broadcast Address
Usable Host Range
VLSM
Subnet Allocation
Host Capacity
IP Address Management
Network Planning

🔍 VLSM Example
Network: 192.168.10.0/24
Available usable hosts: 254

Department A → 100 Hosts
Department B → 50 Hosts
Department C → 25 Hosts
Department D → 10 Hosts

Department A → 192.168.10.0/25  → 126 usable hosts
Department B → 192.168.10.128/26 → 62 usable hosts
Department C → 192.168.10.192/27 → 30 usable hosts
Department D → 192.168.10.224/28 → 14 usable hosts

# 💡 Why VLSM?
Traditional subnetting may allocate equal-sized blocks even when different departments require different numbers of hosts.
VLSM allows different subnet sizes to be assigned according to actual host requirements, making IP address allocation more flexible.
Large requirement → Larger subnet
Small requirement  → Smaller subnet

🔐 Security & Networking Learning
Although Subnet Optimizer is primarily a networking project, it can also support cybersecurity learning.
Understanding subnetting is important for areas such as:
•	Network Security
•	Firewall Configuration
•	Network Segmentation
•	SOC Operations
•	IP Address Analysis
•	Network Monitoring
•	Access Control
•	Incident Response

🌟 Future Improvements
•	IPv6 subnet calculator
•	Export results to PDF
•	Export results to CSV
•	Dark/Light theme switching
•	Subnet visualization
•	Network topology generation
•	IP address utilization charts
•	Binary subnet calculation view
•	CIDR conversion tools
•	Network class information
•	Subnet comparison
•	Copy-to-clipboard functionality
•	Print-friendly results
•	More advanced network planning features

🧩 Project Use Case
Subnet Optimizer can be used in a practical network planning scenario.An organization may have different departments such as
IT, HR, Finance, Administration, and a Guest Network. Each department may require a different number of IP addresses.
Instead of manually calculating every subnet, the network administrator can enter the requirements into Subnet Optimizer and
generate the required VLSM allocation.

🏆 Project Highlights
✔ VLSM-based subnet calculation
✔ IPv4 validation
✔ CIDR validation
✔ Dynamic subnet requirement fields
✔ Automatic subnet sorting
✔ Automatic subnet mask calculation
✔ Network address calculation
✔ Broadcast address calculation
✔ Usable host range calculation
✔ Host capacity calculation
✔ Unused host calculation
✔ Network capacity summary
✔ Responsive UI
✔ Cybersecurity-inspired design
✔ Animated network visualization
✔ HTML input protection
✔ No backend required

📌 Important Notes
•	The calculator is designed for IPv4 network planning.
•	A maximum of 50 subnet requirement rows can be created.
•	Host requirements must be positive numbers.
•	CIDR values must be between 0 and 32.
•	The requested subnet blocks must fit inside the entered major network.
•	The application performs the calculations directly in the browser using JavaScript.

🎓 Learning Outcome
By working with this project, students can gain practical understanding of IPv4 addressing, subnetting, VLSM, CIDR, subnet masks, network addressing,
broadcast addresses, host address ranges, IP address management, JavaScript DOM manipulation, frontend development, and responsive web design.

📸 Interface
The application provides a professional dashboard-style interface containing:-

Subnet Optimizer
      ↓
Network Configuration
      ↓
Subnet Requirements
      ↓
VLSM Calculation
      ↓
Optimization Results
The networking visualization represents communication between network devices such as:
PC → NETWORK/ROUTER → SERVER
             ↓
          GATEWAY
Animated connection lines and data signals provide a visual representation of network communication.

📄 License
This project is available for educational and learning purposes.
You can modify and improve the project according to your requirements while respecting the applicable project license and repository terms.

👨‍💻 Developer
Sumit Kumar Cybersecurity & Networking Enthusiast.
This project was created as a practical implementation of IPv4 subnetting and VLSM network planning using modern frontend technologies.
Networking + VLSM + IPv4 + JavaScript + Frontend Development + Cybersecurity-Inspired UI

❤️ Acknowledgement
This project was developed to make subnetting and VLSM calculations easier to understand through an interactive web-based interface.
The goal is to provide a simple environment where students and beginners can experiment with different network sizes and
host requirements while observing the resulting subnet allocation.

🌐 Final Project Summary
Subnet Optimizer is an interactive VLSM network planning tool that converts user-defined IPv4 network and host requirements into optimized subnet allocations.
It provides detailed information about every generated subnet and presents the results through a modern networking dashboard.
The project demonstrates the practical combination of Computer Networking + VLSM + IPv4 + JavaScript + Web Development.


First View of Project - Subnet-Optimizer


<img width="1895" height="967" alt="Screenshot 2026-09-19 191026" src="https://github.com/user-attachments/assets/38df9696-c18b-4696-8963-83fe5b0e9ac3" />


✍️ This project code is written by Sumit Kumar.
