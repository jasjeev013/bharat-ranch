import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import { Link, useNavigate } from 'react-router-dom';
import { isLoggedIn, userDetails } from '../state/atoms/atoms';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import Cookies from 'js-cookie';
// import PersonAdd from '@mui/icons-material/PersonAdd';
// import Settings from '@mui/icons-material/Settings';
// import Logout from '@mui/icons-material/Logout';

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isLoggedin = useRecoilValue(isLoggedIn);
  const logsOut = useResetRecoilState(isLoggedIn);
  const userLogOut = useResetRecoilState(userDetails)
  const userDetail = useRecoilValue(userDetails);
  const navigate = useNavigate();
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    if (isLoggedin) setAnchorEl(event.currentTarget);
    else navigate("/account")
  };


  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logsOut();
    userLogOut();
    Cookies.remove('token');
    navigate('/')

  }



  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
  
            {isLoggedin && <Avatar sx={{ width: 32, height: 32 }}> {userDetail.image !== null ? <img src={userDetail.image} height={30} width={30} alt="" /> : userDetail.name.charAt(0).toUpperCase()} </Avatar>}
            {!isLoggedin && <Avatar sx={{ width: 32, height: 32 }}> <i className="fa-solid fa-user"></i></Avatar>}
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {userDetail.role === 'buyer' ?
          <Link to="/customer"> <MenuItem onClick={handleClose}>
            <Avatar /> My account(Customer)
          </MenuItem></Link> :
          <Link to="/farmer"><MenuItem onClick={handleClose}>
            <Avatar /> My account(Farmer)
          </MenuItem></Link>}


        <Divider />
        {/* <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>*/}
        <MenuItem onClick={() => {
          handleLogout()
          handleClose()
        }}>
          <ListItemIcon>
            <i className="fa-solid fa-sign-out"></i>
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
