
import React from 'react';
import PropTypes from 'prop-types';
// import {  } from "./config/firebase/firestore";
import { db, addDocument, collectionRef } from "./config/firebase";
import Button from "@mui/material/Button";
// export const AboutPage = ()=>{
//     return (
//         <div>
//             gordon
//         </div>
//     )
// }


// Define the Movie interface with proper types
export const AddMovieButton = ({ variant = "contained" }) => {

    const addMovie = async () => {
      try {
        const movieData = {
          title: 'Drumline',
          year: 2002,
          genre: 'Music, Drama'
        };
  
        await addDocument(collectionRef(db, 'movies'), movieData);
      } catch (error) {
        console.error("Error adding movie:", error);
      }
    };
  
    const handleClick = () => {
      addMovie();
    };
  
    return (
      <Button 
        variant={variant}
        onClick={handleClick}
      >
        Add Drumline
      </Button>
    );
  };
  
  // Add PropTypes for runtime type checking
  AddMovieButton.propTypes = {
    variant: PropTypes.oneOf(['text', 'outlined', 'contained'])
  };
  
  // Add default props
  AddMovieButton.defaultProps = {
    variant: 'contained'
  };
  
  export default AddMovieButton;

