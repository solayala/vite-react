import React from 'react';
import { 
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText
} from '@mui/material';
import './HomePage.scss';

const steps = [
  "Select a learning game",
  "Indicate your preferred language",
  "Start playing",
  "Learn slangs"
];

const HomePage = () => {
  return (
    <Box className="home-page">
      <Card className="welcome-card">
        <CardContent>
          <Typography 
            variant="h6" 
            component="h2" 
            className="welcome-title" 
            gutterBottom
          >
            Let's start learning! 🇵🇾🇺🇸🇷🇴
          </Typography>
          <Typography 
            variant="body1" 
            className="welcome-subtitle" 
            gutterBottom
          >
            Follow this steps to become a slang master
          </Typography>
          <List className="steps-list">
            {steps.map((step, index) => (
              <ListItem key={index} className="step-item">
                <ListItemText 
                  primary={step}
                  className="step-text"
                />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>

      <Card className="connect-card">
        <CardContent>
          <Box className="content">
            <Typography 
              variant="h6" 
              component="h2" 
              className="connect-title" 
              gutterBottom
            >
              Connect with Friends
            </Typography>
            <Typography 
              variant="body1" 
              className="connect-description" 
              gutterBottom
            >
              Join your friends and explore new slangs together!
            </Typography>
            <Button 
              variant="contained" 
              color="primary"
              className="connect-button"
            >
              Connect Now
            </Button>
          </Box>
          <Box className="image-container">
            <img src="/people.jpg" alt="People" className="people-image" />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default HomePage;
