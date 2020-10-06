'use strict'


/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
/**
 * Product Resource Routes
 */
Route.resource('product', 'ProductController.index')
Route.get('products/:id', 'ProductController.show')

/**
 * Order Resource Routes
 */
Route.resource('orders', 'OrderController.index')
Route.get('orders/:id', 'OrderController.show')
Route.post('order', 'OrderController.store')
Route.put('orders/:id', 'OrderController.put')

})
.prefix('v1')
.namespace('Client')