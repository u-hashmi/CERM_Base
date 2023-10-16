import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';

import { COLORS, TEXTSTYLES, CONSTS } from '../theme';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: COLORS.primary,
  backgroundColor: COLORS.fadedWhite,
  border: CONSTS.borderGeneral, 
  borderRadius: CONSTS.borderRadBase,
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


const headerHeight = 66;

const HeaderBar = ({ title }) => {
  return (
    <Box sx={{ width: '100%', height: '100%' }}>
      <AppBar
      position="static"
      sx={{backgroundColor: COLORS.white, borderBottom: '1px solid rgba(0, 0, 0, 0.12)', height: headerHeight, justifyContent: 'center'}}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ ...TEXTSTYLES.headingText, color: COLORS.primary, flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            {title}
          </Typography>
           <IconButton
              size="large"
              aria-label="show 17 new notifications"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon fontSize='inherit' sx={{color: COLORS.primary}} />
              </Badge>
            </IconButton>
           <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default HeaderBar;
