const API_KEY = '9e3bce1f';
const BASE_URL = 'https://www.omdbapi.com/';

export interface OmdbSearchItem {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

interface OmdbSearchResponse {
  Search: OmdbSearchItem[];
  totalResults: string;
  Response: 'True' | 'False';
  Error?: string;
}

export const useOmdb = () => {
  const search = async (query: string, type: string = '') => {
    const res = await $fetch<OmdbSearchResponse>(
      `${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(query)}&type=${type}`
    )
    return res.Search ?? []
  }

  const getDetails = async (id: string) => {
    return await $fetch(`${BASE_URL}?apikey=${API_KEY}&i=${id}&plot=full`)
  }

  return { search, getDetails }
}