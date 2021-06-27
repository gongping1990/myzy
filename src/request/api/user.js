import axios from "../http"
import qs from "querystring"

const user = {
  // 手机登录
  loginWithPhone(params) {
    return axios.post(
      "/compositionv3/user/loginWithPhone",
      qs.stringify(params)
    )
  },
  // 密码登录
  loginWithPassword(data) {
    return axios.post(
      "/compositionv3/user/loginWithPassword",
      qs.stringify(data)
    )
  },
  // 修改密码
  changePassword(params) {
    return axios.post(
      "/compositionv3/user/changePassword",
      qs.stringify(params)
    )
  },
  wxUserLogin(params) {
    return axios.post("/compositionv3/user/wxUserLogin", qs.stringify(params))
  },
  loginOut() {
    return axios.get("/compositionv3/user/loginOut")
  },
  updateUserPhone(params) {
    return axios.post(
      "/compositionv3/user/updateUserPhone",
      qs.stringify(params)
    )
  },
  loginInfo() {
    return axios.get("/compositionv3/user/loginInfo")
  }
}

export default user
