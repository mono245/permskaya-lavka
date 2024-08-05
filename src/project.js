import {
    burgerMenuButton, toggleMenu, toggleMenuItems  
} from "./tablet.blocks/header/header.js";
import { markSelectedMenuItem } from "./desktop.blocks/header/header.js";

burgerMenuButton.addEventListener("click", toggleMenu);
toggleMenuItems();

markSelectedMenuItem();