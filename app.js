document.addEventListener("DOMContentLoaded", () => {
  const heading = document.querySelector("#page1 h1");
  if (heading) {
    heading.innerText = "Happy Propose Day Baby 🤎";
  }
});


function toggleLike(el){
  el.classList.toggle("liked");
}

// cad animatioon pparrt

const boxes = document.querySelectorAll('.box');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.3
});

boxes.forEach(box => observer.observe(box));