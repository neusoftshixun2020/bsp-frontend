import request from '../utils/request'

export function getAmazonStores() {
  return request({
    url: '/bvo/getAmazonStore',
    method: 'post',
    data: {
    }
  })
}

export function getEBayStores() {
  return request({
    url: '/bvo/getEbayStore',
    method: 'post',
    data: {
    }
  })
}



export function addStore(sdata) {
  return request({
    url: '/bvo/addStore',
    method: 'post',
    data: sdata
  })
}



