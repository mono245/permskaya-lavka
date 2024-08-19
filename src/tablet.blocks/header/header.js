export let burgerMenuButton = document.querySelector(".header__burger-menu-button");

let burgerMenuElement = document.querySelector(".header__burger-menu");
let burgerMenuImage = document.querySelector(".header__burger-menu-button img");
let burgerMenuItems = document.querySelectorAll(".header__burger-menu-link");

let isBurgerMenuOpened = false;

export function toggleMenu() {
    if (isBurgerMenuOpened) {
        enableScroll();
        closeMenu();
    } else {
        disableScroll();
        openMenu();
    }
}

export function toggleMenuItems() {
    burgerMenuItems.forEach((item) => {item.onclick = closeMenu});
}

function closeMenu() {
    burgerMenuElement.classList.remove("opened");
    burgerMenuImage.src = "img/burger-menu.svg";
    isBurgerMenuOpened = false;
}

function openMenu() {
    burgerMenuElement.classList.add("opened");
    burgerMenuImage.src = "img/close-cross.svg";
    isBurgerMenuOpened = true;
}

function disableScroll() {
    let bodyClassList = document.body.classList;

    if (!bodyClassList.contains("no-scroll")) {
        bodyClassList.add("no-scroll");
    }
}

function enableScroll() {
    let bodyClassList = document.body.classList;

    if (bodyClassList.contains("no-scroll")) {
        bodyClassList.remove("no-scroll");
    }
}