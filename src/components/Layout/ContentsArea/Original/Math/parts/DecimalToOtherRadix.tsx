import React from 'react'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const DecimalToOtherRadix: React.FC = () => {

  const [input, setInput] = React.useState('')
  const [output, setOutput] = React.useState(0)
  const [radix,setRadix] = React.useState('2')

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
          />
        </div>
      </Box>
      <Box sx={{ mt: 2 }} >
        <Button variant="contained" onClick={() => {
          decimalToOtherRadix(input,radix)
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

export default DecimalToOtherRadix