import React from "react"
import Movie from "./Movie"
import movieData from "./movieData"
import Title from './Title'

function App() {
    const movieComponents = movieData.map(item => <Movie key={item.id} movie={item}/>)
    
    return (
        <div>
            <Title />
            {movieComponents}
            
        </div>
    )
}
export default App
