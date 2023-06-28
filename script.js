// Burger Menu

const burger = document.querySelector('.burger');

const cancel = document.querySelector(".cancel");

const menuItems = document.querySelectorAll(".menu-item");

function menu() {
  const menu = document.querySelector('.menu');

  burger.classList.toggle('hide');

  menu.classList.toggle('menu-display');
}

burger.addEventListener('click', menu);

cancel.addEventListener('click', menu);

menuItems.forEach((item) => {
    item.addEventListener('click', menu);
});

// Card generation

