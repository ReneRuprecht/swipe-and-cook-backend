const axios = require("axios");
const { buildRegisterResponse } = require("../helper/registration.response.helper");


module.exports = class AuthService {


    static async register(registerData) {

        const { email, password } = registerData;

        if (!email || !password) {
            return buildRegisterResponse(400, "Email and password are required");
        }


        let responseData;
        try {
            const response = await axios.post('http://localhost:5000/api/v1/user/', {

                email: email,
                password: password

            });

            responseData = response.data;

        } catch (error) {
            return buildRegisterResponse(400, "User creation failed");

        }

        if (!responseData) {
            return buildRegisterResponse(400, "Registration failed");

        }


        return buildRegisterResponse(201, responseData.message, email);


    }





}