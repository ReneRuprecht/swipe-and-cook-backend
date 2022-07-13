const RegisterService = require('../service/registration.service');

module.exports = {
    register: async (req, res) => {

        const { email, status, message } = await RegisterService.register(req.body);

        return res
            .status(status)
            .json({
                'email': email ?? null,
                'message': message
            });

    }

}