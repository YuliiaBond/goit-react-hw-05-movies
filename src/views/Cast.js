import {useState, useEffect} from 'react';
import { fetchMovieCast, IMAGE_URL } from '../services/api';

export default function Cast({ movieId }) {
    const [cast, setCast] = useState([]);

    useEffect(() => {
        fetchMovieCast(movieId).then(request => setCast(request.cast));
    }, [movieId]);

    return (
        <ul>
            {cast.map(el => (
                <li key={el.id}>
                    <img src={IMAGE_URL + el.profile_path} alt={el.name} width={200} />
                    <p>{el.name}</p>
                </li>
            ))}
        </ul>
    )
}
