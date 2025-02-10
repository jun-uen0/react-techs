import React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container';
import OtherRadixToDecimal from './parts/OtherRadixToDecimal'
import DecimalToOtherRadix from './parts/DecimalToOtherRadix'

const RadixConversion: React.FC = () => {

  return (
    <>
      <h3 style={{ color: 'white' }}>Radix conversion</h3>
      <p style={{ color: 'white' }}>※ English only</p>
      <p style={{ color: 'white' }}>This simple application will convert any types of cardinal number into decimal number</p>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-start'
        }}
      >
        <Container>
          <OtherRadixToDecimal />
        </Container>

        {/* あとでがんばる */}
        <br />
        <br />
        <br />
        <Container>
          <DecimalToOtherRadix />
        </Container>
      </Box>
    </>
  )
}

export default RadixConversion