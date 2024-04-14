const url = 'http://www.omdbapi.com/'
const apiKey = '&apikey=42f6b570'

export const getMovieById = async (imdbID) => {
    const response = await fetch(url + '?i=' + imdbID + '&plot=full' + apiKey)
    const data = await response.json()

    return data
}

export const getMoviesBySearch = async (search, page) => {
    const response = await fetch(url + '?s=' + search + '&type=movie' + (page ? `&page=${page}` : "") + apiKey)
    const data = await response.json()
    return data
}


