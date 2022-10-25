import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import styled, { ThemeProvider } from "styled-components/native";
import theme from "./theme/theme";
import Tabs from "./navigation/Tab";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </ThemeProvider>
  );
}
