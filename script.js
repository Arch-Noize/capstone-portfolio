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

// Program Card generation

const card = [
  {
    id: 1,
    icon: "./Assets/program/lecture.png",
    title: "Artists",
    desc: "Besides RAWAYANA, several guests artists will come to the concert to play alongside",
  },
  {
    id: 2,
    icon: "./Assets/program/exhibition.png",
    title: "Photos",
    desc: "Come and take several pictures with your favorite artists",
  },
  {
    id: 3,
    icon: "./Assets/program/forum.png",
    title: "Meet-ups",
    desc: "VIP Clients will have a pass that will allow them to meet with an artist of their choosing",
  },
  {
    id: 4,
    icon: "./Assets/program/workshop.png",
    title: "Ads",
    desc: "Want your company's name in the concert? Be sure to reach to our Ad department",
  },
  {
    id: 5,
    icon: "./Assets/program/ignite.png",
    title: "Location",
    desc: "This year, #sadico will be held in La Concha Acustica de Andres Bello",
  }
]

const mainProgram = document.querySelector("#cards");

function program () {
  let works = card.map((item) =>
   `<div class="card-container">
      <div class="program-card">
        <div>
          <img src="${item.icon}">
        </div>
        <div>
          <h4>${item.title}</h4>
        </div>
        <div>
          <p>${item.desc}</p>
        </div>
      </div>
    </div>`
  );
  works = works.join('');
  mainProgram.innerHTML = works;
}

window.addEventListener('DOMContentLoaded', program);

// Speaker generation
