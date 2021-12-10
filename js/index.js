//MENU Footer
let OpenMenuICON = document.getElementById('menu_Open'),
    CloseMenuICON = document.getElementById('menu_notOpen'),
    footerMenu = document.querySelector('.footer'),
    footer = document.querySelector('footer')

let menuOpened = footerMenu.style.opacity || false
if (!menuOpened) {
    OpenMenuICON.style.opacity = '0'
    OpenMenuICON.style.display = 'none'
} else {
    CloseMenuICON.style.opacity = '0'
    CloseMenuICON.style.display = 'none'
}


if(isPC()){CloseMenu()}
function CloseMenu() {
    footerMenu.style.left = '-250px';
    footerMenu.style.opacity = '0';
    OpenMenuICON.style.display = 'block';
    OpenMenuICON.style.opacity = '1'
    CloseMenuICON.style.opacity = '0'
    CloseMenuICON.style.display = 'none'
    footer.style.minWidth = '0'
}
function OpenMenu() {
    footerMenu.style.opacity = '1';
    footerMenu.style.left = '0';
    CloseMenuICON.style.display = 'block';
    CloseMenuICON.style.opacity = '1'
    OpenMenuICON.style.opacity = '0'
    OpenMenuICON.style.display = 'none'
    footer.style.minWidth = '250px'
}
CloseMenuICON.addEventListener('click', CloseMenu)
OpenMenuICON.addEventListener('click', OpenMenu)





function isTablet() {
    return window.innerWidth < 1020
}
function isMobile() {
    return window.innerWidth < 600
}
function isPC() {
    return window.innerWidth < 1400
}

