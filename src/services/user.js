import axios from "axios";


export const fetchUserDetails = async () => {
    return await axios.get('http://localhost:5000/users/get/email', { withCredentials: true });
}