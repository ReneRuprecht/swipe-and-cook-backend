module.exports = {
    buildRegisterResponse: (status, message,email) => {
        return {
            'status': status,
            'message': message,
            'email':email
        }
    },


}