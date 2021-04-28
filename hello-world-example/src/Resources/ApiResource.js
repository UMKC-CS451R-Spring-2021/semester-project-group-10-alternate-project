import axios from 'axios'

export default class ApiResource {
	axios = axios;

	get route() {
		return 'http://localhost:8080/api';		
	}

	get() {
		console.error('get isn\'t defined for resource');
	}

	show(id) {
		console.error('show isn\'t defined for resource');
	}

	post(resource = null) {
		console.error('post isn\'t defined for resource');
	}

	update(resource = null) {
		console.error('update isn\'t defined for resource');
	}
}