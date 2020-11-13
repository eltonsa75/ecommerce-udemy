'use strict'

class AuthRegister {
  get rules () {
    return {
     name: 'required',
     surname: 'required',
     email: 'required|email|unique:users,email',
     password: 'required|confirmed'
    }
  }

  get messages(){
    return {
      'name.reuired': 'O nome é Obrigatório',
      'surname.required': 'O sobrenome é Obrigatório',
      'email.required': 'O e-mail é Obrigatório',
      'email.email': 'E-mail inválido',
      'email.unique': 'Este E-mail já existe!',
      'password.required': 'a senha é Obrigatória!',
      'password.confirmed': 'As senhas não são iguais!'
    }
  }
}

module.exports = AuthRegister
