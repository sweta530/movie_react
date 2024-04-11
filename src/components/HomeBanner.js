import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';

export default function HomeBanner() {
  return (
    <>
      <Container
        sx={{
          backgroundImage: 'url("https://t3.ftcdn.net/jpg/05/15/63/82/360_F_515638234_Leo0UBEay0ozXWnObkkxLRNJXM9xhdWG.jpg")', // Replace with the path to your background image
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '70vh',
          maxWidth: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          color: '#fff',
          textShadow: '2px 2px 4px rgba(0,0,0,0.5)', // Add text shadow for better readability
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          padding: 0, // Remove padding
          margin: 0, // Remove margin
        }}
        className="custom-container"
      >
        <Typography variant="h2" gutterBottom>
          Welcome
        </Typography>
        <Typography variant="h5" gutterBottom>
          Millions of movies, TV shows, and people to discover. Explore now.
        </Typography>
        <TextField
          variant="outlined"
          placeholder="Search movies, TV shows, people..."
          fullWidth
          margin="normal"
        />
      </Container>
    </>
  );
}


