import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";

export default function Detail () {

    const [loading, setLoading] = useState(true);
    const [movieData, setMovieData] = useState({});

    const {id} = useParams();

    const getMovie = async () => {

        const res   = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
        const json  = await(res).json();
        return json;
    }

    useEffect(()=> {
        getMovie().then(result => {

            if(result.status === 'ok') {
                setLoading(false);
                setMovieData(result.data.movie);
            } else {
                alert('데이터를 가져오는 데 문제가 생겼습니다.');
            }
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            {loading ? 
                <h1>Loading</h1> 
                : 
                <div>
                    <h1>Detail</h1> 
                    <h2>{movieData.title}</h2>
                    <img src={movieData.medium_cover_image} alt={movieData.title} />
                    <h4>{movieData.description_full}</h4>
                </div>
            }
        </div>
    )
}
