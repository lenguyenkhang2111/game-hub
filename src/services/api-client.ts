import axios from "axios";
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "d515838abe7442bc9ce2625373e4c95d",
  },
});
