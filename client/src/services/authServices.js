import axios from "axios";
axios.defaults.baseURL = 'http://localhost:4000'; // Ensure this is the correct URL

const handleLogin = async ({ email, password }) => {
    try {
        const response = await axios.post('/api/v1/auth/login', {
            email: email,
            password: password
        });

        console.log("Response from server:", response);  // Log entire response object
        const token = response.data?.token;
        console.log(token);
        if (token) {
            localStorage.setItem('token', token);
            return token;
        } else {
            console.log("Server response message:", response.data?.msg || 'Login failed');
        }
    } catch (error) {
        console.error("Error during request:", error.response ? error.response.data : error.message);
    }
};

export { handleLogin };
