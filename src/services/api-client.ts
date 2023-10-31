import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "8e6bd9f123844caab3002a150c108c22",
  },
});
