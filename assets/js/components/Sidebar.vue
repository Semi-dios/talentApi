<template>
  <aside id="Sidebar" class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="/dashboard" class="brand-link">
      <h3 class="brand-text font-weight-light">Blog</h3>
    </a>

    <!-- Sidebar -->
    <div class="sidebar overflow-none">
   

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
           <li class="nav-item has-treeview ">
            <router-link to="/dashboard" class="nav-link ">
              <i class="nav-icon fas fa-cash-register"></i>
              <p>
              Resume
              </p>
            </router-link>
          </li>
            <li class="nav-item has-treeview ">
            <router-link to="/dashboard/create" class="nav-link">
                <i class="far fa-circle nav-icon"></i>
                <p>Create Blog</p>
            </router-link>
            </li>

         



        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
</template>

<script>
export default {

}
</script>

<style>

</style>
