import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';

const SampleComponent = () => {
  const data = useSelector((state) => state.sample.data);
  const dispatch = useDispatch();

  const setData = () => {
    dispatch({ type: 'SET_DATA', payload: ['item1', 'item2'] });
  };

  return (
    <div>
      <Typography variant="h4" component="h1" gutterBottom>
        Sample Component
      </Typography>
      <Button variant="contained" color="primary" onClick={setData}>
        Set Data
      </Button>
      <List>
        {data.map((item, index) => (
          <ListItem key={index}>{item}</ListItem>
        ))}
      </List>
    </div>
  );
};

export default SampleComponent;
