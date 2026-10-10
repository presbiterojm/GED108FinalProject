(function () {
  const nav = document.getElementById("site-nav");
  const toggle = document.getElementById("nav-toggle");
  const links = document.querySelectorAll(".nav-link");
  const page = document.body.getAttribute("data-page") || "lobby";
  const appropriationImg = document.getElementById("appropriation-image");
  const appropriationPlaceholder = document.getElementById("appropriation-placeholder");

  links.forEach(function (link) {
    const on = link.getAttribute("data-room") === page;
    link.classList.toggle("is-active", on);
    if (on) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });

  document.querySelectorAll(".room").forEach(function (room) {
    room.classList.add("in-view");
  });

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      const open = nav.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  if (appropriationImg && appropriationPlaceholder) {
    appropriationImg.addEventListener("load", function () {
      appropriationPlaceholder.hidden = true;
      appropriationImg.hidden = false;
    });
    appropriationImg.addEventListener("error", function () {
      appropriationImg.hidden = true;
      appropriationPlaceholder.hidden = false;
    });
    appropriationImg.src = "images/my-appropriation.jpg";
  }
})();
