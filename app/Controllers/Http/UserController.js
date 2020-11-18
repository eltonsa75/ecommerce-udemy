'use strict'


const UserTransforme = use('App/Transformers/Admin/UserTransformer')

class UserController {

    async me({ resposnse, transform, auth}) {
        var user = await auth.getUser()
        const userData = await transform.item(user, UserTransformer)
        userData.roles = await user.getRoles()
        return response.send(userData)
    }
}

module.exports = UserController
