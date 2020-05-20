import axios from 'axios';
import { MOVIE_API, MOVIE_KEY, ANIME_MANGA } from '../constants/urls';
import { moviesGenre } from '../constants/config';
import { Item } from '../interfaces/index.d';

const randomNumber = (num: number): number => {
  return Math.floor(Math.random() * num + 1);
};

const getMovies = async (): Promise<Array<Item>> => {
  const imageUrl = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2';
  try {
    const genre = moviesGenre[Math.floor(Math.random() * moviesGenre.length)];
    const url = `${MOVIE_API}discover/movie?api_key=${MOVIE_KEY}&language=en&with_genres=${genre}&include_adult=false`;
    const res1 = await axios.get(url);
    const { total_pages: pages } = res1.data;

    const res2 = await axios.get(`${url}&page=${randomNumber(pages)}`);
    const res3 = await axios.get(`${url}&page=${randomNumber(pages)}`);
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

const getAnimes = async (): Promise<Array<Item>> => {
  try {
    let genre = randomNumber(12);

    // Check if genre is not RX
    if (genre === 12) {
      genre = randomNumber(12);
    }
    const res = await axios.get(
      `${ANIME_MANGA}search/anime?genre=${genre}&type=tv`
    );
    const { results } = res.data;
    const convertedData = results.map(
      (el: any): Item => ({
        id: el.mal_id,
        title: el.title,
        image: el.image_url,
        year: el.start_date ? el.start_date.split('-')[0] : '####',
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
    case 'animes':
      results = await getAnimes();
      return results;
    default:
      return [];
  }
};

export default Request;
