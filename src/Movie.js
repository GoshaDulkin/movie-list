import React from "react"

function Product(props) {
    return (
        <div>
            <h3 className='background'>{props.movie.id}. {props.movie.name}</h3>
            <img src={props.movie.imgUrl}/> 
            <p><b>Year Released:</b> {props.movie.releaseDate}</p>
            <p><b>Director:</b> {props.movie.director}</p>
            <p><b>Genre:</b> {props.movie.genre}</p>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
    )
}

export default Product  
