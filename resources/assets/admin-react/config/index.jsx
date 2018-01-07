let base_url = document.head.querySelector('meta[name="base-url"]').content

let token = document.head.querySelector('meta[name="csrf-token"]').content

window._ = require('lodash')
window.axios = require('axios')

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token

const swal = require('sweetalert2')

let http = axios.create({
	baseURL: `${base_url}`
})
http.interceptors.response.use((response) => {
	if (response.status === 201) {
		swal({
			title: response.data.title,
			text: response.data.message,
			type: 'success',
			timer: 5000,
        })
	}

    return response;
}, function (error) {    
    // Do something with response error
    if (error.response.status === 422) {
      let contentHtml = '';
        Object.keys(error.response.data.errors).forEach((key) => {
          contentHtml +=  '<p class="text-danger">'+error.response.data.errors[key][0]+'</p>'
        })
        
        swal({
          title: error.response.data.message,
          html: contentHtml,
          type: 'error',
          timer: 5000,
        })
    }else if(error.response.status === 419 || error.response.statusText === 'unknown status'){
      swal('Opps', 'Anda Harus Login kembali', "error", 5000)
      window.location.href = `${base_url}/login`
    }else{
      swal(error.response.statusText, error.response.data.message, "error")
    }
    return Promise.reject(error.response);
})


export {
	http, 
	base_url,
	swal
}