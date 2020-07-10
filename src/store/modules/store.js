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
    AddStore({ commit }, data) {
      return new Promise((resolve, reject) => {
        addStore(data.store).then(response => {
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
