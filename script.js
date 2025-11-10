// ======================== 1. Navbar Toggle (Mobile Menu) ========================
document.addEventListener('DOMContentLoaded', function() {
    // 1. Get the necessary elements
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    // 2. Add an event listener to the toggle button
    menuToggle.addEventListener('click', function() {
        // Toggle the 'nav-active' class on the navigation links
        // This triggers the sliding animation defined in CSS
        navLinks.classList.toggle('nav-active');
        
        // Toggle the 'active' class on the menu toggle button itself
        // This triggers the hamburger-to-X animation defined in CSS
        menuToggle.classList.toggle('active');
    });

    // Optional: Close the menu when a link is clicked (useful for single-page sites)
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('nav-active');
            menuToggle.classList.remove('active');
        });
    });
});


// ======================== 3. About Section ========================
    
    // 2. Intersection Observer for 'On-Scroll' Animations
    const animatedElements = document.querySelectorAll('.animate-slide-in-left, .animate-slide-in-right');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // If the element is visible
            if (entry.isIntersecting) {
                // Apply the animation utility class (the actual animation runs because the CSS property opacity is set to 0 initially)
                entry.target.style.opacity = '1';
                
                // Stop observing the element once it has animated
                observer.unobserve(entry.target);
            }
        });
    }, {
        // Options: Trigger the animation when 10% of the element is visible
        threshold: 0.1, 
        rootMargin: '0px 0px -100px 0px' // Start animation a bit before it fully enters view
    });

    // Start observing all elements
    animatedElements.forEach(element => {
        // The animation is set up in CSS, but the JS makes sure it only triggers on scroll
        observer.observe(element);
    });


// ======================== 4. Download Section ========================
document.addEventListener('DOMContentLoaded', () => {
    const detectionContainer = document.getElementById('detection-container');
    const iosBtn = document.getElementById('ios-download-btn');
    const androidBtn = document.getElementById('android-download-btn');

    // 1. Detect the Operating System
    const userAgent = navigator.userAgent.toLowerCase();
    let osDetected = 'desktop';

    if (userAgent.includes('iphone') || userAgent.includes('ipad')) {
        osDetected = 'ios';
    } else if (userAgent.includes('android')) {
        osDetected = 'android';
    }

    // 2. Define the UI based on OS
    let messageHTML;
    let boxStyles = '';
    
    if (osDetected === 'ios') {
        // iOS detected (Success state UI)
        messageHTML = `
            <i class="fas fa-check-circle check-icon" style="color: #4c8b32;"></i>
            <span>iOS device detected. Tap the yellow button to download now!</span>
        `;
        // Apply success background/border via inline styles for dynamic change
        boxStyles = 'background-color: #e6ffe6; border-color: #4c8b32;';
        
        // Optional: Highlight button
        iosBtn.style.transform = 'scale(1.05)';

    } else if (osDetected === 'android') {
        // Android detected (Success state UI)
        messageHTML = `
            <i class="fas fa-check-circle check-icon" style="color: #4c8b32;"></i>
            <span>Android device detected. Tap the green button to download now!</span>
        `;
        // Apply success background/border
        boxStyles = 'background-color: #e6ffe6; border-color: #4c8b32;';
        
        // Optional: Highlight button
        androidBtn.style.transform = 'scale(1.05)';

    } else {
        // Desktop/Unknown (Warning state UI - using Yellow theme colors)
        messageHTML = `
            <i class="fas fa-exclamation-triangle warning-icon" style="color: #ffd700;"></i>
            <span>Desktop detected - Choose your mobile platform below</span>
        `;
        // Apply warning background/border
        boxStyles = 'background-color: #fffacd; border-color: #ffd700;';
    }

    // 3. Construct and Inject the Detection Box
    detectionContainer.innerHTML = `
        <div class="detection-box" style="${boxStyles}">
            ${messageHTML}
        </div>
    `;

    // 4. Set download links (from previous response)
    iosBtn.href = "https://appstore.com/workinsite"; 
    androidBtn.href = "https://play.google.com/store/apps/details?id=com.ilovepdf.www&hl=en_IN"; 
});
// Get the button element by its ID
    const downloadBtn = document.getElementById('ios-download-btn');

    // Add an event listener for the click event
    downloadBtn.addEventListener('click', function(event) {
        // 1. Crucial step: This stops the browser from navigating to the '#' link
        event.preventDefault(); 
        
        // 2. The alert message you want to display
        alert("WorkInSite is coming soon to the Apple App Store!");
    });

// ======================== 5. Contact section ========================

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Stop the default form submission

    alert('Message sent successfully! (This is a mock submission)');
    
    // Clear the form fields after successful submission
    event.target.reset();
});

// -------------------Feature Additional Context-------------------

// Function to update the content dynamically
function updateContent() {
    const titleElement = document.querySelector('.main-title');
    const descriptionElement = document.querySelector('.description');

    // You could fetch data here from an API or a JSON file
    const data = {
        title: "Transaction Made Simple",
        description: "Experience seamless and secure transactions with our user-friendly mobile application designed to simplify your financial activities."
    };

    // Update the text
    titleElement.textContent = data.title;
    descriptionElement.textContent = data.description;
    
    console.log("Content updated successfully.");
}

// Event listener to run the function when the page is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    updateContent();
    
    // Example: Add a click listener to one of the frames
    const frame1 = document.querySelector('.mobile-frame:first-child');
    frame1.addEventListener('click', () => {
        alert('You clicked the first mobile frame!');
    });
});

// Support FAQ Function

 const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close all items
        faqItems.forEach(faq => faq.classList.remove('active'));
        
        // Open clicked item if it wasn't active
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// ========================Contact Form ========================

const contactForm = document.getElementById('contactForm');
        const successMessage = document.getElementById('successMessage');
        const errorMessage = document.getElementById('errorMessage');

        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Hide any existing messages
            successMessage.classList.remove('show');
            errorMessage.classList.remove('show');

            // Get form data
            const formData = {
                firstName: document.getElementById('firstName').value,
                lastName: document.getElementById('lastName').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };

            // Disable submit button
            const submitBtn = contactForm.querySelector('.submit-btn');
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';

            // Create mailto link with form data
            const mailtoLink = `mailto:support@workinsite.com?subject=${encodeURIComponent(formData.subject + ' - Contact Form Submission')}&body=${encodeURIComponent(
                `Name: ${formData.firstName} ${formData.lastName}\n` +
                `Email: ${formData.email}\n` +
                `Phone: ${formData.phone || 'Not provided'}\n` +
                `Subject: ${formData.subject}\n\n` +
                `Message:\n${formData.message}`
            )}`;

            // Open mail client
            window.location.href = mailtoLink;

            // Show success message after a short delay
            setTimeout(() => {
                successMessage.classList.add('show');
                submitBtn.disabled = false;
                submitBtn.textContent = 'Send Message';
                contactForm.reset();

                // Hide success message after 5 seconds
                setTimeout(() => {
                    successMessage.classList.remove('show');
                }, 5000);
            }, 500);

            // Note: For production, you should use a backend service like:
            // - FormSubmit.co
            // - EmailJS
            // - Your own server-side email handling
            // - Web3Forms
            // This mailto approach opens the user's email client
        });

        // Real-time validation feedback
        const inputs = contactForm.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                if (this.hasAttribute('required') && !this.value) {
                    this.style.borderColor = '#dc3545';
                } else {
                    this.style.borderColor = 'var(--color-border-gray)';
                }
            });

            input.addEventListener('input', function() {
                if (this.style.borderColor === 'rgb(220, 53, 69)') {
                    this.style.borderColor = 'var(--color-border-gray)';
                }
            });
        });


// Loader function

// This function waits for all assets to load before running
window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');

    // Add a slight delay (optional) to ensure a smooth transition is visible
    setTimeout(function() {
        if (preloader) {
            // 1. Start the fade-out animation via CSS class
            preloader.classList.add('fade-out');

            // 2. Remove the preloader from the DOM completely after the transition is finished (500ms)
            // This prevents the element from interfering with accessibility or clicks.
            preloader.addEventListener('transitionend', function() {
                preloader.style.display = 'none';
            });
        }
    }, 200); // 200ms delay to ensure the user registers the loading screen
});

// About Section Animate counter numbers

function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;

        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.floor(current) + (counter.parentElement.querySelector('.stat-label').textContent.includes('Uptime') ? '' : '+');
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target + (counter.parentElement.querySelector('.stat-label').textContent.includes('Uptime') ? '' : '+');
            }
        };

        updateCounter();
    });
}

// Initialize
window.addEventListener('load', () => {
    setTimeout(animateCounters, 500);
});