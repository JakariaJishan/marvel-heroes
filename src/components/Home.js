import React, { useState } from "react";
import { useSelector } from "react-redux";
import styles from "../style/Home.module.css";
import Anime from "./Anime";
import Hero from "./Hero";

function Home() {
  const animeArr = useSelector((state) => state.animeList.animeList.data);

  const [finalAnime, setFinalAnime] = useState(animeArr);

  const handleOnChange = (e) => {
    const filteredAnime = animeArr.filter(
      (anime) =>
        anime.title
          .toString()
          .trim()
          .toLowerCase()
          .indexOf(e.target.value.toLowerCase()) !== -1
    );
    setFinalAnime(filteredAnime);
  };
  return (
    <div>
      <Hero />
      <div className={styles.filter}>
        <input
          type="text"
          onChange={(e) => handleOnChange(e)}
          placeholder="Search Anime..."
        />
      </div>
      <div className={styles.showcase}>
        {finalAnime === undefined &&
          animeArr?.map((anime) => <Anime key={anime.mal_id} anime={anime} />)}
        {finalAnime?.map((anime) => (
          <Anime key={anime.mal_id} anime={anime} />
        ))}
      </div>

      {/* {!finalAnime?.length && <p>no found</p>} */}
    </div>
  );
}

export default Home;
