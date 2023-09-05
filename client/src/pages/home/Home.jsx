import React, { useEffect } from "react";

// react redux imports
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieData } from "../../actions/movieAction";

// import scss file
import styles from "./style.module.scss";

const Home = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.movie.isLoading);
  const success = useSelector((state) => state.movie.isSuccess);
  const errorMessage = useSelector((state) => state.movie.errorMessage);
  const movieData = useSelector((state) => state.movie.data);

  return (
    <div className={styles.home}>
      Status:
      {loading && <span> loading ...</span>}
      {success === false && <span> Error, {errorMessage}</span>}
      {success === true && <span> API request successful</span>}
      <br />
      <br />
      <button onClick={() => dispatch(fetchMovieData())}>Fetch movies</button>
      <div>
        {movieData && (
          <div>
            <br />
            <h2>Movie Data: </h2>
          </div>
        )}
        {Array.isArray(movieData.results) &&
          movieData.results.length > 0 &&
          movieData.results.map((items, key) => (
            <div id={key}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                {console.log(items.primaryImage.url)}
                {true && (
                  <Image
                    src={items.primaryImage.url}
                    alt="image from api"
                    height="300px"
                    width="500px"
                  />
                )}

                <p>{items.titleType.text}</p>
              </div>
            </div>
          ))}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Home;
