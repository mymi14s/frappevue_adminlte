<template>
  <div :class="$route.path !== '/login' ? 'wrapper' : 'login-box'">
      <Header v-if="$route.path !== '/login'"/>
      <router-view />
      <Footer v-if="$route.path !== '/login'"/>
  </div>
</template>

<script>
    import Header from '@/components/templates/Header';
    import Footer from '@/components/templates/Footer';


    export default {
        name: 'App',
        data(){
            return {
                title: 'Frappe AdminLTE',
                switchWrapper: 'wrapper',
                disableLoginDiv: false,

            }
        },
        components: {
            Header,
            Footer
        },
        methods: {
            enableLoginDiv(){
                if(this.$route.path=='/login' || this.$route.path=='/signup'){
                    document.querySelector('body').className = "hold-transition login-page"
                    // console.log('true talk')
                } else {
                    document.querySelector('body').className = "hold-transition sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed"
                    // console.log('true lies')
                }
            },
            updateFrappe(data){
                this.frappe = data;
                // console.log('emits', this.frappe)
            },
            printFrappe(){
                // console.log('printing frappe')
            },
            updateTitle(){
                document.querySelector('title').innerText = this.title;
            }
        },
        mounted(){
            // set frappe
            setTimeout(()=>{
                this.updateTitle();
                this.enableLoginDiv();
            }, 3000)
        },
        created(){
            // setup frappe
            // initialize frappe


            if(this.$route.path=='/login' || this.$route.path=='/signup'){
                this.switchWrapper = 'login-box';
                this.disableLoginDiv = false;
                // console.log('true talk')
            } else {
                this.switchWrapper = 'wrapper';
                this.disableLoginDiv = true;
                // console.log('true lies')
            }
        },
        setup() {
          //   const storage = useStorage();
          //
          //   storage
          //     .setStorage({
          //       key: "test-key",
          //       data: "testdata22"
          //     })
          //     .then((successCallback: CallbackResult) => {
          //       console.log(successCallback.errMsg);
          //     })
          //     .catch((failCallback: CallbackResult) => {
          //       console.log(failCallback.errMsg);
          //     });
          //   return {};
          }
    }
</script>
