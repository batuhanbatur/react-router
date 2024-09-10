import { baseApi } from "./base"

export function getUsers(options) {
  return baseApi.get("users", options).then(res => res.data)
}

export function getUser(userId, options) {
  return baseApi.get(`users/${userId}`, options).then(res => res.data)
}

export function createUser(data, options){
  return baseApi.post("users", data, options).then(res => res.data)
}