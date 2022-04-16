import axios from "axios";

export const DataBook = (search:string, currentPage:number ) => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=12&startIndex=${
        currentPage * 12
    }`;
    const api = axios.get(url);
    return api;
}