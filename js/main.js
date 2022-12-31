let loader = document.querySelector("#loader");
let body = document.body;
let navLink = document.querySelectorAll(".nav-link");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let Resume = document.querySelector("#Resume");
let card = document.querySelectorAll(".card h2");
let progressBar = document.querySelectorAll(".progress-bar");
let started = false;
// btn toUP
let toUp = document.querySelector(".toUp");
toUp.addEventListener("click", function () {
  window.scrollTo(0, 0);
});
window.onload = function () {
  if (window.scrollY > 200) {
    toUp.style.display = "block";
  } else {
    toUp.style.display = "none";
  }
  window.scrollTo(0, sessionStorage.getItem("scrollY"));
  /////////////////////////////////////////////////////////
  body.style.height = "auto";
  body.style.overflow = "auto";
  loader.style.display = "none";
};
/////////////////////////////////////////////////////////
onscroll = function () {
  if (window.scrollY > 600) {
    toUp.style.display = "block";
  } else {
    toUp.style.display = "none";
  }
  sessionStorage.setItem("scrollY", window.scrollY);
  /////////////////////////////////////////////////////////
  if (window.scrollY > 0) {
    navbar.style.background = "#00000080";
  } else if (window.scrollY == 0) {
    navbar.style.background = "transparent";
  }
  /////////////////////////////////////////////////////////
  let scrollTop = document.documentElement.scrollTop;
  sections.forEach((section) => {
    if (
      scrollTop > section.offsetTop * 0.95 &&
      scrollTop < section.offsetTop + section.offsetHeight * 0.95
    ) {
      let thisSection = section.id;
      navLink.forEach(() => {
        removeClassActive();
        document
          .querySelector(`[href='#${thisSection}']`)
          .classList.add("active");
      });
      /////////////////////////////////////////////////////////
      if (thisSection === "About") {
        if (
          window.scrollY >
            document.querySelector(`#${thisSection}`).offsetTop * 1.2 &&
          !started
        ) {
          started = true;
          card.forEach((item) => {
            counts(item);
          });
        }
      }
      /////////////////////////////////////////////////////////
      if (window.scrollY >= Resume.offsetTop * 1.2) {
        progressBar.forEach((item) => {
          let value = item.dataset.value;
          item.style.width = `${value}%`;
        });
      } else {
        progressBar.forEach((item) => {
          item.style.width = "0%";
        });
      }
      /////////////////////////////////////////////////////////
    }
  });
};
function removeClassActive() {
  navLink.forEach((item) => {
    item.classList.remove("active");
  });
}
/////////////////////////////////////////////////////////
function counts(el) {
  let target = el.dataset.target;
  let count = setInterval(() => {
    el.innerText++;
    if (el.innerText == target) {
      clearInterval(count);
    }
  }, 2000 / target);
}
/////////////////////////////////////////////////////////
let link = document.querySelectorAll(".link");
let cardx = document.querySelectorAll(".CARD");
link.forEach((itemx) => {
  itemx.onclick = function () {
    removeClassActives();
    addClassActives(itemx);
    cardx.forEach((item) => {
      if (item.classList.contains(`${itemx.innerHTML}`)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  };
});
function removeClassActives() {
  link.forEach((itemx) => {
    itemx.classList.remove("active");
  });
}
function addClassActives(itemx) {
  itemx.classList.add("active");
}
/////////////////////////////////////////////////////////
let hidelayer = document.querySelectorAll(".hidelayer");
let img = document.querySelectorAll(".card img");
let modalx = document.querySelector(".modalx");
for (let i = 0; i < hidelayer.length; i++) {
  hidelayer[i].onclick = function () {
    modalx.innerHTML = `
    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">Product ${
            i + 1
          }</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
        <img src="${img[i].attributes.src.value}" alt="...">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab perspiciatis et, voluptas esse ex expedita atque. Impedit porro eveniet,
           culpa rerum in doloremque velit perspiciatis doloribus ratione. Nobis, nisi, quasi.</p>
           <div class="icons">
            <div class="icon">
              <i class="fa fa-user"></i>
              <p>alex smith</p>
            </div>
            <div class="icon">
              <i class="fa fa-globe"></i>
              <a>www.example.com</a>
            </div>
            <div class="icon">
              <i class="fa fa-calendar"></i>
              <p>12 June 2018</p>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <h5>Share</h5>
          <div class="iconS">
          <i class="fa-brands fa-facebook-f fa-fw"></i>
          <i class="fa-brands fa-twitter fa-fw"></i>
          <i class="fa-brands fa-google fa-fw"></i>
          <i class="fa-brands fa-github fa-fw"></i>
        </div>
        </div>
      </div>
    </div>
  </div>
    `;
  };
}
