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

export function addAndupdateProduct(SKU_CD, BRD_ID, MAN_ID, TITLE, UPC, EAN, MODEL, LENGTH, WIDTH, HEIGHT, WEIGHT,
  PRICE, EFFETIVE_START_DATE, EFFECTIVE_END_DATE, REPLENISHMENT_PERIOD, WARRANTY_DAY,
  TIME_UNIT, WARRANTY, DESCRITION, operationFlag) {
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
      LENGTH,
      WIDTH,
      HEIGHT,
      WEIGHT,
      PRICE,
      EFFETIVE_START_DATE,
      EFFECTIVE_END_DATE,
      REPLENISHMENT_PERIOD,
      WARRANTY_DAY,
      TIME_UNIT,
      WARRANTY,
      DESCRITION,
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
