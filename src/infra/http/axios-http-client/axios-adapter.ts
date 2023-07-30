import { HttpClient, HttpRequest, HttpResponse } from '@/data/protocols'
import axios, { AxiosResponse } from 'axios'

export class AxiosAdapter implements HttpClient {
  async request (data: HttpRequest): Promise<HttpResponse> {
    let axiosResponse: AxiosResponse
    try {
      axiosResponse = await axios.request({
        url: data.url,
        method: data.method,
        data: data.body,
        headers: data.headers
      })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      axiosResponse = error.response
    }
    return {
      statusCode: axiosResponse?.status || 400,
      body: axiosResponse?.data
    }
  }
}