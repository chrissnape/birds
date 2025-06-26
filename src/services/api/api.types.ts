import { Bird } from '../../types/bird.types';

export type GetBirdsQueryParams = {
  page?: number;
  pageSize?: number;
}

export type GetBirdsResponse = {
  entities: Bird[];
  page: number;
  pageSize: number;
  total: number;
}
