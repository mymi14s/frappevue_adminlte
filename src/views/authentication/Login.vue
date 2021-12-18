<template>
      <!-- /.login-logo -->
      <div class="card card-outline card-primary">
        <div class="card-header text-center">
          <a href="/" class="h1"><b>Admin</b>LTE</a>
        </div>
        <div class="card-body">
          <p class="login-box-msg">Sign in to start your session</p>

          <form @submit.prevent="loginUser">
            <div class="input-group mb-3">
              <input type="text" v-model="auth.usr"
              class="form-control" placeholder="Email" required>
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-envelope"></span>
                </div>
              </div>
            </div>
            <div class="input-group mb-3">
              <input type="password" v-model="auth.pwd"
              class="form-control" placeholder="Password" required>
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-lock"></span>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-8">
                <div class="icheck-primary">
                  <input type="checkbox" id="remember">
                  <label for="remember">
                    Remember Me
                  </label>
                </div>
              </div>
              <!-- /.col -->
              <div class="col-4">
                <button type="submit" class="btn btn-primary btn-block">Sign In</button>
              </div>
              <!-- /.col -->
            </div>
          </form>

          <div class="social-auth-links text-center mt-2 mb-3">
            <a href="#" class="btn btn-block btn-primary">
              <i class="fab fa-facebook mr-2"></i> Sign in using Facebook
            </a>
            <a href="#" class="btn btn-block btn-danger">
              <i class="fab fa-google-plus mr-2"></i> Sign in using Google+
            </a>
          </div>
          <!-- /.social-auth-links -->

          <p class="mb-1">
            <a href="forgot-password.html">I forgot my password</a>
          </p>
          <p class="mb-0">
            <a href="#" class="text-center">Register a new membership</a>
          </p>
        </div>
        <!-- /.card-body -->
      </div>

</template>


<script>


    // console.log('session')
    export default {
        name: 'Login',
        props: {
            // this.$frappe: {
            //     required: true
            // }
        },
        data(){
            return {
                auth: {
                    usr: '',
                    pwd: ''
                },
                disableLoginDiv: {
                    type: Boolean
                }
            }
        },
        methods: {
            async loginUser(){

                if(this.auth.usr && this.auth.pwd){
                    let user = await this.$frappe.login(this.auth)

                    if(user && !user.status_code){
                        // set session
                        localStorage.set('frappUser',
                            {
                                token: user.token,
                                userData: user.data
                            }
                        )
                        // redirect
                        if (JSON.parse(localStorage.frappUser).token) {
                            this.$popIt.success('Success', 'Login Success')
                            // localStorage.clear();
                            setTimeout(function () {
                                window.location.href = '/'
                            }, 2000);
                            // this.$router.push('/')
                        }
                        // console.log(p)
                    } else {
                        this.$popIt.error('Error!', 'Invalid Credentials')
                    }
                } else {
                        this.$popIt.error('Error!', 'Please fill the foem properly')
                }
            }
        },
        computed:{

            enableLoginDiv(){
                // alert(this.$route.path)
                if(this.$route.path=='/login' || this.$route.path=='/signup'){
                    this.switchWrapper = 'login-box';
                    this.disableLoginDiv = false;
                    // console.log('true talk')
                } else {
                    this.switchWrapper = 'wrapper';
                    this.disableLoginDiv = true;
                    // console.log('true lies')
                }
            }
        },
        async created(){
            if(this.$route.path=='/login' || this.$route.path=='/signup'){
                this.switchWrapper = 'login-box';
                this.disableLoginDiv = false;
                // console.log('true talk')
            } else {
                this.switchWrapper = 'wrapper';
                this.disableLoginDiv = true;
                // console.log('true lies')
            }


            // alert(this.$route.path)

        },
        mounted(){
            // console.log(this)
        }
    }
</script>
