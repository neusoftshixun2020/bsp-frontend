import {checkAccount, addAccount, getFund, withdraw, getTransactionRecord} from '../../api/mvowalletHandler'

const product = {
  actions: {

    CheckAccount({ commit },data) {
      return new Promise((resolve, reject) => {
        checkAccount(data.store).then(response => {
          commit('')
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    AddAccount({ commit },data) {
      return new Promise((resolve, reject) => {
        addAccount(data.store).then(response => {
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
    Withdraw ({ commit },user_id) {
      return new Promise((resolve, reject) => {
        withdraw(user_id).then(response => {
          commit('')
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    GetTransactionRecord ({ commit },user_id) {
      return new Promise((resolve, reject) => {
        getTransactionRecord(user_id).then(response => {
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
