export const formatQueryParams = (params: Record<string, any>): string => (
  Object.entries(params)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&')
);

export const formatEndpointWithParams = (endpoint: string, params: Record<string, any>): string =>  {
  const queryString = formatQueryParams(params);
  return queryString ? `${endpoint}?${queryString}` : endpoint;
}

export const formatEndpoint = (endpoint: string, params?: Record<string, any>): string =>
  (params) ? formatEndpointWithParams(endpoint, params) : endpoint;
