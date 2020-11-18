'use strict'

const BumblebeeTransformer = use('Bumblebee/Transformer')
const UserTransformer = use('App/Transformers/Admin/UserTransformer')
const OrderItemTransformer = use('App/Transformers/Admin/OrderItemTransformer')
const CouponTransformer = use('App/Transformers/Admin/CouponTransformer')
const DiscountTransformer = use('App/Transformers/Admin/DiscountTransformer')

/**
 * OrderTransformer class
 *
 * @class OrderTransformer
 * @constructor
 */
class OrderTransformer extends BumblebeeTransformer {
  availableInclude(){
    return ['user', 'coupons', 'items', 'discounts']
  }
  /**
   * This method is used to transform the data.
   */
  transform (order) {
    order = order.toJSON()
    
    return {
     id: order.id,
     status: order.status,
     total: order.total ? parseFloat(order.total.toFixed(2)) : 0,
     date: order.created_at,

     qty_items: 
      order._meta_ && order._meta_.qty_items
       ? order._meta_.qty_items
        : 0,
     discount:
      order._meta_ && order._meta_.discount ? order._meta_.discount : 0,
     subtotal:
      order._meta_ && order._meta_.subtotal ? order._meta_.subtotal : 0
    }
  }

  includeUser(order){
    return this.item(order.getRelated('user'), UserTransformer)
  }

  includeItems(order){
    return this.collection(order.getRelated('items'), OrderItemTransformer)
  }

  includeCoupons(order){
    return this.collection(order.getRelated('coupons'), CouponTransformer)
  }

  includeDiscount(order){
    return this.collection(order.getRelated('discount'), DiscountTransformer)
  }

}

module.exports = OrderTransformer
