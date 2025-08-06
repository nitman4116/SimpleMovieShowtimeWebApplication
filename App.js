import React from 'react';
import { StatusBar } from 'expo-status-bar';
import MovieShowtimeApp from './components/MovieShowtimeApp';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <MovieShowtimeApp />
    </>
  );
}
