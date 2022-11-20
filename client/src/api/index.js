import axios from 'axios';

const url = 'http://localhost:5000/complaints';

export const fetchPosts = () => axios.get(url);
export const createComplaint = (newPost) => axios.post(url, newPost);
export const updateComplaint = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deleteComplaint = (id) => axios.delete(`${url}/${id}`);
