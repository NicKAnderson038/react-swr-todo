import axios from 'axios'
import { mutate, trigger } from 'swr'

export async function postRequest({
  values,
  storeValue,
  urlKey,
  notOptomisticApi = false,
}) {
  mutate(urlKey, [...storeValue, values], notOptomisticApi)
  await axios.post(urlKey, values)
  trigger(urlKey)
}

export async function deleteRequest({
  values,
  storeValue,
  urlKey,
  notOptomisticApi = false,
}) {
  mutate(
    urlKey,
    storeValue.filter((c) => c.id !== values),
    notOptomisticApi
  )
  await axios.delete(`${urlKey}/` + values)
  trigger(urlKey)
}
