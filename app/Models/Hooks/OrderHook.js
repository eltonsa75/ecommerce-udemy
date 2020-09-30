'use strict'

const OrderHook = exports = module.exports = {}

OrderHook.updateValues = async model => {
   modelInstance.$sideLoaded.subtotal = await modelInstance.items().getSum('subtotal')
   modelInstance.$sideLoaded.qty_items = await modelInstance.items().getSum('quantity')
   modsel.$sideLoaded.discount = await modelInstance.discount().getSum('discount')
   modelInstance.total = model.$sideLoaded.subtotal - model.$sideLoaded.discount
}

OrderHook.updateCollectionValues = async models => {
 for (let model of models) {
     model = await OrderHook.updateValues(model)
 }   
}
