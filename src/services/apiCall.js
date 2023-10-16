import axios from "axios";

const API_ENDPOINT =
  "https://f68370a9-1a80-4b78-b83c-8cb61539ecd6.mock.pstmn.io/api/v1/get_market_data/";

const fetchData = async (setMarketData) => {
  try {
    const response = await axios.get(API_ENDPOINT);
    setMarketData(response?.data?.data.reverse());
  } catch (error) {
    console.error(error);
  }
};

export default fetchData;
