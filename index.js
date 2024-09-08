// text writing
let nama = document.getElementById("nama");
let typewriter = new Typewriter(nama, {
  start: true,
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(2000)
  .typeString("Saya Faris Maulidan")
  .pauseFor(4000)
  .deleteChars(10)
  .pauseFor(300)
  .deleteAll(300)
  .start();

// loop skill
let skill = document.getElementById("box");

let namaKemampuan = [
  {
    id: 1,
    tech: "HTML",
    logo: '<i class="fa-brands fa-html5 text-4xl md:text-5xl text-orange-400"></i>',
  },
  {
    id: 2,
    tech: "CSS",
    logo: '<i class="fa-brands fa-css3-alt text-4xl md:text-5xl text-sky-500"></i>',
  },
  {
    id: 3,
    tech: "Bootstrap",
    logo: '<i class="fa-brands fa-bootstrap text-4xl md:text-5xl text-purple-500 "></i>',
  },
  {
    id: 4,
    tech: "Tailwind",
    logo: '<svg height="40" preserveAspectRatio="xMidYMid" viewBox="0 0 256 154" width="38" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><linearGradient id="a" x1="-2.777778%" x2="100%" y1="32%" y2="67.555556%"><stop offset="0" stop-color="#2298bd"/><stop offset="1" stop-color="#0ed7b5"/></linearGradient><path d="m128 0c-34.1333333 0-55.4666667 17.0666667-64 51.2 12.8-17.0666667 27.7333333-23.4666667 44.8-19.2 9.737481 2.4343704 16.697363 9.4985481 24.401067 17.3184 12.549689 12.7383704 27.07437 27.4816 58.798933 27.4816 34.133333 0 55.466667-17.0666667 64-51.2-12.8 17.0666667-27.733333 23.4666667-44.8 19.2-9.737481-2.4343704-16.697363-9.4985481-24.401067-17.3184-12.549689-12.7383704-27.07437-27.4816-58.798933-27.4816zm-64 76.8c-34.1333333 0-55.46666667 17.0666667-64 51.2 12.8-17.066667 27.7333333-23.466667 44.8-19.2 9.7374815 2.43437 16.697363 9.498548 24.4010667 17.3184 12.5496889 12.73837 27.0743703 27.4816 58.7989333 27.4816 34.133333 0 55.466667-17.066667 64-51.2-12.8 17.066667-27.733333 23.466667-44.8 19.2-9.737481-2.43437-16.697363-9.498548-24.401067-17.3184-12.549689-12.7383704-27.07437-27.4816-58.798933-27.4816z" fill="url(#a)"/></svg>',
  },
  {
    id: 5,
    tech: "Javasript",
    logo: '<i class="fa-brands text-4xl text-yellow-400 md:text-5xl fa-js"></i>',
  },
  {
    id: 6,
    tech: "React JS",
    logo: '<i class="fa-brands fa-react text-4xl text-blue-500 md:text-5xl"></i>',
  },
];
namaKemampuan.map((kemampuan) => {
  let namaSkill = document.createElement("div");
  namaSkill.innerHTML = `<div data-aos="fade-right" data-aos-duration="800" data-aos-delay="400" class='box flex gap-3 items-center justify-center px-3 border-2 border-sky-400 p-3 rounded-lg'>
  <div class = "">${kemampuan.logo}</div> <div class = "flex justify-center items-center md:text-xl">${kemampuan.tech}</div></div>`;

  // memasukkan isi
  skill.append(namaSkill);
});

// loop portofolio

let portoBox = document.getElementById("portoBox");
let namaPorto = [
  {
    id: 1,
    title: "E-Commerce Website",
    img: '<img src="./src/assets/porto1.png" alt="" class="rounded-md" />',
    description:
      "Sebuah Website E-commerce yang menampilkan sisi client dengan menggunakan FAKE API, tujuan saya membuat ini adalah untuk berlatih dan ingin memahami lebih tentang react js ",
    tech2: "React JS, Tailwind",
    githubLogo:
      '<a href="https://github.com/Faris955/" target="_blank"> <i class="fa-brands fa-github"></i></a> ',
    visitLogo:
      '<a href="http://farisportofolio.netlify.app/" target = "_blank"><i class="fa-regular fa-eye"></i></a>',
  },
  {
    id: 2,
    title: "Web Anime",
    img: '<img src="./src/assets/animee.png" alt="" class="rounded-md" />',
    description:
      "Sebuah Website daftar anime dengan Jikan API, tujuan saya membuat website ini adalah untuk belajar tentang dasar-dasar dari Next Js",
    tech2: "Next JS, Tailwind",
    githubLogo:
      '<a href=https://github.com/Faris955/AnimeList.github.io.git target="_blank"> <i class="fa-brands fa-github"></i></a>',
    visitLogo:
      '<a href="https://portofolioweb1.netlify.app/" target = "_blank"><i class="fa-regular fa-eye"></i></a>',
  },
  {
    id: 3,
    title: "Web Coffe",
    img: '<img src="./src/assets/cofe.png" alt="" class="rounded-md" />',
    description:
      "Sebuah Web daftar harga kopi, tujuan saya membuat ini untuk mengasah kemampuan css dan javascript saya",
    tech2: "Javascript, CSS",
    githubLogo:
      '<a href=https://github.com/Faris955/web-coffe.git target="_blank"> <i class="fa-brands fa-github"></i></a>',
    visitLogo:
      '<a href=https://cofeeporto.netlify.app/ target = "_blank"><i class="fa-regular fa-eye"></i></a>',
  },
  {
    id: 4,
    title: "Todo List",
    img: '<img src="./src/assets/todolist.png" alt="" class="rounded-md" />',
    description:
      "Sebuah Web Todolist sederhana, saya bertujuan untuk mengasah kemampuan react js crud, components, props, useState useEffect",
    tech2: "React JS, Bootstrap, Firebase",
    githubLogo:
      '<a href=https://github.com/Faris955/todo-list-react target="_blank"> <i class="fa-brands fa-github"></i></a>',
    visitLogo:
      '<a href=https://to-do-list-porto.netlify.app/ target = "_blank"><i class="fa-regular fa-eye"></i></a>',
  },
  {
    id: 5,
    title: "Dash Manajemen Karyawan",
    img: '<img src="./src/assets/manajemen.png" alt="" class="rounded-md" />',
    description:
      "Website Manajemen karyawan untuk HRD/manajer ngelelola karyawan, saya bertujuan untuk mengasah kemampuan reactjs crud object, components, props, useState useEffect fetch API database",
    tech2: "React JS, Tailwind, Daisy UI, Firebase",
    githubLogo:
      '<a href=https://github.com/Faris955/todo-list-react target="_blank"> <i class="fa-brands fa-github"></i></a>',
    visitLogo:
      '<a href=https://dash-manajemen-karyawan.netlify.app/ target = "_blank"><i class="fa-regular fa-eye"></i></a>',
  },
];
namaPorto.map((porto) => {
  let div = document.createElement("div");
  div.innerHTML = `<div data-aos="zoom-in" data-aos-duration="800" data-aos-delay="200" class= "bg-neutral-800 px-4 py-3 rounded-md">
  <div class="flex flex-col gap-5" >
              <h1 class="text-lg md:text-xl">${porto.title}</h1>
              ${porto.img}
              <p class = 'text-sm md:text-base'>
                ${porto.description}
              </p>
              <span class="text-sky-300 flex justify-between items-center md:text-base"
                >${porto.tech2}
                <span class="text-gray-200 flex gap-3 px-3 items-center">
                  ${porto.githubLogo}
                  ${porto.visitLogo}
                </span>
              </span>
            </div>
  </div>`;
  portoBox.append(div);
});

// function navbar bawah
const navbar = document.getElementById("navbar");
const nav = document.getElementById("nav");

let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  if (lastScrollY < window.scrollY) {
    navbar.style.transform = "translateY(200%)";
    navbar.style.transition = "all .5s ease";

    nav.style.transition = "all .5s ease";
    nav.style.transform = "translateY(-200%)";
  } else {
    navbar.style.transform = "translateY(0)";
    navbar.style.transition = "all .5s ease";

    nav.style.transition = "all .5s ease";
    nav.style.transform = "translateY(0)";
  }

  lastScrollY = window.scrollY;
});

// function navbar atas
