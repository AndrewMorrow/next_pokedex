import { Autocomplete, TextField } from '@mui/material'
import React from 'react'

function PokemonFilter() {
  return (
    <form>PokemonFilter
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={["Pikachu"].map((option) => option)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search input"
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      />
    </form>
  )
}

export default PokemonFilter