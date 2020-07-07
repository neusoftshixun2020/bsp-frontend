import request from '../utils/request'

export function getAmazonStores() {
  return request({
    url: '/store/getAmazonStores',
    method: 'post',
    data: {
    }
  })
}

export function getEBayStores() {
  return request({
    url: '/store/getEBayStores',
    method: 'post',
    data: {
    }
  })
}



export function addStore(PLATFORM_TYPE, STORE_NAME, DSR_ID, GOA_ID, TOKEN) {
  return request({
    url: '/store/addStore',
    method: 'post',
    data: {
      PLATFORM_TYPE,
      STORE_NAME,
      DSR_ID,
      GOA_ID,
      TOKEN
    }
  })
}



