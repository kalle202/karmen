//først tager vi fat og finder hovedmenuerne:
const submainMenus = document.querySelector(".footer_nav__info")
const subsubMenu = document.querySelector(".footer__nav__dropdown")
    //så lægger vi eventlistener på mainMenus:

submainMenus.addEventListener("mouseenter", showHide);
submainMenus.addEventListener("mouseleave", showHide);


function showHide() {

    if (subsubMenu.style.display !== "block") {
        subsubMenu.style.display = "block";
    } else {
        subsubMenu.style.display = "none";
    }
}