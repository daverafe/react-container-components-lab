// Code MovieReviews Here
import React from 'react'

const MovieReviews = (props) => {
    return (
        <div className='review-list'>
            {props.reviews.map(review => <p className='review'>{review.display_title}</p>)}
        </div>
    )
}

export default MovieReviews