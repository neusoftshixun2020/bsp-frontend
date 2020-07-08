import { getProducts, getProductsByTitle, addAndupdateProduct, deleteProduct } from '../../api/productHandler'

const product = {
  actions: {

    GetProducts({ commit }) {
      return new Promise((resolve, reject) => {
        getProducts().then(response => {
          commit('')
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    GetProductByTitle({ commit }, title) {
      return new Promise((resolve, reject) => {
        getProductsByTitle(title).then(response => {
          commit('')
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    AddAndUpdateProduct({ commit }, productinfo) {
      return new Promise((resolve, reject) => {
        addAndupdateProduct(productinfo.sku_cd, productinfo.brd_id, productinfo.man_id, productinfo.title,
          productinfo.upc, productinfo.ean, productinfo.model, productinfo.length, productinfo.width, productinfo.height,
          productinfo.WEIGHT, productinfo.price, productinfo.effetive_start_date, productinfo.effective_end_date,
          productinfo.replenishment_period, productinfo.warranty_day, productinfo.time_unit, productinfo.warranty,
          productinfo.descrition, productinfo.operationFlag).then(response => {
          commit('')
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    DeleteProduct({ commit }, pro_id) {
      return new Promise((resolve, reject) => {
        deleteProduct(pro_id).then(response => {
          commit('')
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default product
