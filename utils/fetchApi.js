import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '729399b469mshcf6ce7b23ba8b17p1b565bjsne23aff9e9c54' ,
    },
  });
    
  return data;
}