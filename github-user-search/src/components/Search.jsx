import githubApi from "../services/githubApi";

const Search = async () => {
  const response = await githubApi.get("/users/octocat");
  console.log(response.data);

  return <div>Check console</div>;
};

export default Search;
