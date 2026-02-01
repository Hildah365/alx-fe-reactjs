import { useState } from "react";
import fetchUserData from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState(""); // Input value
  const [user, setUser] = useState(null);       // API response
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUser(null);

    try {
      const data = await fetchUserData(username);
      setUser(data);
    } catch (err) {
      setError("Looks like we can't find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="flex mb-4">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="flex-1 p-2 border rounded-l"
          required
        />
        <button type="submit" className="p-2 bg-blue-500 text-white rounded-r">
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {user && (
        <div className="border p-4 rounded flex items-center gap-4">
          <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
          <div>
            <h3 className="font-bold">{user.name || user.login}</h3>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-600">
              View Profile
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
