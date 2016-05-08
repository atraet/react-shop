import axios from 'axios';

const baseUrl = 'http://localhost:5555';

export function getCompanies(searchText){
    const url = `${baseUrl}/companies`;

    return axios.get(url);
}

export function getProducts(companyId){
    const url = `${baseUrl}/products`;

    return axios.get(url);
}