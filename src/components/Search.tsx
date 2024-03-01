import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchShows } from "../container/showSlice.tsx";
import { Link } from "react-router-dom";

function Search() {
    const [query, setQuery] = useState('');
    const [showAutocomplete, setShowAutocomplete] = useState(false);
    const dispatch = useDispatch();
    const shows = useSelector((state: { tvShow: { shows: any[] } }) => state.tvShow.shows);

    useEffect(() => {
        if (query !== '') {
            dispatch(fetchShows(query));
            setShowAutocomplete(true);
        } else {
            setShowAutocomplete(false);
        }
    }, [query, dispatch]);

    return (
        <div>
            <h3 className="text-3xl bg-blue-600 text-white h-14 pt-2 pl-5">TV shows</h3>
            <div className="flex ml-5 mt-5">
                <p>Search for tv shows:</p>
                <input className="border-gray-300 border-2 rounded-md ml-5" value={query} onChange={(e) => setQuery(e.target.value)} />
            </div>
            {showAutocomplete && (
                <div className='autocomplete' style={{ position: 'absolute' }}>
                    {shows.map((show: any) => (
                        <div key={show.show.id}>
                            <Link className='link' to={`/shows/${show.show.id}`}>
                                {show.show.name}
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Search;
