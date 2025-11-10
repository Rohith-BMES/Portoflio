// ======================== 2. Feature Module Interactivity ========================
const featuresData = {
    roles: {
        title: "Roles & Rights",
        images: [
            { 
                path: "images/roles.jpg", 
                description: `
                    <p>Existing Roles Display.</p>
                    <ul>
                        <li><i class="fas fa-check-circle check-icon"></i> This area displays the existing Role, where you can edit or delete the Role.</li>
                        <li><i class="fas fa-check-circle check-icon"></i> The arrow in the end of the tab will take you to the rights area.</li>
                    </ul>
                `
            },
            { 
                path: "images/adding_rights.jpg", 
                description: `
                    <p>Defining permissions for a specific Role.</p>
                    <ul>
                        <li><i class="fas fa-check-circle check-icon"></i> Adding Rights for the existing User.</li>
                        <li><i class="fas fa-check-circle check-icon"></i> Place to add security and maintenance.</li>
                    </ul>
                `
            },
            { 
                path: "images/create_role.jpg", 
                description: `
                    <p>Creating new Role.</p>
                    <ul>
                        <li><i class="fas fa-check-circle check-icon"></i> The Creation of new Role is accessible by the admin.</li>
                        <li><i class="fas fa-check-circle check-icon"></i> Grant 'Edit', or 'Delete' rights for each module.</li>
                    </ul>
                `
            }
        ]
    },
    users: {
        title: "Users Management",
        images: [
            { 
                path: "images/user.jpg", 
                description: `
                    <p>Maintain a comprehensive list of all system users, including Admin, Supervisors, and Managers.</p>
                    <ul>
                        <li><i class="fas fa-check-circle check-icon"></i> Create, edit, and delete user accounts.</li>
                        <li><i class="fas fa-check-circle check-icon"></i> Assign specific roles and site permissions to each user.</li>
                    </ul>
                `
            },
            { 
                path: "images/create_user.jpg", 
                description: `
                    <p>Create a new User.</p>
                    <ul>
                        <li><i class="fas fa-check-circle check-icon"></i> A simple format to create an User.</li>
                        <li><i class="fas fa-check-circle check-icon"></i> A user is created with general details like phone number and the role existing.</li>
                    </ul>
                `
            },
            { 
                path: "images/edit_user.jpg", 
                description: `
                    <p>Editing the info of existing user.</p>
                    <ul>
                        <li><i class="fas fa-check-circle check-icon"></i> Change of information of the existing user.</li>
                        <li><i class="fas fa-check-circle check-icon"></i> Updated user information is easy for communication.</li>
                    </ul>
                `
            }
        ]
    },
    contacts: {
        title: "Centralised Contact Management",
        images: [
            { 
                path: "images/contact.jpg", 
                description: `
                    <p>Maintain a list of Contact in centralised manner.</p>
                    <ul>
                        <li><i class="fas fa-check-circle check-icon"></i> Create, edit, and delete contact details.</li>
                        <li><i class="fas fa-check-circle check-icon"></i> centralized database to ensure easy access, consistency, and avoid data duplication across departments or sites.</li>
                `
            },
            { 
                path: "images/create_contact.jpg", 
                description: `
                    <p>Create a new Contact.</p>
                    <ul>
                        <li><i class="fas fa-check-circle check-icon"></i> A simple format to create an contact.</li>
                        <li><i class="fas fa-check-circle check-icon"></i> A user is created with general details like phone number and the role existing.</li>
                    </ul>
                `
            },
            { 
                path: "images/edit_contact.jpg", 
                description: `
                    <p>Edit an existing contact.</p>
                    <ul>
                        <li><i class="fas fa-check-circle check-icon"></i> Change of information of the existing user.</li>
                        <li><i class="fas fa-check-circle check-icon"></i> Allows users to modify existing contact information such as name, phone number, email, address, and company details to ensure accuracy and up-to-date records.</li>
                    </ul>
                `
            },
            { 
                path: "images/contact_additional.jpg", 
                description: `
                    <p>Optional details for the contact.</p>
                    <ul>
                        <li><i class="fas fa-check-circle check-icon"></i> Allows users to store not only the primary contact number but also multiple phone numbers, email addresses, and physical addresses for better communication and record-keeping.</li>
                        <li><i class="fas fa-check-circle check-icon"></i> Enables users to manage all relevant contact information in one place, ensuring quick access to alternate communication methods and maintaining complete, up-to-date contact profiles.</li>
                    </ul>
                `
            }
        ]
    },
    clients: {
        title: "Client Management",
        images: [
            { 
                path: "images/client.jpg", 
                description: `
                    <p>Maintain a comprehensive list of all system users, including Admin, Supervisors, and Managers.</p>
                    <ul>
                        <li><i class="fas fa-check-circle check-icon"></i> Create, edit, and delete client accounts.</li>
                        <li><i class="fas fa-check-circle check-icon"></i> Displays the client list which has been stored already.</li>
                    </ul>
                `
            },
            { 
                path: "images/create_client.jpg", 
                description: `
                    <p>Create a new User.</p>
                    <ul>
                        <li><i class="fas fa-check-circle check-icon"></i> A simple format to create an User.</li>
                        <li><i class="fas fa-check-circle check-icon"></i> Allow other modules (like Sites, Transactions, Reports) to link to the centralized client feature through a shared client ID or API.</li>
                        <li><i class="fas fa-check-circle check-icon"></i> This enables seamless data flow, reporting, and analytics related to client activities across the entire system.</li>

                    </ul>
                `
            },
            { 
                path: "images/edit_client.jpg", 
                description: `
                    <p>Editing the info of existing user.</p>
                    <ul>
                        <li><i class="fas fa-check-circle check-icon"></i> update client details (such as name, contact info, or project association) from a single centralized interface, ensuring consistency across all connected modules.</li>
                        <li><i class="fas fa-check-circle check-icon"></i> Any modification to client information is instantly reflected across related sections like Sites, Transactions, reducing redundancy and maintaining data integrity system-wide.</li>
                    </ul>
                `
            }
        ]
    },
    sites: {
        title: "Site Status Overview",
        images: [
            { 
                path: "images/site.jpg", 
                caption: "Site Dashboard",
                description: `
                    <p>Get an immediate visual status of Sites.</p>
                    <ul>
                        <li><i class="fas fa-check-circle check-icon"></i> Visual donut chart showing Working vs. Yet to Start sites.</li>
                        <li><i class="fas fa-check-circle check-icon"></i> Get an immediate visual status of all active project sites and their working capacity</li>
                    </ul>
                `
            },
            { 
                path: "images/create_site.jpg", 
                caption: "Creating a Site",
                description: `
                    <p>Get an immediate visual status of all active project sites and their working capacity.</p>
                    <ul>
                        <li><i class="fas fa-check-circle check-icon"></i> Visual donut chart showing Working vs. Yet to Start sites.</li>
                        <li><i class="fas fa-check-circle check-icon"></i> Filterable list of all sites with assigned client and supervisor details.</li>
                    </ul>
                `
            },
            { 
                path: "images/edit_site.jpg", 
                caption: "Site status donut chart",
                description: `
                    <p>Get an immediate visual status of all active project sites and their working capacity.</p>
                    <ul>
                        <li><i class="fas fa-check-circle check-icon"></i> Visual donut chart showing Working vs. Yet to Start sites.</li>
                        <li><i class="fas fa-check-circle check-icon"></i> Filterable list of all sites with assigned client and supervisor details.</li>
                    </ul>
                `
            }
        ]
    },
    workers: {
        title: "Worker Management",
        images: [
            { 
                path: "images/worker.jpg", 
                caption: "Worker database",
                description: `
                    <p>Manage and track the details and assignments of all workers across different sites.</p>
                    <ul>
                        <li><i class="fas fa-check-circle check-icon"></i> Maintain all worker profiles, job roles, and skill details in a single, unified system accessible to authorized users across all sites.</li>
                        <li><i class="fas fa-check-circle check-icon"></i> View workers currently checked in and their site history.</li>
                    </ul>
                `
            },
            { 
                path: "images/create_worker.jpg", 
                caption: "Individual worker profile",
                description: `
                    <p>Each worker has a detailed profile showing personal information, skills, and site history.</p>
                    <ul>
                        <li><i class="fas fa-check-circle check-icon"></i> Worker creations window contains Name, Date of Birth, Contact (From Contact list), Gender, KYC (as shown before), Bank Account (Account Name, Account Number, IFSC Code), UPIs (UPI Types: GPAY, PHONEPE, UPI ID).</li>
                        <li><i class="fas fa-check-circle check-icon"></i> Simplified way to create an Worker data.</li>
                    </ul>
                `
            },
            { 
                path: "images/edit_worker.jpg", 
                caption: "Individual worker profile",
                description: `
                    <p>Each worker has a detailed profile showing personal information, skills, and site history.</p>
                    <ul>
                        <li><i class="fas fa-check-circle check-icon"></i> The Edit Worker feature allows authorized users to update worker details (such as name, contact info, role, or assigned site), ensuring consistency across all connected modules like Attendance, Transactions, and Reports.</li>
                        <li><i class="fas fa-check-circle check-icon"></i> eliminating data duplication and ensuring that all departments and modules always access the most up-to-date worker information.</li>
                    </ul>
                `
            }
        ]
    },
    suppliers: {
        title: "Suppliers Management",
        images: [
            { 
                path: "images/supplier.jpg", 
                description: `
                    <p>Supplier Dashboard</p>
                    <ul>
                        <li><i class="fas fa-check-circle check-icon"></i> Create, edit, and delete Supplier accounts.</li>
                        <li><i class="fas fa-check-circle check-icon"></i> Maintain a comprehensive list of all system users, including Admin, Supervisors, and Managers.</li>
                        <li><i class="fas fa-check-circle check-icon"></i> Enables seamless monitoring of Supplier list.</li>
                    </ul>
                `
            },
            { 
                path: "images/create_supplier.jpg", 
                description: `
                    <p>Create a new User.</p>
                    <ul>
                        <li><i class="fas fa-check-circle check-icon"></i> All supplier details—such as contact information, materials supplied, payment terms, and transaction history.</li>
                        <li><i class="fas fa-check-circle check-icon"></i> Creation window contains essentials information section.</li>
                    </ul>
                `
            },
            { 
                path: "images/edit_supplier.jpg", 
                description: `
                    <p>Editing the info of existing user.</p>
                    <ul>
                        <li><i class="fas fa-check-circle check-icon"></i> Simplified the edit option for convenient purpose.</li>
                        <li><i class="fas fa-check-circle check-icon"></i> Any edit made to supplier information in one place automatically updates the data everywhere it’s referenced, ensuring consistency across the system.</li>
                    </ul>
                `
            }
        ]
    },
    materials: {
        title: "Centralised Material Management",
        images: [
            { 
                path: "images/material.jpg", 
                description: `
                    <p>Maintain a comprehensive list of all system users, including Admin, Supervisors, and Managers.</p>
                    <ul>
                        <li><i class="fas fa-check-circle check-icon"></i> Maintaining a list of materials in centralised way.</li>
                        <li><i class="fas fa-check-circle check-icon"></i> Maintain a unified record of all materials with real-time availability, category, and supplier linkage, ensuring consistent and accurate data across all sites.</li>
                    </ul>
                `
            },
            { 
                path: "images/create_material.jpg", 
                description: `
                    <p>Create a new User.</p>
                    <ul>
                        <li><i class="fas fa-check-circle check-icon"></i> Creation done here to ensuring consistent data (name, code, unit) across all sites and departments.</li>
                    </ul>
                `
            },
            { 
                path: "images/edit_material.jpg", 
                description: `
                    <p>Editing the info of existing user.</p>
                    <ul>
                        <li><i class="fas fa-check-circle check-icon"></i> Updation of the material will ensure the up-to-date material info</li>
                        <li><i class="fas fa-check-circle check-icon"></i> authorized users can create or modify materials, while others can only use or request them — reducing duplication and maintaining data integrity.</li>
                    </ul>
                `
            }
        ]
    },
    attendance: {
        title: "Attendance Tracking",
        images: [
            { 
                path: "images/attendance.jpg",
                description: `
                    <p>Accurate and real-time tracking of worker check-in and check-out using mobile.</p>
                    <ul>
                        <li><i class="fas fa-check-circle check-icon"></i> Generated a day to day attendance to maintain the workforce consistency.</li>
                        <li><i class="fas fa-check-circle check-icon"></i> Enables site managers to record and monitor worker attendance digitally using mobile check-ins,.</li>
                    </ul>
                `
            },
            {
                path: "images/create_attendance.jpg",
                description: `
                    <p>Creating a attendance</p>
                    <ul>
                        <li><i class="fas fa-check-circle check-icon"></i> Attendance window displays an simplified options to enter the attendance.</li>
                        <li><i class="fas fa-check-circle check-icon"></i> Generates daily and monthly attendance summaries automatically, reducing manual errors and streamlining payroll and productivity analysis.</li>
                    </ul>
                `
            },
            { 
                path: "images/edit_attendance.jpg",
                description: `
                    <p>Edit Attendance that is existing.</p>
                    <ul>
                        <li><i class="fas fa-check-circle check-icon"></i> Wrong enteries are avoid using this edit window and maintaining a paperless work .</li>
                        <li><i class="fas fa-check-circle check-icon"></i> Reliable and efficient way to update the attendance details.</li>
                    </ul>
                `
            }
        ]
    },
    transaction: {
        title: "Transaction Management",
        images: [
            { 
                path: "images/transaction_list.jpg", 
                description: `
                    <p>Editing the info of existing user.</p>
                    <ul>
                        <li><i class="fas fa-check-circle check-icon"></i> Change of information of the existing user.</li>
                        <li><i class="fas fa-check-circle check-icon"></i> Updated user information is easy for communication.</li>
                    </ul>
                `
            },
            { 
                path: "images/create_client_transaction.jpg", 
                description: `
                    <p>Create a new User.</p>
                    <ul>
                        <li><i class="fas fa-check-circle check-icon"></i> A simple format to create an User.</li>
                        <li><i class="fas fa-check-circle check-icon"></i> A user is created with general details like phone number and the role existing.</li>
                    </ul>
                `
            },
            { 
                path: "images/edit_client_transaction.jpg", 
                description: `
                    <p>Editing the info of existing user.</p>
                    <ul>
                        <li><i class="fas fa-check-circle check-icon"></i> Change of information of the existing user.</li>
                        <li><i class="fas fa-check-circle check-icon"></i> Updated user information is easy for communication.</li>
                    </ul>
                `
            }
        ]
    },
    reports: {
        title: "Customized Reporting",
        images: [
            { 
                path: "images/report.jpg", 
                caption: "Report generation tool",
                description: `
                    <p>Generate detailed reports on attendance, worker activity, and site transactions for analysis.</p>
                    <ul>
                        <li><i class="fas fa-check-circle check-icon"></i> Filter reports by date range, site, worker, or role.</li>
                        <li><i class="fas fa-check-circle check-icon"></i> Get actionable insights into project productivity.</li>
                    </ul>
                `
            },
            { 
                path: "images/worker_report.jpg", 
                caption: "Exported PDF report",
                description: `
                    <p>All reports can be exported to common formats for sharing or archiving.</p>
                    <ul>
                        <li><i class="fas fa-check-circle check-icon"></i> Exportable data in various formats (PDF, Excel).</li>
                        <li><i class="fas fa-check-circle check-icon"></i> Automated daily/weekly summary report generation.</li>
                    </ul>
                `
            },
            { 
                path: "images/filter_worker.jpg", 
                caption: "Exported PDF report",
                description: `
                    <p>All reports can be exported to common formats for sharing or archiving.</p>
                    <ul>
                        <li><i class="fas fa-check-circle check-icon"></i> Exportable data in various formats (PDF, Excel).</li>
                        <li><i class="fas fa-check-circle check-icon"></i> Automated daily/weekly summary report generation.</li>
                    </ul>
                `
            }
        ]
    }
};

// --- Element Selectors ---
// --- Element Selectors ---
const featureItems = document.querySelectorAll('.feature-item');
const featureTitle = document.getElementById('feature-title');
const featureDescription = document.getElementById('feature-description');
const featureImage = document.getElementById('feature-image');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

// --- State Variables ---
let currentFeatureKey = 'roles'; // Stores the currently active feature
let currentImageIndex = 0;       // Stores the index of the image being shown

/**
 * Updates the image, description, and arrow visibility based on the current state.
 */
function updateImageAndDescription() {
    const data = featuresData[currentFeatureKey];
    const imageData = data.images[currentImageIndex];

    // Fade out image and description
    featureImage.style.opacity = '0';
    featureDescription.style.opacity = '0';

    setTimeout(() => {
        // Update content
        featureImage.src = imageData.path;
        featureImage.alt = imageData.caption; // Use caption for better alt text
        featureDescription.innerHTML = imageData.description; // Update description
        
        // Fade in
        featureImage.style.opacity = '1';
        featureDescription.style.opacity = '1';
    }, 300); // 300ms matches the fade time

    // Update arrow visibility
    // Hide left arrow if it's the first image
    leftArrow.style.display = (currentImageIndex === 0) ? 'none' : 'block';
    // Hide right arrow if it's the last image
    rightArrow.style.display = (currentImageIndex === data.images.length - 1) ? 'none' : 'block';
}

/**
 * Updates the main feature title and sets the first image/description.
 * This is called ONLY when a new feature tab is clicked.
 */
function updateFeatureContent(featureKey) {
    // Set the new feature key
    currentFeatureKey = featureKey;
    // Reset to the first image for this feature
    currentImageIndex = 0;

    const data = featuresData[currentFeatureKey];
    
    // Update main title
    featureTitle.textContent = data.title;
    
    // Call the image/description updater to show the first item
    updateImageAndDescription();
}

// --- Event Listeners for Feature Tabs ---
featureItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Update active class on tabs
        featureItems.forEach(link => link.classList.remove('active'));
        item.classList.add('active');
        
        const featureKey = item.getAttribute('data-feature');
        updateFeatureContent(featureKey);
    });
});

// --- Event Listeners for Arrows ---
leftArrow.addEventListener('click', () => {
    if (currentImageIndex > 0) {
        currentImageIndex--; // Move to the previous image
        updateImageAndDescription();
    }
});

rightArrow.addEventListener('click', () => {
    const data = featuresData[currentFeatureKey];
    if (currentImageIndex < data.images.length - 1) {
        currentImageIndex++; // Move to the next image
        updateImageAndDescription();
    }
});

// --- Initial Load ---
// Ensure the 'roles' tab is active on page load
document.querySelector('.feature-item[data-feature="roles"]').classList.add('active');
updateFeatureContent('roles');

