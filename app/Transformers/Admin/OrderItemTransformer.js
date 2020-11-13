'use strict'

const BumblebeeTransformer = use('Bumblebee/Transformer')
const ProductTrasformer = use('App/Transformes/Admin/ProductTrasformer')

/**
 * OrderItemTransformer class
 *
 * @class OrderItemTransformer
 * @constructor
 */
class OrderItemTransformer extends BumblebeeTransformer {
  defaultInclude(){
    return ['product']
  }
  /**
   * This method is used to transform the data.
   */
  transform (model) {
    return {
    id: model.id,
    subtotal: model.subtotal,
    quantity: model.quantity
    }
  }

  includeProduct(orderItem){
    return this.item(order.getRelated('product'), ProductTrasformer)
  }
}

module.exports = OrderItemTransformer
