import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { 
  Box,
  Typography,
  TextField,
  Select,
  MenuItem,
  Button,
  Card,
  CardContent,
  FormControl,
  InputLabel
} from '@mui/material';
import { gamesData } from 'src/data/gamesData';
import './GameDetail.scss';

const GameDetail = () => {
  const { gameId } = useParams();
  const game = gamesData.find(g => g.id === gameId);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [nickname, setNickname] = useState('');
  const [language, setLanguage] = useState('english');
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  if (!game) {
    return <Typography>Game not found</Typography>;
  }

  const questions = game.questions[language];
  const currentQuestionData = questions[currentQuestion];

  const handleNext = () => {
    if (selectedOption === currentQuestionData.correctAnswer) {
      setScore(score + 1);
    }
    setSelectedOption(null);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const getEmoji = () => {
    const half = questions.length / 2;
    if (score === questions.length) return '😄';
    if (score >= half) return '😐';
    return '😢';
  };

  if (!gameStarted) {
    return (
      <Box className="game-setup-container">
        <Card className="setup-card">
          <CardContent>
            <Box 
              component="form" 
              className="setup-form"
              onSubmit={(e) => { 
                e.preventDefault(); 
                setGameStarted(true); 
              }}
            >
              <Typography 
                variant="h5" 
                component="h1" 
                className="setup-title"
              >
                {game.name}
              </Typography>
              
              <Box className="form-field">
                <TextField
                  fullWidth
                  label="Nickname"
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                  variant="outlined"
                  size="medium"
                  required
                />
              </Box>

              <Box className="form-field">
                <FormControl fullWidth variant="outlined" size="medium">
                  <InputLabel>Language</InputLabel>
                  <Select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    label="Language"
                    required
                  >
                    <MenuItem value="english">English</MenuItem>
                    <MenuItem value="spanish">Spanish</MenuItem>
                    <MenuItem value="romanian">Romanian</MenuItem>
                  </Select>
                </FormControl>
              </Box>

              <Button 
                type="submit"
                variant="contained" 
                color="primary"
                fullWidth
                className="start-button"
              >
                Start Game
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    );
  }

  if (showResults) {
    return (
      <Card className="results-card">
        <CardContent>
          <Typography variant="h5" className="results-text">
            {nickname}, you scored {score} out of {questions.length} {getEmoji()}
          </Typography>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="question-card">
      <CardContent>
        <Typography variant="h5" className="game-title">
          {game.name}
        </Typography>
        <Typography variant="h6" className="question-title">
          {currentQuestionData.title}
        </Typography>
        <Typography variant="body1" className="question-description">
          {currentQuestionData.description}
        </Typography>
        
        <Box className="options-container">
          {currentQuestionData.options.map((option, index) => (
            <Button
              key={index}
              variant="outlined"
              className={`option-button ${selectedOption === option ? 'selected' : ''}`}
              onClick={() => setSelectedOption(option)}
            >
              {option}
            </Button>
          ))}
        </Box>

        <Button
          variant="contained"
          color="primary"
          onClick={handleNext}
          disabled={!selectedOption}
          className="next-button"
        >
          Next
        </Button>
      </CardContent>
    </Card>
  );
};

export default GameDetail;