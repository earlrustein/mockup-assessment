<style src="./HomeComponent.scss" lang="scss" scoped></style>
<script src="./HomeComponent.js"></script>


<template>
  <div class="home__bg-left">
    <img src="@/assets/images/bg-decals.svg" />
  </div>

  <div class="home__bg-right">
    <img src="@/assets/images/bg-leaves.svg" />
  </div>

  <div class="home">
    <NavbarComponent />

    <div class="home__header">
      <div class="home__header-title">
        <span> 
          Protoapp
        </span>
      </div>

      <div class="home__header-content">
        <span>
          Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.
        </span>
        
      </div>

      <div class="home__header-btn-content">
        <button>
          <span>
            Get Started
          </span>
        </button>
      </div>
    </div>

    
    <div class="home__hr-line"></div>
    <div class="home__download-links">
      <a href="#"> 
        <img src="@/assets/images/badge.play-store.svg" />
      </a>
      <a href="#">
        <img src="@/assets/images/badge.app-store.svg" />
      </a>
    </div>
    <div class="home__hr-line"></div>

    <div class="home__header-body">
      <div class="home__header-body-title">
        <span>
          Meet Protoapp
        </span>
      </div>
      <div class="home__header-body-content">
        <span>
          The app lorem ipsum common placeholder text used to demonstrate 
          the graphic elements of a document of visual presentation.
        </span>
      </div>
    </div>

    <div class="home__section">
      <div class="home__section-content">
        <div>
          <div class="home__section-content-title"> Discover </div>
          <div class="home__section-content-text">
            Get information on using these guidelines whenever you are
            using therefore they have the same style and quality.
          </div>
        </div>
        <div>
          <img src="@/assets/images/product-search.svg" />
        </div>
      </div>
      
      <div class="home__section-content">
        <div>
          <div class="home__section-content-title"> Augmented </div>
          <div class="home__section-content-text">
            Word salad often arouses curiousity due to its 
            seemingly intteligent and tasteful play on words.
          </div>
        </div>
        <div>
          <img src="@/assets/images/product-smartphone.svg" />
        </div>
      </div>

      <div class="home__section-content">
        <div>
          <div class="home__section-content-title"> Endless Possibilities </div>
          <div class="home__section-content-text">
            Management Systems shouldn't be a bore. 
            Run out of words? heres some lorem ipsum: 
            Lorem ipsum dolor sit amet.
          </div>
        </div>
        <div>
          <img src="@/assets/images/product-work.svg" />
        </div>
      </div>
    </div>

    <div class="home__section-download">
      <div class="home__section-download-bg">
        <img src="@/assets/images/bg-decals2.svg" />
      </div>
      <div class="home__section-download-content">
        <span class="home__section-download-title">
        Deep dive. Ready?
        </span>
        <span class="home__section-download-text">
          So are we. Unless. You're. Not. Word filler.
        </span>
      </div>
      <div class="home__section-download-links">
        <a href="#"> 
          <img src="@/assets/images/badge.play-store.svg" />
        </a>
        <a href="#">
          <img src="@/assets/images/badge.app-store.svg" />
        </a>
      </div>
    </div>

    <div class="home__section-actions">
      <span> Last Call to Action </span>
      <div class="home__section-actions-content">
        Another section content goes here
      </div>
      
      <div class="home__card-container">
        <template v-for="data in cardData" :key="data">
          <CardComponent :cardData="data" />
        </template>
      </div>

      <div class="home__section-actions-bg">
        <img src="@/assets/images/bg-decals3.svg" />
      </div>
      
    </div>
  </div>
</template>
