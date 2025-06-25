export type Bird = {
  id: number;
  name: string;
  sciName: string;
  order: string;
  family: string;
  status: string;
  region: string[];
  wingspanMin?: string;
  wingspanMax?: string;
  lengthMin: string;
  lengthMax: string;
  images: string[];
}

export type GetBirdsQueryParams = {
  page?: number;
  pageSize?: number;
}

export type GetBirdsResponse = {
  page: number;
  pageSize: number;
  entities: Bird[];
}
