import Button from '@material-ui/core/Button'
import PermIdentity from '@material-ui/icons/PermIdentity'

const profileClick = () => {
  console.log('profileClick is called')
}

const ProfilePic: React.FC = () => {
  return (
    <>
      <Button
        color='inherit'
        onClick={profileClick}
      >
        <PermIdentity/>
      </Button>
    </>
  )
}

export default ProfilePic