// Burger Menu

const burger = document.querySelector('.burger');

const cancel = document.querySelector('.cancel');

const menuItems = document.querySelectorAll('.menu-item');

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
    icon: './Assets/program/lecture.png',
    title: 'Artists',
    desc: 'Besides RAWAYANA, several guests artists will come to the concert to play alongside',
  },
  {
    id: 2,
    icon: './Assets/program/exhibition.png',
    title: 'Photos',
    desc: 'Come and take several pictures with your favorite artists',
  },
  {
    id: 3,
    icon: './Assets/program/forum.png',
    title: 'Meet-ups',
    desc: 'VIP Clients will have a pass that will allow them to meet with an artist of their choosing',
  },
  {
    id: 4,
    icon: './Assets/program/workshop.png',
    title: 'Ads',
    desc: "Want your company's name in the concert? Be sure to reach to our Ad department",
  },
  {
    id: 5,
    icon: './Assets/program/ignite.png',
    title: 'Location',
    desc: 'This year, #sadico will be held in La Concha Acustica de Andres Bello',
  },
];

const mainProgram = document.querySelector('#cards');

function program() {
  let works = card.map((item) => `<div class="card-container">
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
    </div>`);
  works = works.join('');
  mainProgram.innerHTML = works;
}

window.addEventListener('DOMContentLoaded', program);

// Speaker generation

const featured = [
  {
    id: '1',
    show: '',
    img: './Assets/speakers/speaker-1.png',
    person: 'Yochai Benkier',
    title: 'Professional Sound mixer and VFX',
    desc: 'Benkler is an industry artist working for several bands around the world, providing sound mixing and wiring',
  },
  {
    id: '2',
    show: '',
    img: './Assets/speakers/speaker-2.png',
    person: 'Kilnam Chon',
    title: 'Stage Production Technician',
    desc: 'Kilnam Chon helped bring life to the stages by operating and managing all needed effects for the concert and plays',
  },
  {
    id: '3',
    show: 'show',
    img: './Assets/speakers/speaker-3.png',
    person: 'SohYeong Noh',
    title: 'Production Services Manager',
    desc: 'As the main venue for new media art production for the band, Nabi promotes the bands social networks and connects them to several sponsors.',
  },
  {
    id: '4',
    show: 'show',
    img: './Assets/speakers/speaker-4.png',
    person: 'Julia Leda',
    title: 'Head of Stagehands',
    desc: 'Leader and manager of all that requires moving, connecting and wiring in the venue',
  },
  {
    id: '5',
    show: 'show',
    img: './Assets/speakers/speaker-5.png',
    person: 'Lila Tretikov',
    title: 'Building Operations Crew Manager',
    desc: 'Lila Tretikov is the manager for the stages held in La Vega, making sure everything runs smoothly all around',
  },
  {
    id: '6',
    show: 'show',
    img: './Assets/speakers/speaker-6.png',
    person: 'Ryan Merkley',
    title: 'Rawayana Chief Producer',
    desc: 'Ryan had been managing, helping, and designing the band ever since they made a record deal back in 2016',
  },
];

const listSpeakers = document.querySelector('#speakers');

function featSpeaker() {
  let speakers = featured.map((item) => `<div class="featured-speaker ${item.show}">
      <div class="container" id="speaker-image">
        <img src="${item.img}">
      </div>
      <div class="container" id="speaker-detail">
        <h3>${item.person}</h3>
        <h5>${item.title}</h5>
        <hr>
        <p>${item.desc}</p>
      </div> 
    </div>
  `);
  speakers = speakers.join('');
  listSpeakers.innerHTML = speakers;
}

window.addEventListener('DOMContentLoaded', featSpeaker);

// Show More / Less Button

const more = document.querySelector('#more');

function showMore() {
  const hidden = document.querySelectorAll('.show');

  hidden.forEach((item) => item.classList.remove('show'));

  more.classList.add('show');
}

more.addEventListener('click', showMore);
