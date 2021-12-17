import axios from 'axios';

const loginAction = async (body) => {
    const result = await axios.post('http://localhost:3001/credentials', body);
    return result
}

export default loginAction;