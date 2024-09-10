import { baseApi } from "./base"

export function getComments(postId, options) {
  return baseApi.get(`posts/${postId}/comments`, options).then(res => res.data)
}

export function addComment(postId, options){
  return baseApi.post(`posts/${postId}/comments`, options).then(res => res.data)
}