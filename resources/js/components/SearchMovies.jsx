import Axios from 'axios'
import React, { useState } from 'react'

const SearchMovies = () => {

    const [searching, setSearching] = useState(false)
    const [message, setMessage] = useState(null)
    const [movies, setMovies] = useState([])
    const [query, setQuery] = useState('')

    const searchMovies = async (e) => {
        e.preventDefault()
        setSearching(true)
        let url = `${process.env.MIX_OMDB_URL}/?&apikey=${process.env.MIX_OMDB_KEY}`
        try {
            const response = await fetch(`${url}&s=${query}&type="movie"`)
            const data = await response.json()
            setMessage(null)
            if (! data.Search) {
                throw new Error('No movies were found!')
            }
            setMovies(data.Search)
            setSearching(false)
        } catch (err) {
            console.log(err.message);
            setMessage(err?.message)
            setSearching(false)
        }
    }

    return (
        <>
            <div className="container pt-5">
                <div className="row d-flex flex-row justify-content-center">
                    <div className="col-6">
                        <form>
                            <div className="form-group position-relative" >
                                <input
                                    className="form-control"
                                    type="text"
                                    value={query}
                                    onChange={e => setQuery(e.target.value)}
                                />
                                <button
                                    type="submit"
                                    className="btn btn-success position-absolute"
                                    style={{ top: 0, right: 0, }}
                                    onClick={searchMovies}
                                >
                                   Search
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="row">
                    {searching && !message ? (<span> loading... </span>) : message ? (<div className="message"> {message} </div>) : (
                        movies.length > 0 && movies.map((movie, idx) => (
                            <div className={`col-6 col-md-2 ${idx == 0 || idx % 5 == 0 ? 'offset-md-1' : ''} mr-2 mt-3 pt-1 px-1 rounded shadow`} key={movie.imdbID}>
                                <img className="img-fluid" style={{ height: "269px"}} src={movie.Poster} alt="Movie Poster" />
                                <p className="pt-3">Title: <span className="text-muted">{movie.Title}</span></p>
                                <p>Year of Release: <span className="text-muted">{movie.Year}</span></p>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </>
    )
}

export default SearchMovies
