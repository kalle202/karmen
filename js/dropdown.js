//først tager vi fat og finder hovedmenuerne:
const mainMenus = document.querySelector(".menuitem__info")
const subMenu = document.querySelector(".menuitem__info__dropdown")
    //så lægger vi eventlistener på mainMenus:


mainMenus.addEventListener("mouseenter", showHide);
mainMenus.addEventListener("mouseleave", showHide);


function showHide() {

    if (subMenu.style.display !== "block") {
        subMenu.style.display = "block";
    } else {
        subMenu.style.display = "none";
    }
}