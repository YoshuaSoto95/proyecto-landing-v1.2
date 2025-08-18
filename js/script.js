document.addEventListener("DOMContentLoaded", () => {
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

document.addEventListener("DOMContentLoaded", () => {
  const buyBtn = document.getElementById("buyBtn");
  const modal = document.getElementById("modalRegistro");
  const closeModal = document.getElementById("closeModal");
  const form = document.getElementById("registroForm");
  const thankyouPage = document.getElementById("thankyouPage");
  const backHome = document.getElementById("backHome");

  // Abrir modal
  if (buyBtn) {
    buyBtn.addEventListener("click", (e) => {
      e.preventDefault();
      modal.style.display = "flex";
    });
  }

  // Cerrar modal
  if (closeModal) {
    closeModal.addEventListener("click", () => {
      modal.style.display = "none";
    });
  }

  // Enviar formulario
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      modal.style.display = "none";
      thankyouPage.style.display = "flex";
    });
  }

  // Volver a Home
  if (backHome) {
    backHome.addEventListener("click", (e) => {
      e.preventDefault();
      thankyouPage.style.display = "none";
    });
  }
});
