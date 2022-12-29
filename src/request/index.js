import axios from 'axios'

// 配置axios，引入axios 创建一个服务，通过axios。create创建,里面使用的是对象，
const service = axios.create({
  baseURL:"http://localhost:3000",
  timeout:3000
})

// 导出，然后通过request里面的api集中进行请求
export default service