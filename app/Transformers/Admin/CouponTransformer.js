'use strict'

const BumblebeeTransformer = use('Bumblebee/Transformer')
const UserTransformer = use('App/Transformes/Admin/UserTransformer')
const ProductTransformer = use('App/Transformes/Admin/ProductTransformer')
const OrderTransformer = use('App/Transformes/Admin/OrderTransformer')
/**
 * CouponTransformer class
 *
 * @class CouponTransformer
 * @constructor
 */
class CouponTransformer extends BumblebeeTransformer {
  availableIncludes() {
    return ['users', 'products', 'orders']
  }
  /**
   * This method is used to transform the data.
   */
  transform (coupon) {
    coupon = coupon.toJSON()
    delete coupon.created_at
    delete coupon.update_at
    return coupon
  }

  includeUsers(coupon){
    return this.collection(coupon.getRelated('users'), UserTransformer)
  }

  includeProducts(coupon){
    return this.collection(coupon.getRelated('products'), ProductTransformer)
  }

  includeOrders(coupon){
    return this.collection(coupon.getRelated('orders'), OrderTransformer)
  }
}

module.exports = CouponTransformer
