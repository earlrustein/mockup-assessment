export default {
    name: 'NavBarComponent',
    methods: {
        openMenu() {
            let elem = document.getElementsByClassName("navbar__mobile-menu-container")[0];
            let body = document.getElementsByTagName("BODY")[0];
            if (elem.style.display === "flex") {
                elem.style.display = "none";
                body.style.overflowY = "visible"; 
            } else {
                body.style.overflowY = "hidden"; 
                elem.style.display = "flex";
            }
        }
    }
}