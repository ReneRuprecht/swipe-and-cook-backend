module.exports = {
    buildCreateUserResponse: (status, message) => {
        return {
            'status': status,
            'message': message
        }
    },

    buildGetUserByEmailResponse: (user, exist, status, message) => {
        return {
            'user': user,
            'exist': exist,
            'status': status,
            'message': message
        }
    }
}