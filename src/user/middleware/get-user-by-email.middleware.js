const UserService = require('../service/user.service');

module.exports = {

    getUserByEmailMiddleware: async (req, res, next) => {
        console.log(req.body);
        const { user, exist, message, status } = await UserService.getUserByEmail(req.body.email);

        if (!exist) {
            return res
                .status(status)
                .json({
                    'message': message ?? "Cant find user"
                });
        }

        req.body.user = user;
        next();
        return;
    }
}