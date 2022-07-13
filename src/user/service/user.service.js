const { buildGetUserByEmailResponse, buildCreateUserResponse } = require('../helper/user.response.helper.js');
const User = require('../model/user.model.js');

module.exports = class UserService {
    static async createUser(email, password) {
        if (!email || !password) {
            return buildCreateUserResponse(201, "Email and password are required");
        }


        try {
            await User.create({
                email: email,
                password: password
            });

            return buildCreateUserResponse(201, "User created");
        }
        catch (err) {
            if (err.code === 11000) {
                return buildCreateUserResponse(400, "Email already exists");
            }

            return buildCreateUserResponse(400, "User creation error");

        }

    }

    static async getUserByEmail(email) {

        if (!email) {
            return buildGetUserByEmailResponse(null, null, 400, "Email is required");
        }

        try {
            const user = await User.findOne({ email });

            return buildGetUserByEmailResponse(
                user ? user : null,
                user ? true : false,
                user ? 200 : 404,
                user ? "Email exists" : "Email does not exist"
            );


        }
        catch (err) {
            console.log(`Error user service getUserByEmail ${err.message}`);
            return buildGetUserByEmailResponse(
                null,
                false,
                200,
                err.message
            );

        }
    }
}