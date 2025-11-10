// Navbar animations





// Hero Section banner animation

document.addEventListener('DOMContentLoaded', () => {
    const targetElement = document.querySelector('.hero-image-mockup');

    // Check if the element exists
    if (targetElement) {
        const observerOptions = {
            root: null, // relative to the viewport
            rootMargin: '0px',
            threshold: 0.1 // animation triggers when 10% of the element is visible
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Element is in view, add the class to start the animation
                    entry.target.classList.add('is-visible');
                    // Stop observing after the animation has started
                    observer.unobserve(entry.target); 
                }
            });
        }, observerOptions);

        observer.observe(targetElement);
    }
});

// ===========Feature Animation

document.addEventListener('DOMContentLoaded', function() {
    // Select all elements that need a scroll effect
    const elementsToAnimate = document.querySelectorAll(
        '.fade-in-on-scroll, .slide-in-on-scroll, .text-reveal'
    );

    // Options for the Intersection Observer
    const observerOptions = {
        root: null, // relative to the viewport
        rootMargin: '0px',
        threshold: 0.2 // Trigger when 20% of the element is visible
    };

    // The function to run when elements intersect
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the animation class when the element is visible
                entry.target.classList.add('is-visible');
                // Optional: Stop observing once the animation is triggered
                observer.unobserve(entry.target);
            }
        });
    };

    // Create the observer
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Tell the observer to watch each element
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});

// ===========Download Section Animation


// ============FAQ Section Animation

