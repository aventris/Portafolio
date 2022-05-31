import {
  yardSaleImages,
  todoImages,
  memoramaImages,
} from "@utils/projectImages";

const projectInfo = {
  angular: [
    {
      title: `Yard Sale`,
      description: `A functional online shop. You can add items to your cart, proceed to
     checkout and Paypal payment, it also has a user profile page. You can
     login as a user or administrator. The administrator has it's own
     section to mage products, users and orders.`,
      techs: "Angular | Scss | Typescript",
      demo: "https://romantic-jennings-5013dd.netlify.app/home",
      github: "https://github.com/aventris/Angular-Shop",
      images: yardSaleImages,
    },
  ],
  react: [
    {
      title: `To-Do List`,
      description: `This is a web app of a To-Do list. Your To-Do list will be temporary
    store in the browser's local storage`,
      techs: "React | Scss | JavaScript (ES6+)",
      demo: "https://sad-lalande-e0bbcb.netlify.app/",
      github: "https://github.com/aventris/React-TodoList",
      images: todoImages,
    },
    {
      title: `Rick n' Mory Memorama`,
      description: `A memory game with the characters from Rick n' Morty series`,
      techs: "React | Scss | JavaScript (ES6+)",
      demo: "https://enchanting-kulfi-9cb10c.netlify.app",
      github: "https://github.com/aventris/Memory-Game",
      images: memoramaImages,
    },
  ],
};

export { projectInfo };
