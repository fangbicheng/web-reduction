import axios from 'axios';

export function open(id) {
  return axios.post(`/api/reduction/open/${id}`);
}

export function close(id) {
  return axios.post(`/api/reduction/close/${id}`);
}

export function getReductions() {
  return axios.get('/api/reduction/all');
}

export function getReductionDetail(id) {
  return axios.get(`/api/reduction/detail/${id}`);
}
