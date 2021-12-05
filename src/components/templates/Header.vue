<template>
      <!-- Navbar -->
      <nav class="main-header navbar navbar-expand navbar-white navbar-light">
        <!-- Left navbar links -->
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" data-widget="pushmenu" to="#" role="button"><i class="fas fa-bars"></i></router-link>
          </li>
          <li class="nav-item d-none d-sm-inline-block">
            <router-link to="index3.html" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item d-none d-sm-inline-block">
            <router-link to="#" class="nav-link">Contact</router-link>
          </li>
        </ul>

        <!-- SEARCH FORM -->
        <form class="form-inline ml-3">
          <div class="input-group input-group-sm">
            <input class="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search">
            <div class="input-group-append">
              <button class="btn btn-navbar" type="submit">
                <i class="fas fa-search"></i>
              </button>
            </div>
          </div>
        </form>

        <!-- Right navbar links -->
        <ul class="navbar-nav ml-auto">
          <!-- Messages Dropdown Menu -->
          <li class="nav-item dropdown">
            <router-link class="nav-link" data-toggle="dropdown" to="#">
              <i class="far fa-comments"></i>
              <span class="badge badge-danger navbar-badge">3</span>
            </router-link>
            <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
              <router-link to="#" class="dropdown-item">
                <!-- Message Start -->
                <div class="media">
                  <img src="/static/dist/img/user1-128x128.jpg" alt="User Avatar" class="img-size-50 mr-3 img-circle">
                  <div class="media-body">
                    <h3 class="dropdown-item-title">
                      Brad Diesel
                      <span class="float-right text-sm text-danger"><i class="fas fa-star"></i></span>
                    </h3>
                    <p class="text-sm">Call me whenever you can...</p>
                    <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
                  </div>
                </div>
                <!-- Message End -->
              </router-link>
              <div class="dropdown-divider"></div>
              <router-link to="#" class="dropdown-item">
                <!-- Message Start -->
                <div class="media">
                  <img src="/static/dist/img/user8-128x128.jpg" alt="User Avatar" class="img-size-50 img-circle mr-3">
                  <div class="media-body">
                    <h3 class="dropdown-item-title">
                      John Pierce
                      <span class="float-right text-sm text-muted"><i class="fas fa-star"></i></span>
                    </h3>
                    <p class="text-sm">I got your message bro</p>
                    <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
                  </div>
                </div>
                <!-- Message End -->
              </router-link>
              <div class="dropdown-divider"></div>
              <router-link to="#" class="dropdown-item">
                <!-- Message Start -->
                <div class="media">
                  <img src="/static/dist/img/user3-128x128.jpg" alt="User Avatar" class="img-size-50 img-circle mr-3">
                  <div class="media-body">
                    <h3 class="dropdown-item-title">
                      Nora Silvester
                      <span class="float-right text-sm text-warning"><i class="fas fa-star"></i></span>
                    </h3>
                    <p class="text-sm">The subject goes here</p>
                    <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
                  </div>
                </div>
                <!-- Message End -->
              </router-link>
              <div class="dropdown-divider"></div>
              <router-link to="#" class="dropdown-item dropdown-footer">See All Messages</router-link>
            </div>
          </li>
          <!-- Notifications Dropdown Menu -->
          <li class="nav-item dropdown">
            <router-link class="nav-link" data-toggle="dropdown" to="#">
              <i class="far fa-bell"></i>
              <span class="badge badge-warning navbar-badge">15</span>
            </router-link>
            <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
              <span class="dropdown-item dropdown-header">15 Notifications</span>
              <div class="dropdown-divider"></div>
              <router-link to="#" class="dropdown-item">
                <i class="fas fa-envelope mr-2"></i> 4 new messages
                <span class="float-right text-muted text-sm">3 mins</span>
              </router-link>
              <div class="dropdown-divider"></div>
              <router-link to="#" class="dropdown-item">
                <i class="fas fa-users mr-2"></i> 8 friend requests
                <span class="float-right text-muted text-sm">12 hours</span>
              </router-link>
              <div class="dropdown-divider"></div>
              <router-link to="#" class="dropdown-item">
                <i class="fas fa-file mr-2"></i> 3 new reports
                <span class="float-right text-muted text-sm">2 days</span>
              </router-link>
              <div class="dropdown-divider"></div>
              <router-link to="#" class="dropdown-item dropdown-footer">See All Notifications</router-link>
            </div>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" data-widget="fullscreen" to="#" role="button">
              <i class="fas fa-expand-arrows-alt"></i>
            </router-link>
          </li>
          <li class="nav-item dropdown">
            <router-link class="nav-link" data-toggle="dropdown" to="#">
                <i><div class="media">
                  <img :src="user_image" alt="User Avatar" class="img-size-50 mr-3 img-circle">
                </div></i>
              <!-- <i class="far fa-user fa-2x"></i> -->
              <!-- <span class="badge badge-danger navbar-badge">3</span> -->
            </router-link>
            <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
              <router-link to="#" class="dropdown-item">
                <!-- Message Start -->
                <div class="media">
                  <div class="media-body">
                    <h3 class="dropdown-item-title text-center">
                      <router-link to="/profile" class="text-center">Profile</router-link>
                    </h3>
                </div>
                </div>
                <!-- Message End -->
              </router-link>
              <div class="dropdown-divider"></div>
              <router-link to="#" class="dropdown-item">
                <!-- Message Start -->
                <div class="media">
                  <div class="media-body">
                    <h3 class="dropdown-item-title text-center">
                      <p @click.prevent="logout" class="text-center">Logout</p>
                    </h3>
                </div>
                </div>
                <!-- Message End -->
              </router-link>
              <div class="dropdown-divider"></div>

              <router-link to="#" class="dropdown-item dropdown-footer">See All Messages</router-link>
            </div>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" data-widget="control-sidebar" data-slide="true" to="#" role="button">
              <i class="fas fa-th-large"></i>
            </router-link>
          </li>
        </ul>
      </nav>
      <!-- /.navbar -->

      <!-- Main Sidebar Container -->
      <aside class="main-sidebar sidebar-dark-primary elevation-4">
        <!-- Brand Logo -->
        <router-link to="index3.html" class="brand-link">
          <img src="/static/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
          <span class="brand-text font-weight-light">AdminLTE 3</span>
        </router-link>

        <!-- Sidebar -->
        <div class="sidebar">
          <!-- Sidebar user panel (optional) -->
          <div class="user-panel mt-3 pb-3 mb-3 d-flex">
            <div class="image">
              <img :src="user_image" class="img-circle elevation-2" alt="User Image">
            </div>
            <div class="info">
              <router-link to="#" class="d-block"> {{user.full_name ? user.full_name: ''}}  </router-link>
            </div>
          </div>

          <!-- SidebarSearch Form -->
          <div class="form-inline">
            <div class="input-group" data-widget="sidebar-search">
              <input class="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search">
              <div class="input-group-append">
                <button class="btn btn-sidebar">
                  <i class="fas fa-search fa-fw"></i>
                </button>
              </div>
            </div>
          </div>

          <!-- Sidebar Menu -->
          <nav class="mt-2">
            <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
              <!-- Add icons to the links using the .nav-icon class
                   with font-awesome or any other icon font library -->
              <li class="nav-item menu-open">
                <router-link to="/" class="nav-link active">
                  <i class="nav-icon fas fa-tachometer-alt"></i>
                  <p>
                    Dashboard
                    <!-- <i class="right fas fa-angle-left"></i> -->
                  </p>
                </router-link>

              </li>
              <li class="nav-item">
                <router-link to="/my-invoices" class="nav-link">
                  <i class="nav-icon fas fa-file-invoice"></i>
                  <p>
                    My Invoices
                    <!-- <span class="right badge badge-danger">New</span> -->
                  </p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="pages/widgets.html" class="nav-link">
                  <i class="nav-icon fas fa-th"></i>
                  <p>
                    Widgets
                    <span class="right badge badge-danger">New</span>
                  </p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="#" class="nav-link">
                  <i class="nav-icon fas fa-copy"></i>
                  <p>
                    Layout Options
                    <i class="fas fa-angle-left right"></i>
                    <span class="badge badge-info right">6</span>
                  </p>
                </router-link>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <router-link to="pages/layout/top-nav.html" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Top Navigation</p>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="pages/layout/top-nav-sidebar.html" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Top Navigation + Sidebar</p>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="pages/layout/boxed.html" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Boxed</p>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="pages/layout/fixed-sidebar.html" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Fixed Sidebar</p>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="pages/layout/fixed-sidebar-custom.html" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Fixed Sidebar <small>+ Custom Area</small></p>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="pages/layout/fixed-topnav.html" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Fixed Navbar</p>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="pages/layout/fixed-footer.html" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Fixed Footer</p>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="pages/layout/collapsed-sidebar.html" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Collapsed Sidebar</p>
                    </router-link>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <router-link to="#" class="nav-link">
                  <i class="nav-icon fas fa-chart-pie"></i>
                  <p>
                    Charts
                    <i class="right fas fa-angle-left"></i>
                  </p>
                </router-link>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <router-link to="pages/charts/chartjs.html" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>ChartJS</p>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="pages/charts/flot.html" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Flot</p>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="pages/charts/inline.html" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Inline</p>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="pages/charts/uplot.html" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>uPlot</p>
                    </router-link>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <router-link to="#" class="nav-link">
                  <i class="nav-icon fas fa-tree"></i>
                  <p>
                    UI Elements
                    <i class="fas fa-angle-left right"></i>
                  </p>
                </router-link>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <router-link to="pages/UI/general.html" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>General</p>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="pages/UI/icons.html" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Icons</p>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="pages/UI/buttons.html" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Buttons</p>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="pages/UI/sliders.html" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Sliders</p>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="pages/UI/modals.html" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Modals & Alerts</p>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="pages/UI/navbar.html" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Navbar & Tabs</p>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="pages/UI/timeline.html" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Timeline</p>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="pages/UI/ribbons.html" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Ribbons</p>
                    </router-link>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <router-link to="#" class="nav-link">
                  <i class="nav-icon fas fa-edit"></i>
                  <p>
                    Forms
                    <i class="fas fa-angle-left right"></i>
                  </p>
                </router-link>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <router-link to="pages/forms/general.html" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>General Elements</p>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="pages/forms/advanced.html" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Advanced Elements</p>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="pages/forms/editors.html" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Editors</p>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="pages/forms/validation.html" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Validation</p>
                    </router-link>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <router-link to="#" class="nav-link">
                  <i class="nav-icon fas fa-table"></i>
                  <p>
                    Tables
                    <i class="fas fa-angle-left right"></i>
                  </p>
                </router-link>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <router-link to="pages/tables/simple.html" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Simple Tables</p>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="pages/tables/data.html" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>DataTables</p>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="pages/tables/jsgrid.html" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>jsGrid</p>
                    </router-link>
                  </li>
                </ul>
              </li>
              <li class="nav-header">EXAMPLES</li>
              <li class="nav-item">
                <router-link to="pages/calendar.html" class="nav-link">
                  <i class="nav-icon far fa-calendar-alt"></i>
                  <p>
                    Calendar
                    <span class="badge badge-info right">2</span>
                  </p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="pages/gallery.html" class="nav-link">
                  <i class="nav-icon far fa-image"></i>
                  <p>
                    Gallery
                  </p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="pages/kanban.html" class="nav-link">
                  <i class="nav-icon fas fa-columns"></i>
                  <p>
                    Kanban Board
                  </p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="#" class="nav-link">
                  <i class="nav-icon far fa-envelope"></i>
                  <p>
                    Mailbox
                    <i class="fas fa-angle-left right"></i>
                  </p>
                </router-link>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <router-link to="pages/mailbox/mailbox.html" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Inbox</p>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="pages/mailbox/compose.html" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Compose</p>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="pages/mailbox/read-mail.html" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Read</p>
                    </router-link>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <router-link to="#" class="nav-link">
                  <i class="nav-icon fas fa-book"></i>
                  <p>
                    Pages
                    <i class="fas fa-angle-left right"></i>
                  </p>
                </router-link>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <router-link to="pages/examples/invoice.html" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Invoice</p>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="pages/examples/profile.html" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Profile</p>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="pages/examples/e-commerce.html" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>E-commerce</p>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="pages/examples/projects.html" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Projects</p>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="pages/examples/project-add.html" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Project Add</p>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="pages/examples/project-edit.html" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Project Edit</p>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="pages/examples/project-detail.html" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Project Detail</p>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="pages/examples/contacts.html" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Contacts</p>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="pages/examples/faq.html" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>FAQ</p>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="pages/examples/contact-us.html" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Contact us</p>
                    </router-link>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <router-link to="#" class="nav-link">
                  <i class="nav-icon far fa-plus-square"></i>
                  <p>
                    Extras
                    <i class="fas fa-angle-left right"></i>
                  </p>
                </router-link>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <router-link to="#" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>
                        Login & Register v1
                        <i class="fas fa-angle-left right"></i>
                      </p>
                    </router-link>
                    <ul class="nav nav-treeview">
                      <li class="nav-item">
                        <router-link to="pages/examples/login.html" class="nav-link">
                          <i class="far fa-circle nav-icon"></i>
                          <p>Login v1</p>
                        </router-link>
                      </li>
                      <li class="nav-item">
                        <router-link to="pages/examples/register.html" class="nav-link">
                          <i class="far fa-circle nav-icon"></i>
                          <p>Register v1</p>
                        </router-link>
                      </li>
                      <li class="nav-item">
                        <router-link to="pages/examples/forgot-password.html" class="nav-link">
                          <i class="far fa-circle nav-icon"></i>
                          <p>Forgot Password v1</p>
                        </router-link>
                      </li>
                      <li class="nav-item">
                        <router-link to="pages/examples/recover-password.html" class="nav-link">
                          <i class="far fa-circle nav-icon"></i>
                          <p>Recover Password v1</p>
                        </router-link>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <router-link to="#" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>
                        Login & Register v2
                        <i class="fas fa-angle-left right"></i>
                      </p>
                    </router-link>
                    <ul class="nav nav-treeview">
                      <li class="nav-item">
                        <router-link to="pages/examples/login-v2.html" class="nav-link">
                          <i class="far fa-circle nav-icon"></i>
                          <p>Login v2</p>
                        </router-link>
                      </li>
                      <li class="nav-item">
                        <router-link to="pages/examples/register-v2.html" class="nav-link">
                          <i class="far fa-circle nav-icon"></i>
                          <p>Register v2</p>
                        </router-link>
                      </li>
                      <li class="nav-item">
                        <router-link to="pages/examples/forgot-password-v2.html" class="nav-link">
                          <i class="far fa-circle nav-icon"></i>
                          <p>Forgot Password v2</p>
                        </router-link>
                      </li>
                      <li class="nav-item">
                        <router-link to="pages/examples/recover-password-v2.html" class="nav-link">
                          <i class="far fa-circle nav-icon"></i>
                          <p>Recover Password v2</p>
                        </router-link>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <router-link to="pages/examples/lockscreen.html" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Lockscreen</p>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="pages/examples/legacy-user-menu.html" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Legacy User Menu</p>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="pages/examples/language-menu.html" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Language Menu</p>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="pages/examples/404.html" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Error 404</p>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="pages/examples/500.html" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Error 500</p>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="pages/examples/pace.html" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Pace</p>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="pages/examples/blank.html" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Blank Page</p>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="starter.html" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Starter Page</p>
                    </router-link>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <router-link to="#" class="nav-link">
                  <i class="nav-icon fas fa-search"></i>
                  <p>
                    Search
                    <i class="fas fa-angle-left right"></i>
                  </p>
                </router-link>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <router-link to="pages/search/simple.html" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Simple Search</p>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="pages/search/enhanced.html" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Enhanced</p>
                    </router-link>
                  </li>
                </ul>
              </li>
              <li class="nav-header">MISCELLANEOUS</li>
              <li class="nav-item">
                <router-link to="iframe.html" class="nav-link">
                  <i class="nav-icon fas fa-ellipsis-h"></i>
                  <p>Tabbed IFrame Plugin</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="https://adminlte.io/docs/3.1/" class="nav-link">
                  <i class="nav-icon fas fa-file"></i>
                  <p>Documentation</p>
                </router-link>
              </li>
              <li class="nav-header">MULTI LEVEL EXAMPLE</li>
              <li class="nav-item">
                <router-link to="#" class="nav-link">
                  <i class="fas fa-circle nav-icon"></i>
                  <p>Level 1</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="#" class="nav-link">
                  <i class="nav-icon fas fa-circle"></i>
                  <p>
                    Level 1
                    <i class="right fas fa-angle-left"></i>
                  </p>
                </router-link>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <router-link to="#" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Level 2</p>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="#" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>
                        Level 2
                        <i class="right fas fa-angle-left"></i>
                      </p>
                    </router-link>
                    <ul class="nav nav-treeview">
                      <li class="nav-item">
                        <router-link to="#" class="nav-link">
                          <i class="far fa-dot-circle nav-icon"></i>
                          <p>Level 3</p>
                        </router-link>
                      </li>
                      <li class="nav-item">
                        <router-link to="#" class="nav-link">
                          <i class="far fa-dot-circle nav-icon"></i>
                          <p>Level 3</p>
                        </router-link>
                      </li>
                      <li class="nav-item">
                        <router-link to="#" class="nav-link">
                          <i class="far fa-dot-circle nav-icon"></i>
                          <p>Level 3</p>
                        </router-link>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <router-link to="#" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Level 2</p>
                    </router-link>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <router-link to="#" class="nav-link">
                  <i class="fas fa-circle nav-icon"></i>
                  <p>Level 1</p>
                </router-link>
              </li>
              <li class="nav-header">LABELS</li>
              <li class="nav-item">
                <router-link to="#" class="nav-link">
                  <i class="nav-icon far fa-circle text-danger"></i>
                  <p class="text">Important</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="#" class="nav-link">
                  <i class="nav-icon far fa-circle text-warning"></i>
                  <p>Warning</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="#" class="nav-link">
                  <i class="nav-icon far fa-circle text-info"></i>
                  <p>Informational</p>
                </router-link>
              </li>
            </ul>
          </nav>
          <!-- /.sidebar-menu -->
        </div>
        <!-- /.sidebar -->
      </aside>

      <!-- Content Wrapper. Contains page content -->

</template>

<script>
    export default {
        'name': 'Header',
        data(){
            return {
                user: {
                    full_name: ''
                },
                user_image: '/static/dist/img/user2-160x160.jpg'
            }
        },
        methods: {
            logout(e){
                Swal.fire({
                  title: 'Are you sure?',
                  text: "You will be logged out!",
                  icon: 'warning',
                  showCancelButton: true,
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                  confirmButtonText: 'Yes!'
                }).then((result) => {
                  if (result.isConfirmed) {
                    // logout
                    this.$session.clear();
                    localStorage.clear();
                    Swal.fire(
                      'Logged Out!',
                      'You have been logged out.',
                      'success'
                    )
                    setTimeout(function () {
                        window.location.href = '/login';
                    }, 2000);
                  }
                })
            }
        },
        mounted(){
            // if(this.)
            if(!['/login', '/register', '/signup'].includes(this.$route.path)){
                this.user = this.$sessionUserData();
            }
            // console.log(this.user.full_name)
        },
        computed: {
            // profileImage: {
            //
            // }
        },
        watch: {
            'user.user_image': {
                handler(user_image){
                    // alert(user_image);
                    this.user_image = this.$remoteUrl+user_image;
                },
                deep: true
            }
        }
    }
</script>
