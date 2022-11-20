import React from 'react'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const RadixConversion: React.FC = () => {

  const [input, setInput] = React.useState('')
  const [output, setOutput] = React.useState(0)
  const [cardinal, setCardinal] = React.useState('2')

  // @todo: Need Validation for number
  const cardinalToDecimal = (num:string,cardinal:string) => {
    const prepCulc = num.split("").map(Number).reverse()
    const result = prepCulc.map((x,i) => {
      return i === 0 ? x * 1 : x * Number(cardinal) ** i
    })
    setOutput(Number(result.reduce((p,c)=>p+c)))
  }

  return (
    <>
      <h3>Radix conversion</h3>
      <p>This simple application will convert any types of cardinal number into decimal number</p>
      <Box sx={{ mt: 2 }} >
        <div>
          <TextField
            id="outlined-search"
            label="Input cardinal"
            helperText="Only number is accepted"
            value={cardinal}
            onChange={e => setCardinal(e.target.value)}
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
          />
        </div>
      </Box>
      <Box sx={{ mt: 2 }} >
        <Button variant="contained" onClick={() => {
          cardinalToDecimal(input,cardinal)
        }}>Conversion</Button>
      </Box>
      <Box sx={{ mt: 2 }} >
        <div>
          <TextField
            label="Result"
            value={output}
          />
        </div>
      </Box>
    </>
  )
}

export default RadixConversion