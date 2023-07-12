"use client";
import { Box, Button, TextField, Typography } from "@mui/material";
import Image from "next/image";
import NavBar from "../components/NavBar";
import pikachu from "../assets/images/pikachu.webp";
import pokemonHero from "../assets/images/pokemonHero.webp";

export default function Home() {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${pokemonHero.src})`,
          width: "100%",
          height: "100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      >
        <Box
          sx={{
            backgroundColor: " rgba(0,0,0,0.8)",
            width: "100%",
            height: "100%",
            padding: "2rem",
            display: "flex",
            gap: "4rem",
            flexWrap: "wrap",
          }}
        >
          <Box
            sx={{
              maxWidth: "45rem",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography component="h1" variant="h2" color="whitesmoke">
              Welcome to NextDex
            </Typography>
            <Typography component="p" variant="body1" color="whitesmoke">
              {/* paragraph about NextDex and the built in pokemon search */}
              NextDex is a pokedex built with Next.js and Material UI. It uses a
              custom API to fetch pokemon data. The search bar above can be used
              to search for pokemon by name or by pokedex number. Visit the
              pokedex page to see a list of all pokemon and try out the
              autocomplete search bar.
            </Typography>
            B
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Image src={pikachu} alt="Pikachu" width={300} height={300} />
          </Box>
        </Box>
      </Box>
    </>
  );
}
