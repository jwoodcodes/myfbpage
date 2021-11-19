'use strict';

//main menu nav visability toggle

const mainMenuNav = document.querySelector('.menunav__icon');
const closeMainNav = document.querySelector('.menunav__icon-active');
const popoutMenu = document.querySelector('.popoutMenu__container');
const popoutMenuIcon = document.querySelector('.menunav__icon');
const menuOverlay = document.querySelector('.menunav__overlay');

mainMenuNav.addEventListener('click', function (e) {
  popoutMenu.classList.add('active');
  closeMainNav.classList.add('active');
  mainMenuNav.classList.add('active__menu--icon');
  menuOverlay.classList.remove('menunav__overlay--hidden');
});

const closeMenuAndOverlay = function () {
  popoutMenu.classList.remove('active');
  closeMainNav.classList.remove('active');
  mainMenuNav.classList.remove('active__menu--icon');
  menuOverlay.classList.add('menunav__overlay--hidden');
};

closeMainNav.addEventListener('click', closeMenuAndOverlay);
menuOverlay.addEventListener('click', closeMenuAndOverlay);

//food menu grid visability toggle

const btnsfood = document.querySelectorAll('.food__open');

const activeFoodGrid = document.querySelectorAll('.foodmenu__gridcontainer');

const foodMenuClose = document.querySelector('.foodmenu__types--arrow-close');
const foodMenuGridApp = document.querySelector('.foodmenu__gridcontainer--app');
const foodMenuTypeApp = document.querySelector('.op-app');
const menuSrcClickClose = document.querySelectorAll('.foodmenu__types--option');

for (let i = 0; i < btnsfood.length; i++) {
  btnsfood[i].addEventListener('click', function () {
    activeFoodGrid[i].classList.remove('food__hidden');
    activeFoodGrid[i].classList.add('food__visable');
    foodMenuClose.classList.add('food__close--visable');
    // activeFoodGrid[i - 1].scrollIntoView();

    //functionality to close an open food menu grid when a
    //different food menu button is selected
    if (i !== 0) {
      activeFoodGrid[0].classList.add('food__hidden');
      activeFoodGrid[0].classList.remove('food__visable');
    }
    if (i !== 1) {
      activeFoodGrid[1].classList.add('food__hidden');
      activeFoodGrid[1].classList.remove('food__visable');
    }
    if (i !== 2) {
      activeFoodGrid[2].classList.add('food__hidden');
      activeFoodGrid[2].classList.remove('food__visable');
    }
    if (i !== 3) {
      activeFoodGrid[3].classList.add('food__hidden');
      activeFoodGrid[3].classList.remove('food__visable');
    }
    if (i !== 4) {
      activeFoodGrid[4].classList.add('food__hidden');
      activeFoodGrid[4].classList.remove('food__visable');
    }
    if (i !== 5) {
      activeFoodGrid[5].classList.add('food__hidden');
      activeFoodGrid[5].classList.remove('food__visable');
    }
    if (i !== 6) {
      activeFoodGrid[6].classList.add('food__hidden');
      activeFoodGrid[6].classList.remove('food__visable');
    }
    if (i !== 7) {
      activeFoodGrid[7].classList.add('food__hidden');
      activeFoodGrid[7].classList.remove('food__visable');
    }
    if (i !== 8) {
      activeFoodGrid[8].classList.add('food__hidden');
      activeFoodGrid[8].classList.remove('food__visable');
    }
  });

  //button to close food menu grid
  foodMenuClose.addEventListener('click', function () {
    activeFoodGrid[i].classList.add('food__hidden');
    activeFoodGrid[i].classList.remove('food__visable');
    foodMenuClose.classList.remove('food__close--visable');
    foodMenuTypeApp.scrollIntoView();
  });

  //closes food menu grid when clicked outside of button
  document.addEventListener('click', function (e) {
    if (e.srcElement.classList.contains('food__open')) {
    } else if (e.srcElement.classList.contains('foodmenu__types--name')) {
    } else if (e.srcElement.classList.contains('foodmenu__griditem')) {
    } else if (e.srcElement.classList.contains('foodmenu__griditem--disc')) {
    } else {
      activeFoodGrid[i].classList.add('food__hidden');
      activeFoodGrid[i].classList.remove('food__visable');
      foodMenuClose.classList.remove('food__close--visable');
      activeFoodGrid[i].scrollIntoView();
    }
  });
}
