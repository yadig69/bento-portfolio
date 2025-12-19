// Wait for DOM to be fully loaded
window.addEventListener('DOMContentLoaded', () => {
    const marker = document.querySelector("#marker");
    const list = document.querySelectorAll(".navbar__menu li");

    if (!marker || list.length === 0) return;

    function moveIndicator(element) {
            marker.style.top = element.offsetTop + "px";
            marker.style.height = element.offsetHeight + "px";
        }

    function activeLink() {
            list.forEach((item) => item.classList.remove("active"));
            this.classList.add("active");
        }

    list.forEach((item) => {
        item.addEventListener("mouseover", function (e) {
            moveIndicator(this);
            activeLink.call(this);
                }

                );
        }

        );

    // Initialize marker position on first item
    if (list[0]) {
        moveIndicator(list[0]);
        list[0].classList.add("active");
        }
}

);