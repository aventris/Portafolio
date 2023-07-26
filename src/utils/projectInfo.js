import {
  yardSaleImages,
  todoImages,
  memoramaImages,
  cocktailDBImages,
  ricknmortyImages,
  pokeduxImages,
  todoMachineImages,
} from "@utils/projectImages";

const projectInfo = {
  angular: [
    {
      title: `Yard Sale`,
      description: `A functional online shop. You can add items to your cart, proceed to
     checkout and Paypal payment, it also has a user profile page. You can
     login as a user or administrator. The administrator has it's own
     section to manage products, users and orders`,
      techs: "Angular | Scss | Typescript",
      demo: "https://romantic-jennings-5013dd.netlify.app/home",
      github: "https://github.com/aventris/Angular-Shop",
      images: yardSaleImages,
    },
    {
      title: `Cocktail DB`,
      description:
        "A webpage containing a collection of drinks where you can check for the recipe of a cocktail. You can search a cocktail by name, ingredient or a specific tag ",
      techs: "Angular | Scss | Typescript",
      demo: "https://zippy-maamoul-810447.netlify.app/home",
      github: "https://github.com/aventris/Cocktail-DB",
      images: cocktailDBImages,
    },
  ],
  react: [
    {
      title: `Rick n' Morty Gallery`,
      description: `A page where you can find info about Rick and Morty characters, locations and episodes`,
      techs: "React | Scss | JavaScript (ES6+)",
      demo: "https://keen-morse-f82afb.netlify.app/",
      github: "https://github.com/aventris/React-Rick-and-Morty",
      images: ricknmortyImages,
    },
    {
      title: `Todo Machine`,
      description: `A copycat web version of "To Do List" app by Splend Apps. You can add ToDos to different list, create new lists and assign todo to a specific day-time, this ToDos will be organized in schedule time. Data will be saved in your browser's local storage to keep track of your ToDos`,
      techs: "React | Css | JavaScript (ES6+)",
      demo: "https://main--superb-gingersnap-8bfc77.netlify.app/",
      github: "https://github.com/aventris/Todo-Machine",
      images: todoMachineImages,
    },

    {
      title: `Rick n' Morty Memory game`,
      description: `A matching game with the characters from Rick n' Morty series`,
      techs: "React | Scss | JavaScript (ES6+)",
      demo: "https://enchanting-kulfi-9cb10c.netlify.app",
      github: "https://github.com/aventris/Memory-Game",
      images: memoramaImages,
    },
    {
      title: `Pokedux`,
      description: `List of the first pokemon generation, you can search Pokemon and get information about them. Data will be saved in browser's local storage to track info about your favorites pokemon`,
      techs: "React | Redux | Css | JavaScript (ES6+)",
      demo: "https://main--endearing-empanada-035510.netlify.app/",
      github: "https://github.com/aventris/Pokedux",
      images: pokeduxImages,
    },
    {
      title: `To-Do List`,
      description: `This is a web app of a To-Do list. Your To-Do list will be temporary
    store in the browser's local storage`,
      techs: "React | Scss | JavaScript (ES6+)",
      demo: "https://sad-lalande-e0bbcb.netlify.app/",
      github: "https://github.com/aventris/React-TodoList",
      images: todoImages,
    },
  ],
};

export { projectInfo };
