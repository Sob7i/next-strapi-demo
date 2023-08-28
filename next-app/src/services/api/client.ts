import axios, { AxiosInstance, AxiosRequestConfig } from "axios"

class ApiClient {
  private client: AxiosInstance;

  constructor(url, ) {
    this.client = axios.create({
      baseURL: process.env.STRAPI_API_URL,
    });
  }

  public async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.get<T>(url, config);
    return response.data;
  }

  listCompanies() {
    return this.get('/companies');
  }
}

const strapiClient = new ApiClient(process.env.STRAPI_API_URL);