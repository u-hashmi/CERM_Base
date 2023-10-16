import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';

// Component Imports
import ContactsTable from '../components/ContactsTable';
import ContactsEntry from '../components/ContactsEntry';
import { COLORS, TEXTSTYLES, CONSTS } from '../theme';

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color={COLORS.white} gutterBottom>
        Under Construction
      </Typography>
      <Typography variant="h5" component="div" color={COLORS.white}>
        Contacts Screen will be available soon!
      </Typography>
    </CardContent>
  </React.Fragment>
);

const Contacts = () => {
  return (
    <Box component="main" sx={{ flexGrow: 1, width: '100%', bgcolor: 'background.default', p: 3 }}>
      <Grid container spacing={1}>
        <Grid item xs={9}>
          <ContactsEntry />
        </Grid>
        <Grid item xs={3}>
          <Card
          variant="outlined"
          sx={{height: '100%', backgroundColor: COLORS.primary}}
          >{card}</Card>
        </Grid>
      </Grid>
      <ContactsTable />
    </Box>
  );
};

export default Contacts;
