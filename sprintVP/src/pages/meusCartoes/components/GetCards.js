import axios from "axios";

export default async function getCards() {
  try {
    const response = await axios.get('http://172.20.10.7:3000/cards');
    return (response.data);
  } catch (error) {
    return null;
  }
};