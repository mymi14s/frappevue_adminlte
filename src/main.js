import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vueTheStorages from 'vue-the-storages'
import utils from './utils';
import appConfig from '../.appConfig';

let app = createApp(App)
app.use(router)
    .use(vueTheStorages)
// app.use(cors)

//  global helper
let remoteUrl = appConfig.domain;
app.config.globalProperties.$remoteUrl = remoteUrl;
app.config.globalProperties.$frappe = new utils.Frappe(remoteUrl);
// app.config.globalProperties.$getToken = () =>
let getToken = ()=>{
    return JSON.parse(sessionStorage.frappUser).token
}
let sessionUserData = ()=>{
    try {
        return JSON.parse(sessionStorage.frappUser).userData;
    } catch (e) {
        return null
    } finally {

    }
}

let popIt = {
    success: (title, msg)=>{
        return Swal.fire(
          title,
          msg,
          'success'
        )
    },
    error: (title, msg)=>{
        return Swal.fire(
          title,
          msg,
          'warning'
        )
    }
}

app.config.globalProperties.$sessionUserData = sessionUserData;
app.config.globalProperties.$popIt = popIt;
app.config.globalProperties.$formatCurrency = (amount, currency)=>{
    return new Intl.NumberFormat('en-NG', { style: 'currency', currency: currency }).format(amount);
}

app.mount('#app')
