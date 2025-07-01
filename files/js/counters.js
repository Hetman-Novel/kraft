document.addEventListener('DOMContentLoaded', function() {

   const counters = document.querySelectorAll(".counter");
   if (counters.length > 0) {
      const animateCounter = (counter) => {
         const target = +counter.getAttribute("data-target");
         const duration = 3000;
         const startTime = performance.now();
         const update = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const current = Math.floor(progress * target);

            counter.textContent = current; // с разделителями
            //counter.textContent = current.toLocaleString(); // с разделителями
            if (progress < 1) {
               requestAnimationFrame(update);
            } else {
               counter.textContent = target; // итоговое значение
               //counter.textContent = target.toLocaleString(); // итоговое значение
            }
         };
         requestAnimationFrame(update);
      };
      const observer = new IntersectionObserver((entries, observer) => {
         entries.forEach(entry => {
            if (entry.isIntersecting) {
               animateCounter(entry.target);
               observer.unobserve(entry.target); // чтобы анимация не повторялась
            }
         });
      }, {
         threshold: 0.6
      });
      counters.forEach(counter => {
         observer.observe(counter);
      });
   }
});