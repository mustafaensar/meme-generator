import React from "react";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function MUI(){
  return(
    <>
    <Container maxWidth="sm">
      <Box
        sx={{
          width: 300,
          height: 300,
          backgroundColor: 'primary.dark',
          '&:hover': {
            backgroundColor: 'black',
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      />
      <Box
        sx={{
          marginTop:'50px'
        }}
      >
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
        />
      </Box>
    </Container>
    </>
  )
}