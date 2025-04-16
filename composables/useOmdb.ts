import { OMDB_API_KEY, OMDB_BASE_URL } from '@/constants/omdb'

// All movies/series data
export interface OmdbSearchItem {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

// Indiv movies/series data
export interface OmdbMovieDetails {
  Title: string
  Year: string
  imdbID: string
  Poster: string
  Genre: string
  Plot: string
  Director: string
  Actors: string
  Ratings: { Source: string; Value: string }[]
  [key: string]: any
}

interface OmdbSearchResponse {
  Search: OmdbSearchItem[];
  totalResults: string;
  Response: 'True' | 'False';
  Error?: string;
}

export const useOmdb = () => {
  const search = async (query: string, type: string = '', page: number = 1) => {
    const res = await $fetch<OmdbSearchResponse>(
      `${OMDB_BASE_URL}?apikey=${OMDB_API_KEY}&s=${encodeURIComponent(query)}&type=${type}&page=${page}`
    )
    return res.Search ?? []
  }

  const getDetails = async (id: string) => {
    return await $fetch(`${OMDB_BASE_URL}?apikey=${OMDB_API_KEY}&i=${id}&plot=full`)
  }

  return { search, getDetails }
}