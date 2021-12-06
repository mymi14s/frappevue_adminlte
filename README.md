# FrappeVue AdminLTE
Vue-based AdminLTE dashboard for Frappe and ERPNext

## Features
- AUTHENTICATION: Login is inbuilt by default and can be used as below:
    - this.$frappe.login({usr:'user': pwd:'password'}) //token based authentication is used     on successful login.
- API: Access data using:
    - this.$frappe.get_doc(doctype, docname)
    - this.$frappe.get_list(doctype, filters) // filters is optional
    - this.$frappe.new_doc(doctype, body) //body = {}
    - this.$frappe.update_doc(doctype, docname, body)
    - this.$frappe.delete_doc(doctype, docname)
    - this.$frappe.getPDF(doctype, docname) // OPTIONAL: format, Standard,
                no_letterhead, letterhead, lang
- REUSABLE COMPONENTS:
    - DataTable // for generating doctype data list, auto repackage datatable.
- UTILITIES:
    - formatCurrency(amount, currency)
    - this.popIt.error(title, message) // show error modal
    - this.popIt.success(title, message) // show success modal
#### NOTE
**this** keywork can be directly accessed in VUEJS component,
this.$frappe can be redefined as let frappe = this.$frappe

## PROJECT SETUP
- INITIAL CONFIGURATION
    - add .appConfig.json to the root folder (same location with package.json)
    - Add configuration in the format
        {
            "domain": "https://exampledomain.com",
            "frappe_custom_app":"frappeauth_app"
        }
    - frappeauth_app may remain unchanged except you have a custom authentication app.
    - frappeauth_app is **REQUIRED** to in your frappe/erpnext server, install from
        **https://github.com/mymi14s/frappeauth_app**

- NODE SETUP
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Screenshot
## LOGIN
![Login](https://github.com/mymi14s/frappevue_adminlte/blob/master/public/static/screenshoots/login.png?raw=true "Login")

## DASHBOARD
![Dashboard](https://github.com/mymi14s/frappevue_adminlte/blob/master/public/static/screenshoots/dashboard.png?raw=true "Dashboard")

## INVOICES
![Language changed](https://github.com/mymi14s/frappevue_adminlte/blob/master/public/static/screenshoots/invoices.png?raw=true "Language changed")

## INVOICE DETAIL
![Language changed](https://github.com/mymi14s/frappevue_adminlte/blob/master/public/static/screenshoots/invoicedetail.png?raw=true "Language changed")
