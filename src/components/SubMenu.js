import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export default function SubMenu() {
  const useStyles = makeStyles((theme) => ({
    root: {
      background: 'black',
      position: 'absolute',
      top: 60, left: 0,
      backgroundColor: theme.palette.background.paper,
      display: 'flex',
      height: 'auto',
      zIndex: 1
    },

  }))
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Home" component={Link} to="/" />
        <Tab label="Products" component={Link} to="/products" />
        <Tab label="About Us" component={Link} to="/About" />
        <Tab label="Privacy Policy" />
        <Tab label="Environment" />
      </Tabs>

    </div>
  );
}