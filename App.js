import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { MainPage } from './pages/MainPage';
import theme from './theme/theme';
import styled, { ThemeProvider } from 'styled-components/native';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <MainPage />
      </Container>
    </ThemeProvider>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.background};
  font-family: 'LeeSeoyun';
`;
