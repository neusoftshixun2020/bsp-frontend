import request from '../utils/request'

export function getProducts() {
  return request({
    url: '/product/getProducts',
    method: 'post',
    data: {
    }
  })
}

export function getProductsByTitle(TITLE) {
  return request({
    url: '/product/getProductsByTitle',
    method: 'post',
    data: {
      TITLE
    }
  })
}

export function addAndupdateProduct(SKU_CD, BRD_ID, MAN_ID, TITLE, UPC, EAN, MODEL,
  RETAIL_PRICE, MININUM_RETAIL_PRICE, REMARK, STS_CD, REPLENISHMENT_PERIOD, WARRANTY_DAY, WARRANTY, operationFlag) {
  return request({
    url: '/product/addAndUpdateProduct',
    method: 'post',
    data: {
      SKU_CD,
      BRD_ID,
      MAN_ID,
      TITLE,
      UPC,
      EAN,
      MODEL,
      RETAIL_PRICE,
      MININUM_RETAIL_PRICE,
      REMARK,
      STS_CD,
      REPLENISHMENT_PERIOD,
      WARRANTY_DAY,
      WARRANTY,
      operationFlag
    }
  })
}

export function deleteProduct(PRO_ID) {
  return request({
    url: '/product/deleteProduct',
    method: 'post',
    data: {
      PRO_ID
    }
  })
}
