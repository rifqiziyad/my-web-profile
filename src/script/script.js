import SkillList from "../json/SkillList.json" assert { type: "json" };
import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

const setSkillList = () => {
  const dataSkillList = SkillList;
  const getElementMySkill = document.getElementById("my-skill");
  Object.keys(dataSkillList).forEach((key) => {
    const wrapper = document.createElement("div");
    const className = key.toLocaleLowerCase().replace("developer", "");
    wrapper.setAttribute("class", className);
    getElementMySkill.appendChild(wrapper);
    wrapper.innerHTML += `<h2>${key}</h2>`;
    const section = document.createElement("div");
    section.setAttribute("id", className);
    wrapper.appendChild(section);

    const data = dataSkillList[key];
    data.map((item, index) => {
      const { _src, _alt, _href } = item;
      section.innerHTML += `
        <a target="_blank" href=${_href} data-aos="zoom-out-right" data-aos-delay=${
        index * 50
      }>
          <img src=${_src} alt=${_alt} />
        </a>  
      `;
    });
  });
};

const swiper = () => {
  new Swiper(".mySwiper", {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 30,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
    spaceBetween: 30,
    loop: true,
  });
};

const initApp = () => {
  setSkillList();
  AOS.init();
  swiper();
};

document.addEventListener("DOMContentLoaded", initApp);
