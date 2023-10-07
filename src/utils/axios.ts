import axios, { AxiosError, AxiosRequestConfig } from "axios";

axios.defaults.baseURL = "http://localhost:8000";

export const axiosCustom = async <T, D = any>(
  axiosParams: AxiosRequestConfig<D>
) => {
  let response: any = null;
  let error: AxiosError | unknown = null;

  const user = localStorage.get("user")
  if (!user) throw new AxiosError("user not logged in");
  const token = await localStorage.get("token")
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  try {
    const result = await axios.request<T>(axiosParams);
    response = result.data;
    if (response.error) throw new AxiosError(response.error);
  } catch (err: AxiosError | unknown) {
    // * this if statement is here to access AxiosError type, maybe to customize things in the future
    if (axios.isAxiosError(err)) {
      error = err.message;
    } else {
      error = err;
    }
  } finally {
    return { response, error };
  }
};