'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return {"saudação": "Olá, mundo em JSON"}
}).as('home')
/**
 *  Importa as rotas de Autenticação
 */

require('./auth')

/**
 * Imort as rotas de Admin
 */

 require('./admin')


 /**
  * Importa as rotas de Clientes
  */
 require('./client')