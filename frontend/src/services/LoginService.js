import axios from 'axios';

const LoginService = data => (
	axios.post('http://localhost:4000/User/login', data)
		.then(res => res.status)
)

export default LoginService;
