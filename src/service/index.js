import axios from 'axios'
import { mutate, trigger } from 'swr'

export async function postRequest({
  values,
  storeValue,
  urlKey,
  optomisticApi = false,
  refetch = false,
}) {
  mutate(urlKey, [...storeValue, values], !optomisticApi)
  await axios.post(urlKey, values)
  if (refetch) trigger(urlKey)
}

export const postRequestOptomisticApi = async (data) =>
  await postRequest({ ...data, optomisticApi: true })

export async function deleteRequest({
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

export const deleteRequestOptomisticApi = async (data) =>
  await deleteRequest({ ...data, optomisticApi: true })
