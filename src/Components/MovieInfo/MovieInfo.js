import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import css from "./movieInfo.module.css";
import {moviesActions} from "../../redux/slices/movieSlice";
import {GenreBadge} from "../GenreBadge/GenreBadge";

const MovieInfo = () => {
    const {selectedMovie, videos} = useSelector((state) => state.movies);
    const dispatch = useDispatch();

    console.log("id", selectedMovie);


    useEffect(() => {
        dispatch(moviesActions.getById(selectedMovie));
    }, [dispatch]);

    useEffect(() => {
        dispatch(moviesActions.getVideos(selectedMovie))
    }, [dispatch,videos]);

    console.log("video", videos);

    if (typeof selectedMovie === "number" || !selectedMovie) {
        return <div>Loading...</div>;
    }

    const {
        poster_path,
        original_title,
        release_date,
        vote_average,
        overview,
        original_language,
        budget,
        revenue,
        genres,
        tagline
    } = selectedMovie;

    return (
        <div className={css.Container}>
            <div className={css.Class}>

                <p className={css.Title}>{original_title.toUpperCase()}</p>
                {tagline && <p className={css.FieldValue}>"{tagline}"</p>}
                <div className={css.InfoPoster}>
                    <div>
                        <div>
                            <img
                                src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
                                alt={original_title}
                                className={css.Poster}
                            />
                        </div>
                    </div>
                    <div className={css.badgeinfo}>
                        <div className={css.badgeBlock}>
                            {
                                genres.map(genre => <GenreBadge key={genre.id} genre={genre}/>)
                            }
                        </div>
                        <div className={css.Info}>
                            <div className={css.FieldBlock}>
                                <p className={css.Field}>Release date:</p>
                                <p className={css.FieldValue}>{release_date}</p>
                            </div>
                            <div className={css.FieldBlock}>
                                <p className={css.Field}>Language:</p>
                                <p className={css.FieldValue}>{original_language}</p>
                            </div>
                            <div className={css.FieldBlock}>
                                <p className={css.Field}>User rating:</p>
                                <p className={css.FieldValue}>{vote_average}</p>
                            </div>
                            <div className={css.FieldBlock}>
                                <p className={css.Field}>Budget:</p>
                                <p className={css.FieldValue}>{budget}$</p>
                            </div>
                            <div className={css.FieldBlock}>
                                <p className={css.Field}>Revenue:</p>
                                <p className={css.FieldValue}>{revenue}$</p>
                            </div>
                            <p className={css.Field}>Description</p>
                            <div className={css.Overview}>{overview}</div>
                        </div>
                    </div>
                </div>
                <div className={css.video}>
                    {videos && videos.length > 0 && (
                        <><p className={css.Title}>TRAILER</p>
                            <iframe
                                width="640"
                                height="360"
                                src={`http://www.youtube.com/embed/${videos[0].key}?autoplay=1&origin=http://example.com`}
                            />
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export {MovieInfo};
