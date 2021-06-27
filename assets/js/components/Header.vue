<template>


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
</template>

<script>
export default {

}
</script>

<style>

</style>