import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import profilePic from '../../../../assets/profile_20241028.png'
import Sns from './Sns'

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
        {/* <Typography sx={{ textAlign: "center", mt: 1 }}>
          <br />
          #AWS #Python #Node.js
        </Typography> */}
        <Typography variant="body2" sx={{ textAlign: "center", mt: 1 }}>
          <br />
          "If you feel like the dumbest person in the room, you're in the right room."
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Profile;
