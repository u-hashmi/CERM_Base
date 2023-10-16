import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';

import Analysis from './Analysis';
import Contacts from './Contacts';
import Dashboard from './Dashboard';
import Database from './Database';
import Messages from './Messages';
import Performance from './Performance';
import Security from './Security';
import Settings from './Settings';
import Tasks from './Tasks';

const screenComponents = {
  "Analysis": Analysis,
  "Contacts": Contacts,
  "Dashboard": Dashboard,
  "Database": Database,
  "Messages": Messages,
  "Performance": Performance,
  "Security": Security,
  "Settings": Settings,
  "Tasks": Tasks
};

const MainScreen = ({screenName}) => {
  const ScreenComponent = screenComponents[screenName];

  return (
    <Box
    component='main'
      sx={{ width: '100%', height: '100%' }}
    >
    <ScreenComponent  /> 
    </Box>
  );
};

export default MainScreen;