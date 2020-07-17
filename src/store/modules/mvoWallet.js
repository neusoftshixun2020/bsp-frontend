import {checkAccount, addAccount, getFund, withdraw, getTransactionRecord} from '../../api/mvowalletHandler'

const product = {
  actions: {

    CheckAccount({ commit },data) {
      return new Promise((resolve, reject) => {
        checkAccount(data).then(response => {
          commit('')
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    AddAccount({ commit },data) {
      return new Promise((resolve, reject) => {
        addAccount(data).then(response => {
          commit('')
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    GetFund({ commit }, buyer_id) {
      return new Promise((resolve, reject) => {
        getFund(buyer_id).then(response => {
          commit('')
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    Withdraw ({ commit },data) {
      return new Promise((resolve, reject) => {
        withdraw(data).then(response => {
          commit('')
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    GetTransactionRecord ({ commit },buyer_id) {
      return new Promise((resolve, reject) => {
        getTransactionRecord(buyer_id).then(response => {
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
