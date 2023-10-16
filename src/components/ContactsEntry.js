import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { COLORS, TEXTSTYLES, CONSTS } from '../theme';

const ContactsEntry = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, you can send the data to your server or update the state as needed.
    console.log(formData);
  };

  return (
    <Box sx={{border: CONSTS.borderGeneral, padding: CONSTS.medium, borderRadius: CONSTS.borderRadBase}}>
    <Typography variant="h6" component="h6" sx={{color: COLORS.primary}}>
  Contacts Entry
</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          variant="outlined"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          size='small'
          margin="dense"
        />
        <TextField
          label="Email"
          variant="outlined"
          name="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          size='small'
          margin="dense"
        />
        <TextField
          label="Phone"
          variant="outlined"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          fullWidth
          size='small'
          margin="dense"
        />
        <TextField
          label="Address"
          variant="outlined"
          name="address"
          value={formData.address}
          onChange={handleChange}
          fullWidth
          size='small'
          margin="normal"
        />
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default ContactsEntry;
