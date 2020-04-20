import axios from 'axios'

// export function request(config) {

//   return new Promise((resolve, reject) => {
//     const instance = axios.create({
//       baseURL: 'http://123.207.32.32:8000',
//       timeout: 5000
//     })

//     instance(config).then(res => {
//       resolve(res)
//     }).catch(err => {
//       reject(err)
//     })
//   })
// }


export function request(config) {

  const instance = axios.create({

    baseURL: 'http://152.136.185.210:8000/api/h8',
    timeout: 5000,
    // headers: {'Content-Type':'application/x-www-form-urlencoded'},
  })

  // 配置请求和响应拦截
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    return err
  })

  instance.interceptors.response.use(response => {
    return response.data
  }, err => {
    return err
  })

  return instance(config)
}