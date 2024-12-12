import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Box, 
  Typography, 
  Card,
  CardContent,
  Grid
} from '@mui/material';
import { gamesData } from 'src/data/gamesData';
import './LearningGame.scss';

const LearningGameHome = () => {
  return (
    <Box className="learning-game-container">
      <Typography 
        variant="h6" 
        component="h6" 
        className="learning-game-title"
      >
        Learning Games
      </Typography>
      
      <Grid container className="learning-game">
        {gamesData.map((game) => (
          <Grid item xs={12} sm={6} md={3} key={game.id}>
            <Card 
              component={Link} 
              to={`/learning-game/${game.id}`}
              className="game-card"
            >
              <CardContent>
                <Box className="icon-wrapper">
                  {game.icon}
                </Box>
                <Typography 
                  variant="h6" 
                  component="h3" 
                  className="game-card-title" 
                  gutterBottom
                >
                  {game.name}
                </Typography>
                <Typography 
                  variant="body2" 
                  className="game-card-description"
                >
                  {game.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default LearningGameHome;