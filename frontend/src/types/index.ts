export type ResponseBase = {
  result: string;
};

export type PaginatedResponseBase = {
  currentPage: number;
  firstPageUrl: string;
  from: number;
  lastPage: number;
  lastPageUrl: string;
  links: {
    url: undefined;
    label: string;
    active: boolean;
  }[];
  nextPageUrl: undefined;
  path: string;
  perPage: number;
  prevPageUrl: undefined;
  to: number;
  total: number;
};
