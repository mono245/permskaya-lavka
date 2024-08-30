const headerMenu = document.querySelector(".header__menu");
const documentName = window.location.pathname.split("/").at(-1);
// if this is root page, we don't need this script
if (documentName === "") {
    throw "stop execution";
}       

export function markSelectedMenuItem() {
    Array.from(headerMenu.children).forEach(element => {
        let referToDocumentName = element.getAttribute("href");

        if (documentName === referToDocumentName) {
            element.classList.add("header__menu-item_selected");
        }
    });
}