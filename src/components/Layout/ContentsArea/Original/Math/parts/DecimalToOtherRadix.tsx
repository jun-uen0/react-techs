import React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

const DecimalToOtherRadix: React.FC = () => {

  const [input, setInput] = React.useState('')
  const [output, setOutput] = React.useState(0)
  const [radix, setRadix] = React.useState('2')

  const decimalToOtherRadix = (input: string, radix: string) => {
    const decimalNum = Number(input)
    const radixArr: number[] = []
    for (let radixNum = 1; radixNum <= decimalNum; radixNum *= Number(radix)) {
      radixArr.push(radixNum)
    }
    let result: number[] = []
    let tmp: number = Number(input)
    radixArr.reverse().forEach(x => {
      result.push(Math.floor(tmp / x))
      tmp %= x
    })
    setOutput((Number(result.join(''))))
  }

  return (
    <>
      <Box sx={{ mt: 2 }} >
        <div>
          <TextField
            id="outlined-search"
            label="Set Radix Number"
            helperText="Only number is accepted"
            value={radix}
            onChange={e => setRadix(e.target.value)}
            InputProps={{
              style: { color: 'white' },
              inputProps: { style: { borderBottom: '1px solid white' } }
            }}
            InputLabelProps={{ style: { color: 'white' } }}
            FormHelperTextProps={{ style: { color: 'white' } }}
          />
        </div>
      </Box>
      <Box sx={{ mt: 2 }} >
        <div>
          <TextField
            id="outlined-search"
            label="Input Decimal Number"
            helperText="Only number is accepted"
            value={input}
            onChange={e => setInput(e.target.value)}
            InputProps={{
              style: { color: 'white' },
              inputProps: { style: { borderBottom: '1px solid white' } }
            }}
            InputLabelProps={{ style: { color: 'white' } }}
            FormHelperTextProps={{ style: { color: 'white' } }}
          />
        </div>
      </Box>
      <Box sx={{ mt: 2 }} >
        <Button variant="contained" onClick={() => {
          decimalToOtherRadix(input, radix)
        }}>Conversion</Button>
      </Box>
      <Box sx={{ mt: 2 }} >
        <div>
          <TextField
            label="Result"
            value={output}
            InputProps={{
              style: { color: 'white' },
              inputProps: { style: { borderBottom: '1px solid white' } }
            }}
            InputLabelProps={{ style: { color: 'white' } }}
            FormHelperTextProps={{ style: { color: 'white' } }}
          />
        </div>
      </Box>
    </>
  )
}

export default DecimalToOtherRadix