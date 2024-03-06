const hiddenElements = document.querySelectorAll(".hidden")
//! utilizamos el ALL para que seleccione todos los elementos con esa clase y no solo el primero

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      /* console.log(entry.target) */
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  })
}, {
  threshold: 0.5
})

hiddenElements.forEach((element) => observer.observe(element));