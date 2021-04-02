export interface itemType {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}
export interface mainSliceType {
  items: itemType[];
  isLoading: boolean;
  error: string | undefined;
  nameInput: string;
  genderInput: string;
  statusInput: string;
}
export interface responseType {
    results: itemType[]
    info: {
        count: number
        pages: number
        next: string | null
        prev: string | null
    }
  }
  