import { Bird } from '../../types/bird.types';

export type GetBirdsQueryParams = {
  page?: number;
  pageSize?: number;
}

export type GetBirdsResponse = {
  page: number;
  pageSize: number;
  entities: Bird[];
}
