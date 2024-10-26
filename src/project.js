import {
    burgerMenuButton, toggleMenu, toggleMenuItems  
} from "./tablet.blocks/header/header.js";
import { markSelectedMenuItem, isRootPage } from "./desktop.blocks/header/header.js";

burgerMenuButton.addEventListener("click", event => {
    event.preventDefault();
    toggleMenu();
});
burgerMenuButton.addEventListener("touchstart", event => {
    event.preventDefault();

    burgerMenuButton.ontouchend = () => {
        toggleMenu();
        burgerMenuButton.ontouchend = null;
    }
});
toggleMenuItems();

if (!isRootPage()) {
    markSelectedMenuItem();
}