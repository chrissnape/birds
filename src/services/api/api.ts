import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import endpoints from '../endpoints/endpoints';
import { GetBirdsResponse, GetBirdsQueryParams } from './api.types';
import { formatEndpoint } from './api.utils'

export const birdsApi = createApi({
  reducerPath: 'birds',
  baseQuery: fetchBaseQuery({
    baseUrl: endpoints.baseUrl,
    prepareHeaders: (headers) => {
      headers.set('API-KEY', import.meta.env.VITE_API_KEY || '')
      return headers
    },
  }),
  endpoints: (build) => ({
    getBirds: build.query<GetBirdsResponse, GetBirdsQueryParams | void>({ query: (params) => formatEndpoint(endpoints.v2.birds, params || undefined) }),
  }),
});

export const { useGetBirdsQuery } = birdsApi;
