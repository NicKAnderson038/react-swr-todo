import axios from 'axios'
import { mutate, trigger } from 'swr'

async function postRequest({
  values,
  storeValue,
  urlKey,
  optomisticApi = false,
  refetch = false,
}) {
  try {
    mutate(urlKey, [...storeValue, values], !optomisticApi)
    await axios.post(urlKey, values)
    if (refetch) trigger(urlKey)
    return {
      success: true,
    }
  } catch (error) {
    // mutate(
    //   urlKey,
    //   storeValue.filter((c) => c.id !== values.id),
    //   !optomisticApi
    // )
    return {
      success: false,
    }
  }
}

async function deleteRequest({
  values,
  storeValue,
  urlKey,
  optomisticApi = false,
  refetch = false,
}) {
  mutate(
    urlKey,
    storeValue.filter((c) => c.id !== values),
    !optomisticApi
  )
  await axios.delete(`${urlKey}/` + values)
  if (refetch) trigger(urlKey)
}

const useRequest = {
  post: (data) => postRequest(data),
  postOptomisticApi: (data) => postRequest({ ...data, optomisticApi: true }),
  delete: (data) => deleteRequest(data),
  deleteOptomisticApi: (data) =>
    deleteRequest({ ...data, optomisticApi: true }),
}

export default useRequest
