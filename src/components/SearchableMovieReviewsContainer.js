import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'KfkKoeHDjKi7oBTpOxaZnGw0CxQa44LO';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {

    state = {
        reviews: [],
        searchTerm: ""
    }


    handleChange = (e) => {
        this.setState({
            searchTerm: e.target.value 
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch(`${URL}&query=${this.state.searchTerm}`)
        .then(resp => resp.json())
        .then(reviews => {
            this.setState({
                reviews: reviews.results
            })
        })
    }

    render(){
        return (
            <div className='searchable-movie-review'>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" id="search" value={this.state.searchTerm} onChange={this.handleChange}  />
                    <button type="submit">Search</button>
                </form>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer