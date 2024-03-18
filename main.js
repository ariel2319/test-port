const hiddenElements = document.querySelectorAll(".hidden")
//! utilizamos el ALL para que seleccione todos los elementos con esa clase y no solo el primero
const links = document.querySelectorAll(".link");


const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      /* console.log(entry.target) */
      entry.target.classList.add("show");

      links.forEach((link) => {
        /* console.log(link); */
        const href = link.getAttribute("href").split('#')[1];
        const id = entry.target.id;

        if (href === id) {
          link.classList.add("link-active")
        } else {
          link.classList.remove("link-active")
        }
      })
    } else {
      entry.target.classList.remove("show");
    }
  })
}, {
  threshold: 0.5
})

hiddenElements.forEach((element) => observer.observe(element));