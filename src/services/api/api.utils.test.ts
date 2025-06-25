import { formatEndpoint, formatEndpointWithParams, formatQueryParams } from './api.utils';

const endpoint = 'api/resource';

describe('formatEndpoint', () => {
  it('should format endpoint correctly', () => {
    expect(formatEndpoint(endpoint)).toBe('api/resource');
  });

  it('shoud format endpoint with params', () => {
    const params = { search: 'test', page: 1 };
    expect(formatEndpoint(endpoint, params)).toBe('api/resource?search=test&page=1');
  });

  it('should format endpoint with empty params', () => {
    const params = {};
    expect(formatEndpoint(endpoint, params)).toBe('api/resource');
  });

  it('should format endpoint with special characters in params', () => {
    const params = { search: 'test & example', page: 1 };
    expect(formatEndpoint(endpoint, params)).toBe('api/resource?search=test%20%26%20example&page=1');
  });
});

describe('formatEndpointWithParams', () => {
  it('should return endpoint', () => {
    const params = { search: 'test', page: 1 };
    expect(formatEndpointWithParams(endpoint, params)).toBe('api/resource?search=test&page=1');
  });

  it('should return endpoint if params are empty', () => {
    expect(formatEndpointWithParams(endpoint, {})).toBe('api/resource');
  });

  it('should return endpoint with special characters in query parameters', () => {
    const params = { search: 'test & example', page: 1 };
    expect(formatEndpointWithParams(endpoint, params)).toBe('api/resource?search=test%20%26%20example&page=1');
  });
});

describe('formatQueryParams', () => {
  it('should return query params string', () => {
    const params = { search: 'test', page: 1 };
    expect(formatQueryParams(params)).toBe('search=test&page=1');
  });

  it('should return empty string if params are empty', () => {
    expect(formatQueryParams({})).toBe('');
  });

  it('should return query params string when special characters in query params', () => {
    const params = { search: 'test & example', page: 1 };
    expect(formatQueryParams(params)).toBe('search=test%20%26%20example&page=1');
  });
});
