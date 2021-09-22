import axios from "axios";

export const getUsers = () => { 
  const result = axios.get('http://localhost:3001/data');
  console.log(result);
  return result;
}

export const createUser = ({
  firstName, lastName }) => {
  return axios.post('http://localhost:3001/data', {
      firstName, 
      lastName 
    });
};

export const deleteUser = ({ id }) => {
  return axios.delete(`http://localhost:3001/data/${id}`);
};
