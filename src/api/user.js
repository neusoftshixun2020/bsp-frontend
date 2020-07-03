import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/vue-element-admin/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/vue-element-admin/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-element-admin/user/logout',
    method: 'post'
  })

  // export function updateManufacturer (man_id,user_id, gmc_report_type,gmc_report_url,description,created_by) {
  // return request({
  //   url: '/man/updateManufacturer',
  //   method: 'post',
  //   data: {
  //     man_id,
  //     user_id,
  //     gmc_report_type,
  //     gmc_report_url,
  //     description,
  //     created_by
  //   }
  // })
  // }

// export function addOrUpdateManufacturer (man_id,user_id, gmc_report_type,gmc_report_url,description,created_by) {
//   return request({
//     url: '/man/addOrUpdateManufacturer',
//     method: 'post',
//     data: {
//       man_id,
//       user_id,
//       gmc_report_type,
//       gmc_report_url,
//       description,
//       created_by
//     }
//   })
//   }
}
