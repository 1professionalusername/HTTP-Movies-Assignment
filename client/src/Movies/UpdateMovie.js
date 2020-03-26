import React, { useState, useEffect } from 'react';
import axios from 'axios'


const UpdateMovie = () => {

    const [updateMovie, setUpdateMovie] = useState

        ({
            title: "",
            director: "",
            metascore: "",
            stars: []
        })


    const handleSubmit = event => {

    }

    // Handles changes to title, director, & metascore
    // If stars array, spread in state and separate with comma
    const handleChanges = event => {
        setUpdateMovie({ ...updateMovie, [event.target.name]: event.target.value })
        if (event.target.name === 'stars') {
            setUpdateMovie({ ...updateMovie, stars: event.target.split(",") })
        }
    }

    return (
        <div>
            <h3>Movies are updating...</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
                    onChange={handleChanges}
                    placeholder="title"
                    value={updateMovie.title}
                />
                <input
                    type="text"
                    name="director"
                    onChange={handleChanges}
                    placeholder="director"
                    value={updateMovie.director}
                />
                <input
                    type="text"
                    name="metascore"
                    onChange={handleChanges}
                    placeholder="metascore"
                    value={updateMovie.metascore}
                />
                <button type="submit">Update Movie</button>
            </form>
        </div>
    );

};




export default UpdateMovie;