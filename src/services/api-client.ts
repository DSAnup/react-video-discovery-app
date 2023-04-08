import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "ab6d8a163eab406dbbcc25bf248e3de7",
  },
});
