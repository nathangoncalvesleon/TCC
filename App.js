import React from "react";
import { NativeBaseProvider, Box } from "native-base";
import { Routes } from "./src/routes/routes";

export default function App() {
  return (
    <NativeBaseProvider>
      <Routes />
    </NativeBaseProvider>
  );
}