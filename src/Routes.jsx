import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { SuspenseFallback } from './components/common';
import ProtectedRoute from './ProtectedRoute';
import LoginPage from './pages/LoginPage/LoginPage';
import * as NAVIGATION from './config/navigation';

const HomePage = React.lazy(() => import('./pages/HomePage/HomePage'));
const LearningGame = React.lazy(() => import('./pages/LearningGame/LearningGame'));
const GameDetail = React.lazy(() => import('./pages/GameDetail/GameDetail'));

function AppRoutes() {
  return (
    <Suspense fallback={<SuspenseFallback />}>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        
        {/* only if logged in :D */}
        <Route element={<ProtectedRoute />}>
          <Route path={NAVIGATION.HOME} element={<HomePage />} />
          <Route path={NAVIGATION.LEARNING_GAME}>
            <Route index element={<LearningGame />} />
            <Route path=":gameId" element={<GameDetail />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;
