import axios from 'axios';
import type { CvResponse } from '../models/cv.model';

const api = axios.create({
  baseURL: '/api',
});

export const getCv = async () => {
  const { data } = await api.get<CvResponse>('/cv');
  return data;
};
