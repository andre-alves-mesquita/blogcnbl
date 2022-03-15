class HomeController {
  constructor() {
    this.hiddenNavBar();
  }

  entrarAreaMedica() {}

  hiddenNavBar() {
    var nav = document.querySelector("nav");
    var link = document.querySelectorAll("a");

    window.addEventListener("scroll", function () {
      if (window.pageYOffset > 100) {
        nav.style.transition = "0.7s";
        nav.classList.add("bg-light", "shadow");
        nav.classList.remove("p-md-4");
        nav.classList.add("p-md-3");

        link.forEach((element) => {
          element.classList.add("text-dark");
          element.classList.remove("text-light");
        });
      } else {
        nav.style.transition = "0.7s";
        nav.classList.remove("bg-light", "shadow");
        nav.classList.add("p-md-4");
        nav.classList.remove("p-md-3");

        link.forEach((element) => {
          element.classList.add("text-light");
          element.classList.remove("text-dark");
        });
      }
    });
  }
}
