// src/App.js
import React from 'react';
import { Container, Grid, Paper, Typography, Button } from '@mui/material';
import './App.css';
import RecipeReviewCard from './card';
import Navbar from './Navbar';


function SocialMedia() {
  return (
    <div className="Ap bg-green-100">
      <Navbar/>
      <Container className='' maxWidth="md" sx={{ marginTop: 4 }}>
            <Paper elevation={3} sx={{ padding: 3 }}>
              {/* News Feed Section */}   
              <div className='flex justify-center'>
                <div>
                  <RecipeReviewCard img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMJwHLIXl2de1rqFMyQEUfrzg8mUEwvOdb8A&usqp=CAU' caption="This a post for testing the feature." />
                  <RecipeReviewCard img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDiet8xvLFiAr9tF6xiN4q_VYr2sCYYFueUg&usqp=CAU' caption="This a post for testing the feature." />
                  <RecipeReviewCard img='https://marketplace.canva.com/EAFNlUJs5g4/2/0/1600w/canva-white-simple-certificate-of-appreciation-Fcz7KkZ5YaU.jpg' caption="This a post for testing the feature." />
                </div>
              </div>
            </Paper>
      </Container>
    </div>
  );
}

export default SocialMedia;
