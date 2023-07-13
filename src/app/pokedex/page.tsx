"use client";
import PokemonFilter from "@/components/PokemonFilter";
import { Box, Typography } from "@mui/material";
import React from "react";

const PokedexPage = () => {
  return (
    <section>
      <Typography variant="h4" component="h1" sx={{ mb: "1rem" }}>
        {" "}
        Pokedex{" "}
      </Typography>
      <Box sx={{ maxWidth: "30rem", mb: "2rem" }}>
        <PokemonFilter />
      </Box>
    </section>
  );
};

export default PokedexPage;
