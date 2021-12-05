import appConfig from '../appConfig';

export default {
    name: 'utils',
    Frappe: class Frappe {
        constructor(url){
            this.url = url;
            this.token = '';
            this.headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            };
            // this.stack = <call stack>;
        }
        async login(body){
            let res = await fetch(`${this.url}/api/method/${appConfig.frappe_custom_app}.authentication.login`, {
                method: 'POST',
                headers: this.headers,
                body: JSON.stringify(body)
            })
            let auth = await res.json()
            // console.log('AUTH', auth)
            //     // confirm auth
            if(auth.message.status_code==200){
                let user = await fetch(`${this.url}/api/resource/User/${auth.message.user}`, {
                    method: 'GET',
                    headers: {'Authorization': `token ${auth.message.token}`}
                })
                user = await user.json()
                return await {...user, 'token':auth.message.token}
            } else {
                return auth.message;
            }
        }
        // get updated headers
        getHeader(){
            let token = JSON.parse(sessionStorage.frappUser).token;
            this.headers.Authorization = `token ${token}`
            // return this.headers;
        }

        // handleResponse
        async handleResponse(res){
            if(res.status==200){
                let data = await res.json();
                return await {'status_code': res.status, 'data': data.data};
            } else if(res.status==404) {
                // not found
                return {'status_code': res.status, 'text': res.statusText}
            }
        }

        // get_doc
        async get_doc(doctype, docname){
            try {
                this.getHeader();
                let res = await fetch(`${this.url}/api/resource/${doctype}/${docname}`, {
                    method: 'GET',
                    headers: this.headers
                })
                return await this.handleResponse(res);
            } catch (e) {
                console.log(e)
            }
        }
        // update doc
        async update_doc(doctype, docname, body){
            try {
                this.getHeader();
                let res = await fetch(`${this.url}/api/resource/${doctype}/${docname}`, {
                    method: 'PUT',
                    headers: this.headers,
                    body: JSON.stringify(body)
                })
                return await this.handleResponse(res);
            } catch (e) {
                console.log(e)
            }
        }
        // create doc
        async new_doc(doctype, body){
            try {
                this.getHeader();
                let res = await fetch(`${this.url}/api/resource/${doctype}`, {
                    method: 'POST',
                    headers: this.headers,
                    body: JSON.stringify(body)
                })
                return await this.handleResponse(res);
            } catch (e) {
                console.log(e)
            }
        }
        // DELETE doc
        async delete_doc(doctype, body){
            try {
                this.getHeader();
                let res = await fetch(`${this.url}/api/resource/${doctype}/${docname}`, {
                    method: 'DELETE',
                    headers: this.headers
                })
                return await this.handleResponse(res);
            } catch (e) {
                console.log(e)
            }
        }
        // get list
        async get_list(doctype, filters=null){
            try {
                this.getHeader();
                let url = `${this.url}/api/resource/${doctype}`
                if(filters){
                    url = url + '?' + filters;
                }
                // alert(url)
                // if(fields && filters){
                //     url = url + `?filters=${filters}&fields=${fields}`;
                // } else if (fields) {
                //     url = url + `?fields=${fields}`;
                // } else if (filters) {
                //     url = url + `?filters=${filters}`
                // }
                let res = await fetch(url, {
                    method: 'GET',
                    headers: this.headers
                })
                return await this.handleResponse(res);
            } catch (e) {
                console.log(e)
            } finally {

            }
        }

        // get pdf
        async getPDF(
                doctype, docname, format, Standard,
                no_letterhead, letterhead, lang
            ){
            format = format ? format : 'Standard';
            no_letterhead = no_letterhead ? no_letterhead : 1;
            letterhead = letterhead ? letterhead : 'No Letterhead';
            lang = lang ? lang : 'en';

            let url = `${this.url}/api/method/frappe.utils.print_format.download_pdf?doctype=${doctype}&name=${docname}&format=${format}&no_letterhead=${no_letterhead}&letterhead=${letterhead}&settings=%7B%7D&_lang=${lang}`
            // process download
            this.getHeader();
            let res = await fetch(url, {
                method: 'GET',
                headers: this.headers
            })
            if(res.status==200){
                let blob = await res.blob();
                let file = await window.URL.createObjectURL(blob);
                window.location.assign(file);
            } else {
                this.$popIt.error('Error', res.statusText);
            }
        }
    }
}

// export default new Frappe()
