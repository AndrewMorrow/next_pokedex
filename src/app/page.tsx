"use client";
import { Button, TextField, Typography } from "@mui/material";
import Image from "next/image";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Typography variant="h1">Next Pokedex</Typography>
        <Typography variant="body1">This is a paragraph</Typography>
        <Button  sx={{color: "darkPrimary"}} variant="contained">Hello</Button>
        <TextField id="standard-basic" label="Standard" variant="standard" />
      </main>
    </>
  );
}
