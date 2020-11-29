import axios from 'axios'
import { mutate, trigger } from 'swr'
import { API } from '../constant'


export async function postRequest(values, store, notOptomisticApi = false) {
  mutate(API, [...store, values], notOptomisticApi)
  await axios.post(API, values)
  trigger(API)
}

export async function deleteRequest(values, store, notOptomisticApi = false) {
  mutate(
    API,
    store.filter((c) => c.id !== values),
    notOptomisticApi
  )
  await axios.delete(`${API}/` + values)
  trigger(API)
}
