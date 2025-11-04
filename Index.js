

const nav = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    nav.classList.add("show");
  } else {
    nav.classList.remove("show");
  }
});

let lastScrollTop = 0;
window.addEventListener("scroll", () => {
  let currentScroll = window.scrollY;
  if (currentScroll > lastScrollTop && currentScroll > 100) {
    nav.style.top = "-100px"; 
  } else {
    nav.style.top = "0"; 
  }
  lastScrollTop = currentScroll;
});



window.addEventListener("click", (event) => {
  if (!event.target.matches('.dropbtn') && !event.target.matches('#arrow')) {
    const menu = document.getElementById("dropdownMenu");
    const arrow = document.getElementById("arrow");

    if (menu.classList.contains("show")) {
      menu.classList.remove("show");
      if (arrow) arrow.style.transform = "rotate(0deg)";
    }
  }
});





    const accordions = document.querySelectorAll(".accordion-item");

    accordions.forEach(item => {
      const header = item.querySelector(".accordion-header");
      header.addEventListener("click", () => {
        item.classList.toggle("active");
      });
    });





  const menuToggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');

  menuToggle.addEventListener('click', () => {
    menu.classList.toggle('show');
  });

