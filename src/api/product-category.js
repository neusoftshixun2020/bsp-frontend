import request from '@/utils/request'

export function fetchList() {
  return request({
    url: '/productcategory/list',
    method: 'post',

  })
}

export function deleteRecord(PRC_ID) {
  return request({
    url: '/productcategory/deleteRecord',
    method: 'post',
    params: PRC_ID
  })
}


export function addRecord(PRC_ID,TITLE,CATEGORY_NAME,SECOND_CATEGORY,image) {
  return request({
    url: '/productcategory/addRecord',
    method: 'post',
    data: {
      PRC_ID,
      TITLE,
      CATEGORY_NAME,
      SECOND_CATEGORY,
      image
    }
  })
}

export function updateRecord(PRC_ID,TITLE,CATEGORY_NAME,SECOND_CATEGORY,image) {
  return request({
    url: '/productcategory/updateRecord',
    method: 'post',
    data: {
      PRC_ID,
      TITLE,
      CATEGORY_NAME,
      SECOND_CATEGORY,
      image
    }
  })
}

export function searchRecord(TITLE) {

  return request({
    url: '/productcategory/searchRecord',
    method: 'post',
    data:{
      TITLE
    }
  })
}

export function changeState(PRC_ID,state) {
  return request({
    url: '/productcategory/changeState',
    method: 'post',
    data: {
      PRC_ID,
      state
    }
  })
}
