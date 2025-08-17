document.addEventListener("DOMContentLoaded", () => {
    // Botón de compra
    const buyBtn = document.getElementById("buyBtn");
    if (buyBtn) {
        buyBtn.addEventListener("click", () => {
            alert("¡Gracias por tu interés! Serás redirigido al pago.");
        });
    }

    // Contadores animados
    const counters = document.querySelectorAll(".metrics h3");
    const options = { threshold: 0.5 };
    
    const animateCounter = (counter) => {
        let target = +counter.getAttribute("data-target");
        let count = 0;
        let step = target / 100;
        let updateCount = () => {
            if(count < target) {
                count += step;
                counter.innerText = Math.ceil(count);
                requestAnimationFrame(updateCount);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    };

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                animateCounter(entry.target);
                obs.unobserve(entry.target);
            }
        });
    }, options);

    counters.forEach(counter => observer.observe(counter));
});
