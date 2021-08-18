import axios from 'axios';
import { error } from 'console';

export const fetchData = () => {
    const starWarsApi = "https://swapi.dev/api/films/";
    axios.get(`${starWarsApi}`).then((response) => {
        const films = response.data.results;
    })
    .catch((error) => {
        console.log("Error");
    })
}