import axios from 'axios'

export default () =>{
	return axios.create({
		baseURL: 'http://192.168.4.145:8093/'
	})
}