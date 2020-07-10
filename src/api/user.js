import request from '@/utils/request'

// export function login(data) {
//   return request({
//     url: '/vue-element-admin/user/login',
//     method: 'post',
//     data
//   })
// }

export function login(data) {
  return request({
    url: 'user/checkUser',
    method: 'post',
    data
  })
}

// export function getInfo(token) {
//   return request({
//     url: '/vue-element-admin/user/info',
//     method: 'get',
//     params: { token }
//   })
// }

export function getInfo(token) {
  return request({
    url: 'user/getInfo',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}

// export function logout() {
//   return request({
//     url: 'user/logout',
//     method: 'post'
//   })
// }

export function fetchList(query) {
  return request({
    url: 'user/userlist',
    method: 'get',
    params: query
  })
}
export function updateUser(data) {
  return request({
    url: 'user/updateUser',
    method: 'post',
    data
  })
}

export function deleteUser(data) {
  return request({
    url: 'user/deleteUser',
    method: 'post',
    data
  })
}

export function deleteAll(data) {
  return request({
    url: 'user/deleteAll',
    method: 'post',
    data
  })
}

