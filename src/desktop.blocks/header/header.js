const headerMenu = document.querySelector(".header__menu");
const documentName = cutExtension(window.location.pathname.split("/").at(-1));

export function markSelectedMenuItem() {
    Array.from(headerMenu.children).forEach(element => {
        let referToDocumentName = cutExtension(element.getAttribute("href"));

        if (documentName === referToDocumentName) {
            element.classList.add("header__menu-item_selected");
        }
    });
}

function cutExtension(string) {
    if (string.includes(".")) {
        return string.slice(0, string.indexOf("."));
    } else {
        return string;
    }
}