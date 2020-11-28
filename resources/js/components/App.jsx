import React from 'react'
import ReactDOM from 'react-dom'

import Header from './Header'
import SearchMovies from './SearchMovies'

const App = () => {
    return (
        <>
            <Header />
            <SearchMovies />
        </>
    )
}

export default App

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'))
}
