import { METHODS } from "../constants/https";
import { IApiResponse } from "../types/apiResponse";

export class Fetcher {
  static headers: {
    "Content-Type": "application/json";
  };

  static async get(
    url: string,
    searchParams?: URLSearchParams,
    options: RequestInit = {}
  ): Promise<IApiResponse<unknown>> {
    const res = await fetch(`${url}?${searchParams}`, {
      method: METHODS.Get,
      headers: Fetcher.headers,
      ...options,
    });

    return res.json();
  }

  static async post(
    url: string,
    data: string | FormData,
    options: RequestInit = {}
  ): Promise<IApiResponse<unknown>> {
    const res = await fetch(url, {
      method: METHODS.Post,
      headers: {
        "Content-Type":
          data instanceof FormData ? "multipart/form-data" : "application/json",
      },
      body: data,
      ...options,
    });

    return res.json();
  }

  static async put(
    url: string,
    data: string | FormData,
    options: RequestInit = {}
  ): Promise<IApiResponse<unknown>> {
    const res = await fetch(url, {
      method: METHODS.Put,
      headers: {
        "Content-Type":
          data instanceof FormData ? "multipart/form-data" : "application/json",
      },
      body: data,
      ...options,
    });

    return res.json();
  }

  static async delete(
    url: string,
    searchParams?: URLSearchParams,
    options: RequestInit = {}
  ): Promise<IApiResponse<unknown>> {
    const res = await fetch(`${url}?${searchParams}`, {
      method: METHODS.Delete,
      headers: Fetcher.headers,
      ...options,
    });

    return res.json();
  }

  static async patch(
    url: string,
    data: string | FormData,
    options: RequestInit = {}
  ): Promise<IApiResponse<unknown>> {
    const res = await fetch(url, {
      method: METHODS.Patch,
      headers: {
        "Content-Type":
          data instanceof FormData ? "multipart/form-data" : "application/json",
      },
      body: data,
      ...options,
    });

    return res.json();
  }
}
