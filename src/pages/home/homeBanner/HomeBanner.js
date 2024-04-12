import React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './style.css';

export default function HomeBanner() {
  return (
    <>
      <div>
        <img src='https://prd-rteditorial.s3.us-west-2.amazonaws.com/wp-content/uploads/2021/09/10111929/Lucifer_S6-keyart-600x314.jpg'
          alt='Movie banner'
          className='background-image' />
        <div
          className="custom-container"
        >
          <Typography variant="h2" gutterBottom>
            Welcome
          </Typography>
          <Typography variant="h5" gutterBottom>
            Millions of movies, TV shows, and people to discover. Explore now.
          </Typography>
          <div className="search-container">
            <TextField
              variant="outlined"
              placeholder="Search movies, TV shows, people..."
              margin="normal"
            />
            <Button
              variant="contained"
            >
              Search
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
