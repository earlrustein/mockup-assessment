<style src="./CardComponent.scss" lang="scss" scoped></style>
<script src="./CardComponent.js"></script>

<template>
    <div class="card">
        <div class="card__icon-part">
            <img :src="cardData.icon" />
            <span> {{ cardData.iconDescription }} </span>
        </div>
        <div class="card__text-part">
            <span class="card__text-part-subtitle">
                {{ cardData.subtitle }}
            </span>
            <span class="card__text-part-title">
                {{ cardData.title }}
            </span>
            <span class="card__text-part-body">
                {{ cardData.body }}
            </span>
        </div>
    </div>
</template>