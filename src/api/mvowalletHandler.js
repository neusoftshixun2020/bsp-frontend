import request from '../utils/request'

export function checkAccount(wdata) {
  return request({
    url: '/wallet/checkAccount',
    method: 'post',
    data:
    wdata
  })
}

export function addAccount(wdata) {
  return request({
    url: '/wallet/addAccount',
    method: 'post',
    data: wdata
  })
}



export function getFund(buyer_id) {
  return request({
    url: '/wallet/getFund',
    method: 'post',
    data: buyer_id
  })
}

export function withdraw(wdata) {
  return request({
    url: '/wallet/withdraw',
    method: 'post',
    data: wdata
  })
}

export function getTransactionRecord(buyer_id) {
  return request({
    url: '/wallet/getTransactionRecord',
    method: 'post',
    data: buyer_id
  })
}


