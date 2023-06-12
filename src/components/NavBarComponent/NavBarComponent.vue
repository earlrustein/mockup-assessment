<style src="./NavBarComponent.scss" lang="scss" scoped></style>
<script src="./NavBarComponent.js"></script>

<template>
    <div class="navbar">
        <a href="#" class="navbar__logo"> 
            <img class="navbar__icon" src="./../../assets/images/logo1.svg" />
            <span> Protoapp </span> 
        </a>
        <ul class="navbar__nav-links">
            <li>
                <a href="#"> Home </a>
            </li>
        </ul>
        <div class="navbar__burger-menu" @click="openMenu">
            <font-awesome-icon icon="fa-solid fa-bars" bounce style="color: #000000;" />
        </div>
    </div>
    

    <div class="navbar__mobile-menu-container">
        <ul class="navbar__mobile-menu-links">
            <li>
                <a href="#"> Home </a>
            </li>
        </ul>
        
        <div class="navbar__close-icon" @click="openMenu">
            <font-awesome-icon icon="fa-solid fa-xmark" size="lg" style="color: #000000;" />
        </div>
    </div>
</template>