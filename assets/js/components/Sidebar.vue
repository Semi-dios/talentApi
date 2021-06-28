<template>
  <aside id="Sidebar" class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="/#/dashboard" class="brand-link">
      <img src="/images/jeansLogo.jpg" alt="Blog Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
      <span class="brand-text font-weight-light">Blog</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar overflow-none">
   

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
           <li class="nav-item has-treeview ">
            <a href="#" class="nav-link ">
              <i class="nav-icon fas fa-cash-register"></i>
              <p>
              Resume
              </p>
            </a>
          </li>
          |<li class="nav-item has-treeview ">
                <a href="/dashboard/blogs" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>List Blogs</p>
                </a>
              </li>
            <li class="nav-item has-treeview ">
            <a href="/dashboard/blogs/create" class="nav-link">
                <i class="far fa-circle nav-icon"></i>
                <p>Create Blog</p>
            </a>
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
