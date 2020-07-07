import {getAmazonStores, getEBayStores, addStore} from '../../api/storeHandler'

const product = {
  actions: {

    GetAmazonStores({ commit }) {
      return new Promise((resolve, reject) => {
        getAmazonStores().then(response => {
          commit('')
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    GetEBayStores({ commit }) {
      return new Promise((resolve, reject) => {
        getEBayStores().then(response => {
          commit('')
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    AddStore({ commit }, storeinfo) {
      return new Promise((resolve, reject) => {
        addStore(storeinfo.PLATFORM_TYPE, storeinfo.STORE_NAME, storeinfo.DSR_ID, storeinfo.GOA_ID, storeinfo.TOKEN).then(response => {
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
