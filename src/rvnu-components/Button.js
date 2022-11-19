import React from 'react';
import { Button } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';

export default function FormButton({isButtonDisabled, buttonText, disabledButtonText, loading, ...props}) {

  const theme = createTheme({
    typography: {
      button: {
        textTransform: 'none'
      },
      fontFamily: [
        'DM Sans',
      ].join(','),
      fontSize: 16,
    },
  });


  return (
    <ThemeProvider theme={theme}>
    { isButtonDisabled ? 
      <Button
        style={{
          borderRadius: 4,
          marginTop: "20px",
          color: "white"
        }} 
        variant="contained"
        disabled
    >{disabledButtonText}</Button> : 
     <Button
      id="verify" 
      style={{
        borderRadius: 4,
        backgroundColor: "#000000",
        marginTop: "20px",
        }} 
        variant="contained"
        {...props}
    >{ loading ? <CircularProgress size={'28px'} style={{'color': 'white'}}/> : buttonText }</Button>
    }
  </ThemeProvider>
  )
}


