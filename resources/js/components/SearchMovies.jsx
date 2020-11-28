import Axios from 'axios'
import React, { useState } from 'react'

const SearchMovies = () => {

    const [searching, setSearching] = useState(false)
    const [message, setMessage] = useState(null)
    const [movies, setMovies] = useState(null)
    const [query, setQuery] = useState('')

    const searchMovies = async (e) => {
        e.preventDefault()
        setSearching(true)
        let url = `${process.env.MIX_OMDB_URL}/?&apikey=${process.env.MIX_OMDB_KEY}`
        try {
            const response = await fetch(`${url}&s=${query}&type="movie"`)
            const data = await response.json()
            setMessage(null)
            setMovies(data.search)
            setSearching(false)
            console.log(response.data)
        } catch (err) {
            setMessage('An unexpected error occured.')
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
                    <div className="col-6 col-md-2 offset-md-1"></div>
                    <div className="col-6 col-md-2"></div>
                    <div className="col-6 col-md-2"></div>
                    <div className="col-6 col-md-2"></div>
                    <div className="col-6 col-md-2"></div>
                </div>
            </div>
        </>
    )
}

export default SearchMovies
