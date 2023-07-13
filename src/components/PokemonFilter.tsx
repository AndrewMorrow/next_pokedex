import { Autocomplete, TextField, Typography } from "@mui/material";
import React from "react";

function PokemonFilter() {
  return (
    <form>
      {/* <Typography variant="h5" component="h2">
        Filter Pokemon
      </Typography> */}
      <Autocomplete
        multiple
        id="tags-outlined"
        options={["hello", "world"]}
        size="small"
        getOptionLabel={(option) => option}
        defaultValue={["hello"]}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            label="Filter Pokemon"
            placeholder="Pokemon name, number or type"
          />
        )}
      />
    </form>
  );
}

export default PokemonFilter;
