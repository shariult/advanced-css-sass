// ======= Imports ======= //

// ======= Variables ======= //

const navbarItems = document.querySelectorAll(".navbar__item");

// ======= Codes ======= //

navbarItems.forEach((navbarItem) => {
  navbarItem.addEventListener("click", function () {
    document.querySelector(".navbar__checkbox").checked = false;
  });
});

// ======= Exports ======= //
