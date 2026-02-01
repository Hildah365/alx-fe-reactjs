import axios from "axios";

const githubApi = axios.create({
  baseURL: "https://api.github.com",
  headers: import.meta.env.VITE_APP_GITHUB_API_KEY
    ? {
        Authorization: `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`,
      }
    : {},
});

export default githubApi;
