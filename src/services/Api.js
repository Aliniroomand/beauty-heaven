// https://api.slingacademy.com/v1/sample-data/users
import axios from 'axios';

const BASE_URL='https://api.slingacademy.com/v1/sample-data/users?limit=30'

const barbersInformations = async () => {
    const response = await axios.get(BASE_URL);
    return response.data.users;
    
}
export {barbersInformations};