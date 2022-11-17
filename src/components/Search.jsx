import { useState, useEffect } from "react";
import { BiSearchAlt } from "react-icons/Bi";
import { BiLinkExternal } from "react-icons/Bi";

function Search() {
  const [repos, setRepos] = useState([]);
  const [initalRepos, setInitalRepos] = useState("");    
  
  useEffect(() => {
    async function fetchRepos() {
      try {
        const response = await fetch(
          "https://api.github.com/users/patilima/repos"
        );
        const data = await response.json();
        setInitalRepos(data);
        setRepos(data);
      } catch (err) {
        console.error(`Erro: ${err}`);
      }
    }
    fetchRepos();
  },[]);

  const handleChange = ({ target }) => {
    if (!target.value) {
      setRepos(initalRepos);
      return;
    }
    const filterRepo = repos.filter(({ name }) =>
      name.toLowerCase().includes(target.value)
    );
    setRepos(filterRepo);
  };
  return (
    <div className="main">
      <section className="input-data">
        <input type="text" required onChange={handleChange} />
        <label > <BiSearchAlt className="search"/> Pesquise um repositório </label>
      </section>
      <div className="repos-container">
        {repos.map(item => {
          return (
            <section className="repo" key={item.id}>
              <section>
                <p>{item.name}</p>
              </section>
              <section>
                <a href={item.html_url} target="_blank">
                  <BiLinkExternal className="link" />
                </a>
              </section>
            </section>
          );
        })}
      </div>
    </div>
  );
}
export default Search;
