import axios from "../http"
// eslint-disable-next-line no-unused-vars
import qs from "querystring"

const common = {
  articleList(params) {
    return axios.get("/common/article/list", { params })
  },
  getDictTypes(params) {
    return axios.get("/common/getDictTypes", { params })
  }
}

export default common
