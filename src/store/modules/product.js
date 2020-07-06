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
          productinfo.UPC, productinfo.EAN, productinfo.MODEL, productinfo.LENGTH, productinfo.WIDTH, productinfo.HEIGHT,
          productinfo.WEIGHT, productinfo.PRICE, productinfo.EFFETIVE_START_DATE, productinfo.EFFECTIVE_END_DATE,
          productinfo.REPLENISHMENT_PERIOD, productinfo.WARRANTY_DAY, productinfo.TIME_UNIT, productinfo.WARRANTY,
          productinfo.DESCRITION, productinfo.operationFlag).then(response => {
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
