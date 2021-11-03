"use strict";

//main menu nav visability toggle

const mainMenuNav = document.querySelector(".menunav__icon");
const closeMainNav = document.querySelector(".menunav__icon-active");
const popoutMenu = document.querySelector(".popoutMenu__container");
const popoutMenuIcon = document.querySelector(".menunav__icon");
const menuOverlay = document.querySelector(".menunav__overlay");

mainMenuNav.addEventListener("click", function (e) {
  popoutMenu.classList.add("active");
  closeMainNav.classList.add("active");
  mainMenuNav.classList.add("active__menu--icon");
  menuOverlay.classList.remove("menunav__overlay--hidden");
});

const closeMenuAndOverlay = function () {
  popoutMenu.classList.remove("active");
  closeMainNav.classList.remove("active");
  mainMenuNav.classList.remove("active__menu--icon");
  menuOverlay.classList.add("menunav__overlay--hidden");
};

closeMainNav.addEventListener("click", closeMenuAndOverlay);
menuOverlay.addEventListener("click", closeMenuAndOverlay);

//food menu grid visability toggle

//defining each options grid individually
// const foodMenuGridApp = document.querySelector(".foodmenu__gridcontainer--app");
// const foodMenuGridEnt = document.querySelector(".foodmenu__gridcontainer--ent");
// const foodMenuGridBur = document.querySelector(".foodmenu__gridcontainer--bur");
// const foodMenuGridSan = document.querySelector(".foodmenu__gridcontainer--san");
// const foodMenuGridPiz = document.querySelector(".foodmenu__gridcontainer--piz");
// const foodMenuGridSal = document.querySelector(".foodmenu__gridcontainer--sal");
// const foodMenuGridVeg = document.querySelector(".foodmenu__gridcontainer--veg");
// const foodMenuGridKid = document.querySelector(".foodmenu__gridcontainer--kid");
// const foodMenuGridDes = document.querySelector(".foodmenu__gridcontainer--des");

// //defining each options button individually
// const foodMenuTypeApp = document.querySelector(".op-app");
// const foodMenuTypeEnt = document.querySelector(".op-ent");
// const foodMenuTypeBur = document.querySelector(".op-bur");
// const foodMenuTypeSan = document.querySelector(".op-san");
// const foodMenuTypePiz = document.querySelector(".op-piz");
// const foodMenuTypeSal = document.querySelector(".op-sal");
// const foodMenuTypeVeg = document.querySelector(".op-veg");
// const foodMenuTypeKid = document.querySelector(".op-kid");
// const foodMenuTypeDes = document.querySelector(".op-des");

// foodMenuTypeApp.addEventListener("click", function (e) {
//   console.log("working");
//   foodMenuGridApp.classList.toggle("foodMenuActive");

//   foodMenuGridEnt.classList.remove("foodMenuActive");
//   foodMenuGridBur.classList.remove("foodMenuActive");
//   foodMenuGridSan.classList.remove("foodMenuActive");
//   foodMenuGridPiz.classList.remove("foodMenuActive");
//   foodMenuGridSal.classList.remove("foodMenuActive");
//   foodMenuGridVeg.classList.remove("foodMenuActive");
//   foodMenuGridKid.classList.remove("foodMenuActive");
//   foodMenuGridDes.classList.remove("foodMenuActive");

//   foodMenuTypeApp.scrollIntoView();
// });

// foodMenuTypeEnt.addEventListener("click", function (e) {
//   console.log("working");
//   foodMenuGridEnt.classList.toggle("foodMenuActive");

//   foodMenuGridApp.classList.remove("foodMenuActive");
//   foodMenuGridBur.classList.remove("foodMenuActive");
//   foodMenuGridSan.classList.remove("foodMenuActive");
//   foodMenuGridPiz.classList.remove("foodMenuActive");
//   foodMenuGridSal.classList.remove("foodMenuActive");
//   foodMenuGridVeg.classList.remove("foodMenuActive");
//   foodMenuGridKid.classList.remove("foodMenuActive");
//   foodMenuGridDes.classList.remove("foodMenuActive");

//   foodMenuTypeEnt.scrollIntoView();
// });

// foodMenuTypeBur.addEventListener("click", function (e) {
//   console.log("working");
//   foodMenuGridBur.classList.toggle("foodMenuActive");

//   foodMenuGridApp.classList.remove("foodMenuActive");
//   foodMenuGridEnt.classList.remove("foodMenuActive");
//   foodMenuGridSan.classList.remove("foodMenuActive");
//   foodMenuGridPiz.classList.remove("foodMenuActive");
//   foodMenuGridSal.classList.remove("foodMenuActive");
//   foodMenuGridVeg.classList.remove("foodMenuActive");
//   foodMenuGridKid.classList.remove("foodMenuActive");
//   foodMenuGridDes.classList.remove("foodMenuActive");

//   foodMenuTypeBur.scrollIntoView();
// });

// foodMenuTypeSan.addEventListener("click", function (e) {
//   console.log("working");
//   foodMenuGridSan.classList.toggle("foodMenuActive");

//   foodMenuGridApp.classList.remove("foodMenuActive");
//   foodMenuGridEnt.classList.remove("foodMenuActive");
//   foodMenuGridBur.classList.remove("foodMenuActive");
//   foodMenuGridPiz.classList.remove("foodMenuActive");
//   foodMenuGridSal.classList.remove("foodMenuActive");
//   foodMenuGridVeg.classList.remove("foodMenuActive");
//   foodMenuGridKid.classList.remove("foodMenuActive");
//   foodMenuGridDes.classList.remove("foodMenuActive");

//   foodMenuTypeSan.scrollIntoView();
// });

// foodMenuTypePiz.addEventListener("click", function (e) {
//   console.log("working");
//   foodMenuGridPiz.classList.toggle("foodMenuActive");

//   foodMenuGridApp.classList.remove("foodMenuActive");
//   foodMenuGridEnt.classList.remove("foodMenuActive");
//   foodMenuGridBur.classList.remove("foodMenuActive");
//   foodMenuGridSan.classList.remove("foodMenuActive");
//   foodMenuGridSal.classList.remove("foodMenuActive");
//   foodMenuGridVeg.classList.remove("foodMenuActive");
//   foodMenuGridKid.classList.remove("foodMenuActive");
//   foodMenuGridDes.classList.remove("foodMenuActive");

//   foodMenuTypePiz.scrollIntoView();
// });

// foodMenuTypeSal.addEventListener("click", function (e) {
//   console.log("working");
//   foodMenuGridSal.classList.toggle("foodMenuActive");

//   foodMenuGridApp.classList.remove("foodMenuActive");
//   foodMenuGridEnt.classList.remove("foodMenuActive");
//   foodMenuGridBur.classList.remove("foodMenuActive");
//   foodMenuGridSan.classList.remove("foodMenuActive");
//   foodMenuGridPiz.classList.remove("foodMenuActive");
//   foodMenuGridVeg.classList.remove("foodMenuActive");
//   foodMenuGridKid.classList.remove("foodMenuActive");
//   foodMenuGridDes.classList.remove("foodMenuActive");

//   foodMenuTypeSal.scrollIntoView();
// });

// foodMenuTypeVeg.addEventListener("click", function (e) {
//   console.log("working");
//   foodMenuGridVeg.classList.toggle("foodMenuActive");

//   foodMenuGridApp.classList.remove("foodMenuActive");
//   foodMenuGridEnt.classList.remove("foodMenuActive");
//   foodMenuGridBur.classList.remove("foodMenuActive");
//   foodMenuGridSan.classList.remove("foodMenuActive");
//   foodMenuGridPiz.classList.remove("foodMenuActive");
//   foodMenuGridSal.classList.remove("foodMenuActive");
//   foodMenuGridKid.classList.remove("foodMenuActive");
//   foodMenuGridDes.classList.remove("foodMenuActive");

//   foodMenuTypeVeg.scrollIntoView();
// });

// foodMenuTypeKid.addEventListener("click", function (e) {
//   console.log("working");
//   foodMenuGridKid.classList.toggle("foodMenuActive");

//   foodMenuGridApp.classList.remove("foodMenuActive");
//   foodMenuGridEnt.classList.remove("foodMenuActive");
//   foodMenuGridBur.classList.remove("foodMenuActive");
//   foodMenuGridSan.classList.remove("foodMenuActive");
//   foodMenuGridPiz.classList.remove("foodMenuActive");
//   foodMenuGridSal.classList.remove("foodMenuActive");
//   foodMenuGridVeg.classList.remove("foodMenuActive");
//   foodMenuGridDes.classList.remove("foodMenuActive");

//   foodMenuTypeKid.scrollIntoView();
// });

// foodMenuTypeDes.addEventListener("click", function (e) {
//   console.log("working");
//   foodMenuGridDes.classList.toggle("foodMenuActive");

//   foodMenuGridApp.classList.remove("foodMenuActive");
//   foodMenuGridEnt.classList.remove("foodMenuActive");
//   foodMenuGridBur.classList.remove("foodMenuActive");
//   foodMenuGridSan.classList.remove("foodMenuActive");
//   foodMenuGridPiz.classList.remove("foodMenuActive");
//   foodMenuGridSal.classList.remove("foodMenuActive");
//   foodMenuGridVeg.classList.remove("foodMenuActive");
//   foodMenuGridKid.classList.remove("foodMenuActive");

//   foodMenuTypeDes.scrollIntoView();
// });

//food menu grid visability toggle

const btnsfood = document.querySelectorAll(".food__open");

const activeFoodGrid = document.querySelectorAll(".foodmenu__gridcontainer");

const foodMenuClose = document.querySelector(".foodmenu__types--arrow-close");
const foodMenuGridApp = document.querySelector(".foodmenu__gridcontainer--app");
const foodMenuTypeApp = document.querySelector(".op-app");
const menuSrcClickClose = document.querySelectorAll(".foodmenu__types--option");

for (let i = 0; i < btnsfood.length; i++) {
  btnsfood[i].addEventListener("click", function () {
    activeFoodGrid[i].classList.remove("food__hidden");
    activeFoodGrid[i].classList.add("food__visable");
    foodMenuClose.classList.add("food__close--visable");
    // activeFoodGrid[i - 1].scrollIntoView();
    if (i !== 0) {
      activeFoodGrid[0].classList.add("food__hidden");
      activeFoodGrid[0].classList.remove("food__visable");
    }
    if (i !== 1) {
      activeFoodGrid[1].classList.add("food__hidden");
      activeFoodGrid[1].classList.remove("food__visable");
    }
    if (i !== 2) {
      activeFoodGrid[2].classList.add("food__hidden");
      activeFoodGrid[2].classList.remove("food__visable");
    }
    if (i !== 3) {
      activeFoodGrid[3].classList.add("food__hidden");
      activeFoodGrid[3].classList.remove("food__visable");
    }
    if (i !== 4) {
      activeFoodGrid[4].classList.add("food__hidden");
      activeFoodGrid[4].classList.remove("food__visable");
    }
    if (i !== 5) {
      activeFoodGrid[5].classList.add("food__hidden");
      activeFoodGrid[5].classList.remove("food__visable");
    }
    if (i !== 6) {
      activeFoodGrid[6].classList.add("food__hidden");
      activeFoodGrid[6].classList.remove("food__visable");
    }
    if (i !== 7) {
      activeFoodGrid[7].classList.add("food__hidden");
      activeFoodGrid[7].classList.remove("food__visable");
    }
    if (i !== 8) {
      activeFoodGrid[8].classList.add("food__hidden");
      activeFoodGrid[8].classList.remove("food__visable");
    }
  });

  foodMenuClose.addEventListener("click", function () {
    activeFoodGrid[i].classList.add("food__hidden");
    activeFoodGrid[i].classList.remove("food__visable");
    foodMenuClose.classList.remove("food__close--visable");
    foodMenuTypeApp.scrollIntoView();
  });

  // document.addEventListener("click", function (e) {
  //   console.log(e);
  //   console.log(e.className);
  //   // console.log(menuSrcClickClose);
  //   if (e.className !== menuSrcClickClose) {
  //     console.log("it worked");
  //     activeFoodGrid[i].classList.add("food__hidden");
  //     activeFoodGrid[i].classList.remove("food__visable");
  //     foodMenuClose.classList.remove("food__close--visable");
  //     // foodMenuTypeApp.scrollIntoView();
  //   }
  // });
}

// if the element that is clicked is not one of the buttons or the words inside
// the buttons && a button contains the class of food__visable then remove
// food__visable and add food__hidden

//steps
//1) target and isolate the button and the element inside.
//2) make it to where when anything other than the button or element inside
//is clicked do something
//3) write a function that says if anything other than those two elements is clicked
// && a button contains the class of food__visable then remove
// food__visable and add food__hidden to that/those button(s)

//step 1)

document.addEventListener("click", function (e) {
  console.log(e);
  // console.log(e.srcElement);
  // if (e.srcElement !== menuSrcClickClose) {
  //   console.log("it worked");
  // }
});
