"use client";
import { Box, Button, TextField, Typography } from "@mui/material";
import Image from "next/image";
import NavBar from "../components/NavBar";
import pikachu from "../assets/images/pikachu.webp";
import lapras from "../assets/images/lapras.webp";
import pokemonHero from "../assets/images/pokemonHero.webp";
import StartIcon from "@mui/icons-material/Start";
import Link from "next/link";

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
            backgroundColor: " rgba(0,0,0,0.7)",
            width: "100%",
            height: "100%",
            padding: "2rem",
            display: "flex",
            gap: "4rem",
            alignItems: "center",
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
            <Typography
              component="p"
              variant="body1"
              color="whitesmoke"
              sx={{ mb: "0.8rem" }}
            >
              NextDex is a pokedex built with Next.js and Material UI. It uses a
              custom API to fetch pokemon data. The search bar above can be used
              to search for pokemon by name or by pokedex number. Visit the
              pokedex page to see a list of all pokemon and try out the
              autocomplete search bar.
            </Typography>
            <Link href="/pokedex">
              <Button
                sx={{ width: "10rem" }}
                endIcon={<StartIcon />}
                variant="contained"
              >
                View Pokedex
              </Button>
            </Link>
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Image src={lapras} alt="Pikachu" width={200} height={200} />
          </Box>
        </Box>
      </Box>
    </>
  );
}
