import axios from 'axios';
import { MOVIE_API, MOVIE_KEY } from '../constants/urls';
import { moviesGenre } from '../constants/config';
import { Item } from '../interfaces/index.d';

const RandomPage = (pages: number): number => {
  return Math.floor(Math.random() * pages + 1);
};

const getMovies = async (): Promise<Array<Item>> => {
  const imageUrl = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2';
  try {
    const genre = moviesGenre[Math.floor(Math.random() * moviesGenre.length)];
    const url = `${MOVIE_API}discover/movie?api_key=${MOVIE_KEY}&language=en&with_genres=${genre}&include_adult=false`;
    const res1 = await axios.get(url);
    const { total_pages: pages } = res1.data;

    const res2 = await axios.get(`${url}&page=${RandomPage(pages)}`);
    const res3 = await axios.get(`${url}&page=${RandomPage(pages)}`);
    const data = [...res2.data.results, ...res3.data.results];

    const convertedData = data.map(
      (el): Item => ({
        id: el.id,
        title: el.original_title,
        image: el.poster_path ? `${imageUrl}/${el.poster_path}` : null,
        year: el.release_date.split('-')[0],
      })
    );
    return convertedData;
  } catch (error) {
    return error;
  }
};

const Request = async (type: string): Promise<Array<Item>> => {
  let results = [];
  switch (type) {
    case 'movies':
      results = await getMovies();
      return results;
    default:
      return [];
  }
};

export default Request;
