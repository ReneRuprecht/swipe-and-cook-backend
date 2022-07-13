const UserService = require('../service/user.service');


module.exports = {

    getUserByEmail: async (req, res) => {

        return res
            .status(200)
            .json({
                'user': req.body.user
            });
    },

    createUser: async (req, res) => {
        const { email, password } = req.body;

        const { status, message } = await UserService.createUser(email, password);

        return res
            .status(status)
            .json({
                'message': message
            });
    }
}