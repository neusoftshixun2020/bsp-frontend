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
    GetProductByTitle({ commit }, TITLE) {
      return new Promise((resolve, reject) => {
        getProductsByTitle(TITLE).then(response => {
          commit('')
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    AddAndUpdateProduct({ commit }, productinfo) {
      return new Promise((resolve, reject) => {
        addAndupdateProduct(productinfo.SKU_CD, productinfo.BRD_ID, productinfo.MAN_ID, productinfo.TITLE,
          productinfo.UPC, productinfo.EAN, productinfo.MODEL, productinfo.RETAIL_PRICE, productinfo.MININUM_RETAIL_PRICE,
          productinfo.REMARK, productinfo.STS_CD, productinfo.REPLENISHMENT_PERIOD, productinfo.WARRANTY_DAY, productinfo.WARRANTY,
          productinfo.operationFlag).then(response => {
          commit('')
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    DeleteProduct({ commit }, PRO_ID) {
      return new Promise((resolve, reject) => {
        deleteProduct(PRO_ID).then(response => {
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
