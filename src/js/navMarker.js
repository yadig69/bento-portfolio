// Wait for React to render
function initNavMarker() {
    const marker = document.querySelector("#marker");
    const list = document.querySelectorAll(".navbar__menu li");
    
    // Map sections by their actual DOM order in App.jsx
    const sectionSelectors = [
        '.section--profile',   // Profile (navbar index 0)
        '.section--about',     // About (navbar index 1) 
        '.section--skills',    // Skills (navbar index 2)
        '.section--project',   // Projects (navbar index 3)
        '.section--services',  // Services (navbar index 4)
        '.section--contact'    // Contact (navbar index 5)
    ];

    if (!marker || list.length === 0) {
        setTimeout(initNavMarker, 100);
        return;
    }

    const colors = ['#5da6ff', '#ffff00', '#5dffef', '#ff5d88', '#e45dff', 'var(--primary-color)'];

    function moveIndicator(element) {
        marker.style.top = element.offsetTop + "px";
        marker.style.height = element.offsetHeight + "px";
    }

    function activeLink() {
        list.forEach((item) => item.classList.remove("active"));
        // Remove active class from all sections
        sectionSelectors.forEach(selector => {
            const section = document.querySelector(selector);
            if (section) section.classList.remove("nav-active");
        });
        
        this.classList.add("active");
        
        // Add matching color class to corresponding section
        const index = Array.from(list).indexOf(this);
        const sectionSelector = sectionSelectors[index];
        const section = document.querySelector(sectionSelector);
        
        if (section) {
            section.classList.add("nav-active");
            section.style.setProperty('--nav-color', colors[index]);
        }
    }

    list.forEach((item) => {
        item.addEventListener("mouseover", function(e) {
            moveIndicator(this);
            activeLink.call(this);
        });
    });

    // Initialize marker position on first item
    if (list[0]) {
        moveIndicator(list[0]);
        list[0].classList.add("active");
        const firstSection = document.querySelector(sectionSelectors[0]);
        if (firstSection) {
            firstSection.classList.add("nav-active");
            firstSection.style.setProperty('--nav-color', colors[0]);
        }
    }
}

// Start initialization
initNavMarker();