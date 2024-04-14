import React from 'react'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const OtherRadixToDecimal: React.FC = () => {

  const [input, setInput] = React.useState('')
  const [output, setOutput] = React.useState(0)
  const [cardinal, setCardinal] = React.useState('2')

  // @todo: Need Validation for number
  const cardinalToDecimal = (num: string, cardinal: string) => {
    const prepCulc = num.split("").map(Number).reverse()
    const result = prepCulc.map((x, i) => {
      return i === 0 ? x * 1 : x * Number(cardinal) ** i
    })
    setOutput(Number(result.reduce((p, c) => p + c)))
  }

  return (
    <>
      <Box sx={{ mt: 2 }} >
        <div>
          <TextField
            id="outlined-search"
            label="Input cardinal"
            helperText="Only number is accepted"
            value={cardinal}
            onChange={e => setCardinal(e.target.value)}
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
            label="Input Number"
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
          cardinalToDecimal(input, cardinal)
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

export default OtherRadixToDecimal