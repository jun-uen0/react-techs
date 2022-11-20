import React from 'react'
// import OtherRadixToDecimal from './parts/OtherRadixToDecimal'
import DecimalToOtherRadix from './parts/DecimalToOtherRadix'

const RadixConversion: React.FC = () => {

  return (
    <>
      <h3>Radix conversion</h3>
      <p>This simple application will convert any types of cardinal number into decimal number</p>
      {/* <OtherRadixToDecimal /> */}
      <DecimalToOtherRadix />
    </>
  )
}

export default RadixConversion