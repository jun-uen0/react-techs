import { useNavigate } from 'react-router-dom'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Button from '@mui/material/Button'
import InfoIcon from '@mui/icons-material/Info'
import { SideBarProps } from "../../../types"

const categories = [
  { name: 'About Me', path: 'about', icon: <InfoIcon /> },
  { name: 'Algorithms', path: 'algorithms', icon: <InfoIcon /> },
  { name: 'LeetCode', path: 'leetcode', icon: <InfoIcon /> },
  { name: 'AWS', path: 'aws', icon: <InfoIcon /> },
]

const Items: React.FC<SideBarProps> = () => {
  const navigate = useNavigate()

  return (
    <>
      {categories.map((category) => (
        <ListItem key={category.path}>
          <Button
            onClick={() => navigate(`/category/${category.path}`)}
          >
            <ListItemText primary={category.name} />
          </Button>
        </ListItem>
      ))}
    </>
  )
}

export default Items