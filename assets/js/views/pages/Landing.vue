<template>
  <div class="body-container prueba container-fluid" id="viewLanding">
    
    <div class="row">
      <div class="col-sm-2"></div>

      <!--------------- SCROLL TOP --------------->
      <a href="#" class="scrolltop" id="scroll-top">
        <i class="fas fa-angle-up scrolltop__icon"></i>
      </a>

      <!--------------- HEADER --------------->
      <header class="l-header  z-fixed scroll-header" id="header">
        <nav class="nav bd-container">
          <a href="#" class="nav__logo">Front End </a>

          <div class="nav__menu" id="nav-menu">
            <ul class="nav__list">
              <li class="nav__item ">
                <a href="#home" class="nav__link" @click="hideMenu">Home</a>
              </li>
              <li class="nav__item ">
                <a href="#about" class="nav__link" @click="hideMenu">About Me</a>
              </li>           
            
              <li class="nav__item ">
                <a  class="nav__link" id="show-modal" @click="showModal()" href="#" role="button">Login</a>
              </li>
              <li class="nav__item d-flex align-items-center justify-content-center" >
                <i
                  class="far fa-moon change-theme "
                  @click="changeTheme"
                  id="theme-button"
                ></i>
              </li>
            </ul>
          </div>
          <div class="nav__toggle" id="nav-toggle" @click="showMenu">
            <i class="fas fa-bars"></i>
          </div>
        </nav>
      </header>

      <main class="l-main">
        <!------------ SIDEBAR LOGIN ------------->
          <modalLogin  v-if="openModal" @close="showModal = false" ></modalLogin>
        <!--------------- HOME --------------->
        <section class="home" id="home">
          <div class="home__container bd-container bd-grid">
            <div class="home__data">
              <h1 class="home__title biggest-font-size mb-1">Developer Web</h1>
              <h2 class="home__subtitle">
                Hi ! <br />
                I'm front end , welcome to my website
              </h2>
              <a href="#" class="button">View Menu</a>
            </div>

            <img src="images/img1.1.png" alt="" />
          </div>
        </section>

        <!--------------- ABOUT --------------->
        <section class="about section bd-container" id="about">
          <div class="about__container bd-grid">
            <div class="about__data">
              <span class="section-subtitle  about__initial">About Me</span>
              <h2 class="section-title mb-3">
                  I am Developer Web from Bogota , Colombia   <br />
               
              </h2>
              <p class="about__description mb-3">
                Currently a student in analysis of information system knowledge in development with programming languages such as PHP, Javascript, C and frameworks as Laravel, Vue js, design of use cases, experience in MVC development
              </p>
              <a href="#" class="button">Learn more ..</a>
            </div>

            <img src="images/img1.1.png" alt="" class="about__img" />
          </div>
        </section>

      

        <!--------------- APP --------------->
        <section class="app section bd-container">
          <div class="app__container bd-grid">
            <div class="app__data">
              <span class="section-subtitle app__initial">App</span>
              <h2 class="section-title">App is aviable</h2>
              <p class="app__description">
                Find our application and dowload it, you can make reservations,
                food orders, see your deliveries on the way and much more.
              </p>

              <div class="app__stores">
                <a href="#"
                  ><img src="images/appstore.jpg" alt="" class="app__store"
                /></a>
                <a href="#"
                  ><img src="images/playstore.jpg" alt="" class="app__store"
                /></a>
              </div>
            </div>

            <img src="images/celular.png" alt="" class="app__img" />
          </div>
        </section>

       
      </main>

      <!--------------- FOOTER --------------->
      <Footer/>
    </div>
  </div>
</template>

<script>
import Footer from '../../components/Footer.vue'
import modalLogin from './Login.vue'
export default {
    name: 'Landing',
    components: {
        modalLogin,
        Footer
    } ,
  data() {
    return {
      scrolly: "",
      openModal: false
      
    };
  },

  methods: {
    showModal(){
        this.openModal = true;
        const modalLogin = document.getElementById('modalLogin');
        modalLogin.style.display = 'block';
    },  
    showMenu() {
      const nav = document.getElementById("nav-menu");
      //console.log(nav);
      nav.classList.toggle("show-menu");
    },
    hideMenu() {
      const link = document.querySelector(".nav__link");
      console.log(link);

      link.classList.toggle("active-link");
      setTimeout(function () {
        const nav = document.getElementById("nav-menu");
        //console.log(nav);
        nav.classList.remove("show-menu");
      }, 500);
    },

    /*========== SHOW SCROLL TOP ==========*/
    scrollTop() {
      const scrollTop = document.getElementById("scroll-top");
      this.scrolly = window.top.scrollY;
      if (this.scrolly >= 560) scrollTop.classList.add("scroll-top");
      else scrollTop.classList.remove("scroll-top");
    },
    /*========== CHANGE THEME ==========*/
    changeTheme() {
      const theme = document.getElementById("theme-button");
      const body = document.querySelector(".body-container");
     body.classList.toggle("dark-theme");
      const icontheme = "fa-sun";
      theme.classList.toggle(icontheme);
    },
    /*========== SCROLL REVEAL ANIMATION ==========*/

  },
  mounted() {
    window.addEventListener("scroll", this.scrollTop);

  },
};
</script>

<style>


</style>
