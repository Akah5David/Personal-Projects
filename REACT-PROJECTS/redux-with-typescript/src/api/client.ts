// A tiny wrapper around fetch(), borrowed from
// https://kentcdodds.com/blog/replace-axios-with-a-simple-custom-fetch-wrapper

interface ClientResponse<T> {
  status: number;
  data: T;
  headers: Headers;
  url: string;
}

export async function client<T>(
  endpoint: string,
  { body, ...customConfig }: Partial<RequestInit> = {}
): Promise<ClientResponse<T>> {
  const headers: Record<string, string> = body
    ? { "Content-Type": "application/json" }
    : {};

  const config: RequestInit = {
    method: body ? "POST" : "GET",
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(endpoint, config);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data?.message || response.statusText);
    }

    return {
      status: response.status,
      data,
      headers: response.headers,
      url: response.url,
    };
  } catch (err) {
    if (err instanceof Error) {
      return Promise.reject(err);
    }
    return Promise.reject(new Error(String(err)));
  }
}

client.get = function <T>(
  endpoint: string,
  customConfig: Partial<RequestInit> = {}
) {
  return client<T>(endpoint, { ...customConfig, method: "GET" });
};

client.post = function <T>(
  endpoint: string,
  body: any,
  customConfig: Partial<RequestInit> = {}
) {
  return client<T>(endpoint, { ...customConfig, body, method: "POST" });
};
