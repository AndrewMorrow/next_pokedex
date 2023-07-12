"use client";
import { Container } from "@mui/material";
import React from "react";

function MainContainer({ children }: { children: React.ReactNode }) {
  return <Container maxWidth="xl">{children}</Container>;
}

export default MainContainer;
