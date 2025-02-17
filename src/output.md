
`./index.tsx`
```
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
```

`./App.tsx`
```
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/category/:categoryName" element={<Layout />} />
      </Routes>
    </Router>
  );
};

export default App
```

`./contents/math.json`
```
[
  {
    "title": "Discrete mathematics",
    "path": "",
    "description": "Let's Recap Discrete mathematics with Radix conversion",
    "original": "math/RadixConversion"
  }
]
```

`./contents/algorithms.json`
```
[
  {
    "title": "Binary Search",
    "path": "articles/articles/algorithms/binary_search",
    "description": "Explanation of the binary search algorithm"
  },
  {
    "title": "Power",
    "path": "articles/articles/algorithms/power",
    "description": "Efficient power function using recursion"
  },
  {
    "title": "Greatest Common Divisor",
    "path": "articles/articles/algorithms/gcd",
    "description": "Find GCD using recursion"
  }
]
```

`./contents/react.json`
```
[
  {
    "title": "State",
    "path": "articles/articles/react/state",
    "description": "useState is a hook that lets we add a local state to our component. Where is state data? It is stored in the component's props. Which means we can not refer state from other components. But we can call the function (Ex. Example()) to use the state."
  },
  {
    "title": "Effect",
    "path": "articles/articles/react/effect",
    "description": "We can perform data fetching, subscripting, and manually changing DOM from React components. In React, we call these operation 'side-effects' or 'effects' in short. And we have to use useEffect to perform these side-effects."
  },
  {
    "title": "Context",
    "path": "articles/articles/react/context",
    "description": "Context in React.js provides a way to pass data through the components without props. We can avoid to pass props again and again. (Parent to child via props)"
  }
]
```

`./contents/rust.json`
```
[
  {
    "title": "Variables",
    "path": "articles/articles/rust/variables",
    "description": "Very basic of Rust programming, variables"
  }
]
```

`./contents/lpic.json`
```
[
  {
    "title": "【Level 1】Commands",
    "path": "articles/articles/lpic/1_command",
    "description": "Very basic commands for Debian"
  }
]
```

`./contents/aws.json`
```
[
  {
    "title": "Craete AWS ECS Fargate",
    "path": "articles/articles/aws/create_fargate",
    "description": "Explains how to create AWS ECS Fargate with very basic way."
  },
  {
    "title": "Push Docker image to AWS ECR",
    "path": "articles/articles/aws/push_to_ecr",
    "description": "Explains how to push Docker image to AWS ECR manually"
  }
]
```

`./contents/others.json`
```
[
  {
    "title": "Dockerizing Nginx",
    "path": "articles/articles/docker/run_nginx_container",
    "description": "Explains how to dockerize Nginx sample app"
  },
  {
    "title": "Dockerizing React App",
    "path": "articles/articles/docker/dockering_react_app",
    "description": "Explains how to dockerize React project with sample app"
  },
  {
    "title": "React State",
    "path": "articles/articles/react/state",
    "description": "useState is a hook that lets we add a local state to our component. Where is state data? It is stored in the component's props. Which means we can not refer state from other components. But we can call the function (Ex. Example()) to use the state."
  },
  {
    "title": "React Effect",
    "path": "articles/articles/react/effect",
    "description": "We can perform data fetching, subscripting, and manually changing DOM from React components. In React, we call these operation 'side-effects' or 'effects' in short. And we have to use useEffect to perform these side-effects."
  },
  {
    "title": "React Context",
    "path": "articles/articles/react/context",
    "description": "Context in React.js provides a way to pass data through the components without props. We can avoid to pass props again and again. (Parent to child via props)"
  },
  {
    "title": "Introducing Ngrok",
    "path": "articles/articles/utils/ngrok",
    "description": "Explains about Ngrok, useful tool for web development"
  }
]
```

`./contents/about.json`
```
[
  {
    "title": "About Me",
    "path": "articles/about",
    "description": "About me"
  }
]

```

`./contents/leetcode.json`
```
[
  {
    "title": "3. Longest Substring Without Repeating Characters",
    "path": "articles/articles/leetcode/medium/00003_longest-substring-without-repeating-characters",
    "description": "【Medium】Not so difficult, but need to pay attention to the details."
  },
  {
    "title": "26. Remove Duplicates from Sorted Array",
    "path": "articles/articles/leetcode/easy/00026_remove-duplicates-from-sorted-array",
    "description": "【Easy】You can learn basic list/array operations from this problem."
  },
  {
    "title": "29. Divide Two Integers",
    "path": "articles/articles/leetcode/medium/00029_divide-two-integers",
    "description": "【Medium】You need to run with time complexity of O(log n)."
  },
  {
    "title": "58. Length of Last Word",
    "path": "articles/articles/leetcode/easy/00058_length-of-last-word",
    "description": "【Easy】You can try out your new programming language with this problem."
  },
  {
    "title": "69. Sqrt(x)",
    "path": "articles/articles/leetcode/easy/00069_sqrtx",
    "description": "【Easy】You need to run with time complexity of O(log n)."
  },
  {
    "title": "349. Intersection of Two Arrays",
    "path": "articles/articles/leetcode/easy/00349_intersection-of-two-arrays",
    "description": "【Easy】You can solve this problem in just one line using set."
  },
  {
    "title": "456. 132 Pattern",
    "path": "articles/articles/leetcode/medium/00456_132-pattern",
    "description": "【Medium】You need to run with time complexity of O(N)."
  },
  {
    "title": "1456. Maximum Number of Vowels in a Substring of Given Length",
    "path": "articles/articles/leetcode/easy/01456_maximum-number-of-vowels-in-a-substring-of-given-length",
    "description": "【Easy】You need to think a bit to make it faster."
  }
]
```

`./index.css`
```
html {
  overflow-y: scroll;
}

body {
  margin: 0;
  font-family: 'YourPreferredFont', sans-serif;
}

.App {
  text-align: center;
  min-height: 100vh;
  background-color: #dbf2ff;
}
.container {
  display: flex;
  max-width: 100%;
  /* For responsive */
  flex-direction: column;
}

.cardArea {
  max-width: 350px;
  margin: 30px;
}

/* Resize the image */
.content img{
  width: 100%;
}

.contentsArea {
  text-align: left;
  flex: 1;
  /* For responsive */
  margin: 30px;
}

@media (min-width: 768px) {
  .container {
    flex-direction: row;
  }
}
```

`./components/Layout/SideBar/parts/Items.tsx`
```
import { useNavigate } from 'react-router-dom'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Button from '@mui/material/Button'
import InfoIcon from '@mui/icons-material/Info'
import Code from '@mui/icons-material/Code'
import CloudQueue from '@mui/icons-material/CloudQueue'
import { SideBarProps } from '../../../types'
import LeetCodeLogo from '../../../../assets/leetcode_black.png'
import LaptopLogo from '../../../../assets/laptop.png'

const Items: React.FC<SideBarProps> = (props) => {
  const navigate = useNavigate()

  return (
    <>
      <ListItem key={'About Me'}>
        <Button
          onClick={() => {
            props.setContentsType('about')
            props.setShowCards(false)
            navigate(`/category/about`)
            props.toggleDrawer()
          }}
        >
          <ListItemIcon>
            <InfoIcon color='secondary' />
          </ListItemIcon>
          <ListItemText primary={'About Me'} sx={{ color: '#091c33' }} />
        </Button>
      </ListItem>

      <ListItem key={'Algorithms'}>
        <Button
          onClick={() => {
            props.setContentsType('algorithms')
            props.setShowCards(true)
            navigate(`/category/algorithms`)
            props.toggleDrawer()
          }}
        >
          <ListItemIcon>
            <Code color='secondary' />
          </ListItemIcon>
          <ListItemText primary={'Algorithms'} sx={{ color: '#091c33' }} />
        </Button>
      </ListItem>

      <ListItem key={'LeetCode'}>
        <Button
          onClick={() => {
            props.setContentsType('leetcode')
            props.setShowCards(true)
            navigate(`/category/leetcode`)
            props.toggleDrawer() // ← 追加
          }}
        >
          <ListItemIcon>
            <img src={LeetCodeLogo} alt='LeetCode logo' height={'25px'} width={'25px'} />
          </ListItemIcon>
          <ListItemText primary={'LeetCode'} sx={{ color: "#091c33" }} />
        </Button>
      </ListItem>

      <ListItem key={'AWS'}>
        <Button
          onClick={() => {
            props.setContentsType('aws')
            props.setShowCards(true)
            navigate(`/category/aws`)
            props.toggleDrawer()
          }}
        >
          <ListItemIcon>
            <CloudQueue color='secondary' />
          </ListItemIcon>
          <ListItemText primary={'AWS'} sx={{ color: "#091c33" }} />
        </Button>
      </ListItem>
      <ListItem key={'Others'}>
        <Button
          onClick={() => {
            props.setContentsType('others')
            props.setShowCards(true)
            navigate(`/category/others`)
            props.toggleDrawer()
          }}
        >
          <ListItemIcon>
            <img src={LaptopLogo} alt='Laptop logo' height={'25px'} width={'25px'} />
          </ListItemIcon>
          <ListItemText primary={'Others'} sx={{ color: "#091c33" }} />
        </Button>
      </ListItem>
    </>
  )
}

export default Items
```

`./components/Layout/SideBar/SideBar.tsx`
```
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import Drawer from '@mui/material/Drawer'
import useMediaQuery from '@mui/material/useMediaQuery'
import Items from './parts/Items'
import { SideBarProps } from '../../types'

const SideBar: React.FC<SideBarProps> = (props) => {
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <>
      {isMobile ? (
        <>
          <Drawer
            variant="temporary"
            open={props.mobileOpen}
            onClose={props.toggleDrawer}
            ModalProps={{ keepMounted: true }}
            PaperProps={{
              style: { backgroundColor: '#ffffff', color: '#000000' }
            }}
          >
            <Box sx={{ width: 240 }}>
              <Toolbar />
              <List>
                <Items
                  setContentsType={props.setContentsType}
                  setShowCards={props.setShowCards}
                  mobileOpen={props.mobileOpen}
                  toggleDrawer={props.toggleDrawer}
                />
              </List>
            </Box>
          </Drawer>
        </>
      ) : (
        <Box sx={{ width: 240 }}>
          <Toolbar />
          <List>
            <Items
              setContentsType={props.setContentsType}
              setShowCards={props.setShowCards}
              mobileOpen={props.mobileOpen}
              toggleDrawer={props.toggleDrawer}
            />
          </List>
        </Box>
      )}
    </>
  )
}

export default SideBar
```

`./components/Layout/NavBar/NavBar.tsx`
```
import { Dispatch, SetStateAction } from "react"
import Toolbar from "@mui/material/Toolbar"
import AppBar from "@mui/material/AppBar"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import Box from "@mui/material/Box"
import TitleAndLogo from "./parts/TitleAndLogo"
import Language from "./parts/Language"

type NavBarProps = {
  isEnglish: boolean
  setIsEnglish: Dispatch<SetStateAction<boolean>>
  isMobile: boolean
  toggleDrawer: () => void
}

const NavBar: React.FC<NavBarProps> = (props) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ position: "relative", zIndex: 1201 }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          {props.isMobile && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={props.toggleDrawer}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <TitleAndLogo />
          <Language isEnglish={props.isEnglish} setIsEnglish={props.setIsEnglish} />
          {props.isEnglish ? <p>English</p> : <p>日本語</p>}
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default NavBar
```

`./components/Layout/NavBar/parts/Language.tsx`
```
import { Dispatch, SetStateAction } from 'react'
import Button from '@mui/material/Button'
import language from '../../../../assets/language_icon_black.png'

type LanguageProps = {
  isEnglish: boolean
  setIsEnglish: Dispatch<SetStateAction<boolean>>
}

const Language: React.FC<LanguageProps> = (props) => {

  const languageClick = () => {
    console.log('languageClick is called')
    props.setIsEnglish(!props.isEnglish)
  }

  return (
    <>
      <Button
        color='primary'
        onClick={languageClick}
      >
        <img
          src={language}
          alt='language logo'
          height={'25px'}
          width={'25px'}
        />
      </Button>
    </>
  )
}

export default Language
```

`./components/Layout/NavBar/parts/TitleAndLogo.tsx`
```
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'

const TitleAndLogo: React.FC = () => {
  const titleClick = () => {
    console.log('isTitleClicked is called')
  }

  return (
    <>
      <Typography variant="subtitle1" sx={{ textAlign: "center", flexGrow: 1 }}>
        <Grid container justifyContent="center">
          <Button
            onClick={titleClick}
            sx={{ fontFamily: "sans-serif", fontWeight: "bold", fontSize: "1.5rem" }}
            color="inherit"
          >
            Jun's blog
          </Button>
        </Grid>
      </Typography>
    </>
  )
}

export default TitleAndLogo
```

`./components/Layout/CardArea/CardArea.tsx`
```
import Box from '@mui/material/Box'
import Profile from './parts/Profile'

const CardArea = () => {
  return (
    <Box>
      <Profile />
    </Box>
  )
}

export default CardArea
```

`./components/Layout/CardArea/parts/Profile.tsx`
```
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Sns from './Sns'
import profilePic from '../../../../assets/profile_20241028.png'

const Profile: React.FC = () => {
  return (
    <Card sx={{ background: "#ffffff", color: "#000000", p: 2 }}>
      <CardContent>
        <Box sx={{ textAlign: "center" }}>
          <img
            alt="profile"
            src={profilePic}
            style={{
              width: 150,
              height: 150,
              borderRadius: "50%",
            }}
          />
        </Box>
        <Typography variant="h5" component="div" sx={{ textAlign: "center", mt: 2 }}>
          Jumpei Ueno (Jun)
        </Typography>
        <Typography sx={{ textAlign: "center", mt: 1 }}>
          SRE, DevOps, Cloud Platform <br />
          Based in Thailand and Japan <br />
          <br />
        </Typography>
        <Sns />
        <Typography variant="body2" sx={{ textAlign: "center", mt: 1 }}>
          <br />
          "If you feel like the dumbest person in the room, you're in the right room."
        </Typography>
      </CardContent>
    </Card>
  )
}

export default Profile

```

`./components/Layout/CardArea/parts/Sns.tsx`
```
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import YouTube from '@mui/icons-material/YouTube'
import GitHub from '@mui/icons-material/GitHub'
import LinkedIn from '@mui/icons-material/LinkedIn'
import LeetCodeLogo from '../../../../assets/leetcode_black.png'
import X from '../../../../assets/x.png'
import Threads from '../../../../assets/threads.png'
import Note from '../../../../assets/note.png'

const snsLinks = [
  { icon: <GitHub />, link: "https://github.com/jun-uen0" },
  { icon: <LinkedIn />, link: "https://www.linkedin.com/in/jun-uen0" },
  { icon: <img src={LeetCodeLogo} alt="LeetCode" height="25px" />, link: "https://leetcode.com/u/jun-uen0" },
  // { icon: <YouTube />, link: "https://www.youtube.com/@JunTechJPN" },
  // { icon: <img src={Threads} alt="Threads" height="25px" />, link: "https://www.threads.net/@jun__ueno" },
  // { icon: <img src={X} alt="X" height="25px" />, link: "https://x.com/jun_uen0" },
  // { icon: <img src={Note} alt="Note" height="25px" />, link: "https://note.com/jun_uen0" },
]

const SNS = () => {
  return (
    <Grid container spacing={3} justifyContent="center" alignItems="center" style={{ textAlign: 'center' }}>
      {snsLinks.map((sns, index) => (
        <Grid item xs={3} sm={3} key={index}>
          <Button
            href={sns.link}
            target="_blank"
            color="secondary"
            style={{ minWidth: '50px' }}
          >
            {sns.icon}
          </Button>
        </Grid>
      ))}
    </Grid>
  )
}

export default SNS
```

`./components/Layout/ContentsArea/ContentsArea.tsx`
```
import { useEffect, useState } from "react"
import ContentCards from "./ContentCards/ContentCards"
import Content from "./Content/Content"
import { ContentsAreaProps } from "../../types"

const ContentsArea: React.FC<ContentsAreaProps> = (props) => {
  const contents = require(`../../../contents/${props.contentsType}.json`)

  const [contentNumber, setContentNumber] = useState(() => {
    if (props.contentsType === "about") {
      return 0
    }
    const savedContentNumber = localStorage.getItem('contentNumber')
    return JSON.parse(savedContentNumber as string) as number ?? -1
  })

  useEffect(() => {
    localStorage.setItem('contentNumber', JSON.stringify(contentNumber))
  }, [contentNumber])

  const validContentNumber = contentNumber >= 0 && contentNumber < contents.length ? contentNumber : 0
  const selectedContent = contents[validContentNumber]

  return (
    <>
      {props.contentsType === "about" || !props.showCards
        ? <Content
          setShowCards={props.setShowCards}
          content={selectedContent}
          isEnglish={props.isEnglish}
        />
        : <ContentCards
          setShowCards={props.setShowCards}
          setContentNumber={setContentNumber}
          contents={contents}
        />
      }
    </>
  )
}

export default ContentsArea
```

`./components/Layout/ContentsArea/Original/Math/parts/DecimalToOtherRadix.tsx`
```
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
```

`./components/Layout/ContentsArea/Original/Math/parts/OtherRadixToDecimal.tsx`
```
import React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

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
```

`./components/Layout/ContentsArea/Original/Math/RadixConversion.tsx`
```
import React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
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
```

`./components/Layout/ContentsArea/Content/Content.tsx`
```
import axios from "axios"
import { useEffect, useState } from "react"
import { ContentProps } from '../../../types'
import MarkdownContent from './parts/MarkdownContent'
import BackButton from './parts/BackButton'
import convertPath from './parts/convertPath'
import RadixConversion from '../Original/Math/RadixConversion'

const Content: React.FC<ContentProps> = (props) => {
  const defaultContent = {
    title: "Content Not Found",
    path: "",
    description: "The requested content does not exist."
  }

  const content = props.content || defaultContent

  const language = () => props.isEnglish ? 'jp' : 'en'
  const languageText = language() === 'jp' ? 'Japanese' : 'English'
  const noContent = (<h3>This page is not available in {languageText}.</h3>)

  const [read, setRead] = useState('')
  const [showNoContent, setShowNoContent] = useState(false)
  const url = content.path ? `https://raw.githubusercontent.com/jun-uen0/${convertPath(content.path)}_${language()}.md` : null

  useEffect(() => {
    if (!url) {
      setShowNoContent(true)
      return
    }

    axios.get(url)
      .then((res) => {
        setRead(res.data)
      })
      .catch(() => {
        setRead('')
        setTimeout(() => setShowNoContent(true), 1000)
      })
  }, [props.isEnglish])

  const showNormal = () => {
    return read === '' ? (showNoContent ? <div>{noContent}</div> : null) : <MarkdownContent read={read} />
  }

  const showOriginal = (item: string) => {
    return item === "math" ? <RadixConversion /> : <RadixConversion />
  }

  return (
    <div style={{
      backgroundColor: '#ffffff',
      minHeight: '100vh',
      padding: '30px',
    }}>
      <BackButton setShowCards={props.setShowCards} />
      {content.original
        ? showOriginal(content.original)
        : showNormal()
      }
    </div>
  )
}

export default Content

```

`./components/Layout/ContentsArea/Content/parts/MarkdownContent.tsx`
```
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { xonokai } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { MarkdownContentProps } from './../../../../types'

const MarkdownContent: React.FC<MarkdownContentProps> = (props) => {
  return (
    <div className="content">
      <ReactMarkdown
        children={props.read}
        components={{
          code({inline, className, children}) {
            const match = /language-(\w+)/.exec(className || '')
            // If text is inline, use the inline language
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, '')}
                style={xonokai as any}
                language={match[1]}
                PreTag="div"
              />
              // If text is not inline, use the markdown language
              ) : (
                <code className={className}>
              </code>
            )
          }
        }}
      />
    </div>
  )
}

export default MarkdownContent
```

`./components/Layout/ContentsArea/Content/parts/BackButton.tsx`
```
import { BackButtontProps } from '../../../../types'
const BackButton: React.FC<BackButtontProps> = (props) => {
  return (
    <button
      onClick={() => {
        props.setShowCards(true)
      }}
    >
      ← Back
    </button>
  )
}

export default BackButton
```

`./components/Layout/ContentsArea/Content/parts/convertPath.ts`
```
const convertPath = (path: string) => {
  const splitedPath = (path).split('/')
  const fileName = splitedPath[splitedPath.length -1] // file name is as directory name + '_' + language
  splitedPath.splice(1,0,'main') // Add branch name after repogitory name
  const pathWithBranch =  splitedPath.join('/') // Put together them again
  return pathWithBranch + "/" + fileName
}

export default convertPath
```

`./components/Layout/ContentsArea/ContentCards/parts/ContentCard.tsx`
```
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Typography from '@mui/material/Typography'
import { ContentCardProps } from '../../../../types'

const ContentCard: React.FC<ContentCardProps> = (props) => {
  return (
    <>
      <Card sx={{ background: "#ffffff", color: "#000000", p: 2 , mb: 3}}>
        <CardContent>
          <Typography variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography sx={{ mt: 1 }}>{props.description}</Typography>
        </CardContent>
        <CardActions>
          <Button
            sx={{ background: "#00a2ff", color: "#ffffff", mt: 1 }}
            onClick={() => {
              props.setShowCards(false)
              props.setContentNumber(props.idx)
            }}
          >
            Read
          </Button>
        </CardActions>
      </Card>
    </>
  )
}

export default ContentCard
```

`./components/Layout/ContentsArea/ContentCards/ContentCards.tsx`
```
import Box from '@mui/material/Box'
import ContentCard from './parts/ContentCard'
import { contentType, ContentCardsProps } from '../../../types'

const ContentCards: React.FC<ContentCardsProps> = (props) => {
  return (
    <>
      <Box>
        {props.contents.map((content: contentType, idx: number) => {
          return (
            <ContentCard
              key={idx}
              idx={idx}
              title={content.title}
              description={content.description}
              setShowCards={props.setShowCards}
              setContentNumber={props.setContentNumber}
            />
          )
        })}
      </Box>
    </>
  )
}

export default ContentCards
```

`./components/Layout/Layout.tsx`
```
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { ThemeProvider } from "@mui/material/styles"
import useMediaQuery from "@mui/material/useMediaQuery"
import NavBar from "./NavBar/NavBar"
import SideBar from "./SideBar/SideBar"
import CardArea from "./CardArea/CardArea"
import ContentsArea from "./ContentsArea/ContentsArea"
import { contents } from "../types"
import { theme } from "../theme"

const Layout: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 768px)')
  const { categoryName } = useParams<{ categoryName: string }>()

  const [isEnglish, setIsEnglish] = useState(() => {
    return JSON.parse(localStorage.getItem("isEnglish") as string) ?? true
  })

  const [contentsType, setContentsType] = useState<contents>(() => {
    return JSON.parse(localStorage.getItem("contentsType") as string) ?? "algorithms"
  })
  useEffect(() => {
    if (categoryName) {
      setContentsType(categoryName as contents)
    }
  }, [categoryName])
  const [showCards, setShowCards] = useState(() => {
    return JSON.parse(localStorage.getItem("showCards") as string) ?? true
  })

  const [mobileOpen, setMobileOpen] = useState(false)
  const toggleDrawer = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <div className="header">
          <NavBar
            isEnglish={isEnglish}
            setIsEnglish={setIsEnglish}
            isMobile={isMobile}
            toggleDrawer={toggleDrawer}
          />
        </div>
        <div className="container">
          {!isMobile && (
            <div className="sideBar">
              <SideBar
                setContentsType={setContentsType}
                setShowCards={setShowCards}
                mobileOpen={mobileOpen}
                toggleDrawer={toggleDrawer}
              />
            </div>
          )}
          {isMobile && (
            <SideBar
              setContentsType={setContentsType}
              setShowCards={setShowCards}
              mobileOpen={mobileOpen}
              toggleDrawer={toggleDrawer}
            />
          )}
          <div className="contentsArea">
            <ContentsArea
              setShowCards={setShowCards}
              showCards={showCards}
              isEnglish={isEnglish}
              contentsType={contentsType}
            />
          </div>
          <div className="cardArea">
            <CardArea />
          </div>
        </div>
      </ThemeProvider>
    </div>
  )
}
export default Layout
```

`./components/types.ts`
```
import { Dispatch, SetStateAction } from "react"

export type contents = 'about' | 'algorithms' | 'leetcode' | 'aws' | 'others'

export interface contentType {
  title: string
  path: string
  description: string
  original?: string
}

export interface MarkdownContentProps {
  read: string
}

export interface ContentProps {
  setShowCards: Dispatch<SetStateAction<boolean>>
  content: contentType
  isEnglish: boolean
}

export interface BackButtontProps {
  setShowCards: Dispatch<SetStateAction<boolean>>
}

export interface ContentCardProps {
  setShowCards: Dispatch<SetStateAction<boolean>>
  setContentNumber: Dispatch<SetStateAction<number>>
  idx: number
  title: string
  description: string
}

export interface ContentCardsProps {
  setShowCards: Dispatch<SetStateAction<boolean>>
  setContentNumber: Dispatch<SetStateAction<number>>
  contents: Array<contentType>
}

export interface ContentsAreaProps {
  setShowCards: Dispatch<SetStateAction<boolean>>
  showCards: boolean
  isEnglish: boolean
  contentsType: contents
}

export interface SideBarProps {
  setContentsType: Dispatch<SetStateAction<contents>>
  setShowCards: Dispatch<SetStateAction<boolean>>
  mobileOpen: boolean
  toggleDrawer: () => void
}
```

`./components/theme.ts`
```
import { createTheme } from '@mui/material/styles'
import { styled } from '@mui/system'
import Button from '@mui/material/Button'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff'
    },
    secondary: {
      main: '#091c33'
    },
  },
  typography: {
    button: {
      textTransform: 'none'
    },
  },
})

export const Back = styled('div')({
  background: "#ffffff",
  color: '#000000',
})

export const LearnMoreButton = styled(Button)({
  background: "#00a2ff",
  color: '#ffffff',
  margin: '10px',
})

export const Text = styled('p')({
  color: '#ffffff',
})

```

`./react-app-env.d.ts`
```
/// <reference types="react-scripts" />

```