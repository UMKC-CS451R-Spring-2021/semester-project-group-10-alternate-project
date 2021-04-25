import ApiResource from './ApiResource'

export default class TeacherResource  extends ApiResource {

	constructor() {
		super()
		console.log('TeacherResource', this.axios)
	}

	get() {
		const route = this.route + '/teachers';

		return this.axios.get(route);
	}

	show(id) {
		const route = this.route + `/teachers/${id}`;

		return this.axios.get(route);
	}
}