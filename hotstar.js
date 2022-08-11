let movies = [
  {
    name: "falcon and the winter soldier",
    des:
      "loren ipsum dolor sit amen consectetur adipidicing elite.Velit porro et veniam expected",
    image: "images/slider 2.PNG"
  },
  {
    name: "loki",
    des:
      "loren ipsum dolor sit amet consectetur adipidicing elite.Velit porro et veniam expected ",
    image: "images/slider 1.PNG"
  },
  {
    name: "wanda vision",
    des:
      "loren ipsum dolor sit amet consectetur adipidicing elite.Velit porro et veniam expected ",
    image: "images/slider 3.PNG"
  },
  {
    name: "raya and the last dragon ",
    des:
      "loren ipsum dolor sit amet consectetur adipidicing elite.Velit porro et veniam expected ",
    image: "images/slider 4.PNG"
  },
  {
    name: "luca",
    des:
      "loren ipsum dolor sit amet consectetur adipidicing elite.Velit porro et veniam expected ",
    image: "images/slider 5.PNG"
  }
];

const carousel = document.querySelector(".carousel");
let sliders = [];

let slideIndex = 0;

const createSlide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }
  //dom create
  let slide = document.createElement("div");
  var imgElement = document.createElement("img");
  let content = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");

  //attaching element
  imgElement.appendChild(document.createTextNode(""));
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  p.appendChild(document.createTextNode(movies[slideIndex].des));
  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(content);
  slide.appendChild(imgElement);
  carousel.appendChild(slide);

  //setting image
  imgElement.src = movies[slideIndex].image;
  slideIndex++;

  //setting css elements
  slide.className = "slider";
  content.className = "slide-content";
  h1.className = "movie-title";
  p.className = "movie-des";

  sliders.push(slide);

  if (sliders.length) {
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
      30 * (sliders.length - 2)
    }px)`;
  }
};

for (let i = 0; i < 3; i++) {
  createSlide();
}

setInterval(() => {
  createSlide();
}, 3000);

//video cards

const videocards = [...document.querySelectorAll(".video-card")];

videocards.forEach((item) => {
  item.addEventListener("mouseover", () => {
    let video = item.children[1];
    video.play();
  });
  item.addEventListener("mouseleave", () => {
    let video = item.children[1];
    video.pause();
  });
});

//card sliders
let cardcontainers = [...Document.querySelectorAll(".card-container")];
let preBtns = [...Document.querySelectorAll(".pre-btn")];
let nxtBtns = [...Document.querySelectorAll(".nxt-btn")];

cardcontainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;
  nxtBtns[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth - 200;
  });
  preBtns[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth + 200;
  });
});
