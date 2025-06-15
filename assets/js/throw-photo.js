const leftTargets = document.querySelectorAll(".throw-photo-left-js");
const rightTargets = document.querySelectorAll(".throw-photo-right-js");

const observerLeft = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = entry.target;
            target.classList.remove("hidden");
            target.classList.add("throw-photo-left");
            observer.unobserve(target);
        }
    });
}, {
    threshold: 0.3
});

const observerRight = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = entry.target;
            target.classList.remove("hidden");
            target.classList.add("throw-photo-right");
            observer.unobserve(target);
        }
    });
}, {
    threshold: 0.3
});

leftTargets.forEach(target => observerLeft.observe(target));
rightTargets.forEach(target => observerRight.observe(target));