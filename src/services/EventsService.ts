import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
  },
});
export default {
  getEvents(perPage = 3, page = 1): Promise<any> {
    return apiClient.get(`/events?_limit=${perPage}&_page=${page}`);
  },
  getEvent(id: number): Promise<any> {
    return apiClient.get(`/events/${id}`);
  },
};
