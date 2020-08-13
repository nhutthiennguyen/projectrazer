import React from 'react';
import { Tabs, Tab } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';



export default function Navigation() {
  const [selectedTab, setSelectedTab] = React.useState(0);
  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  }
  const useStyles = makeStyles({
    root: {
      textTransform: 'uppercase',
      fontFamily: 'RazerF5,helvetica neue,Arial,noto sans,sans-seri',
      fontWeight: '300',
      fontSize: '1rem',
      lineHeight: '1.2',
      whiteSpace: 'nowrap',
      letterSpacing: '0'
    }
  })
  const classes = useStyles();
  return (<div className="navigation">
    <Tabs
      value={selectedTab}
      variant="scrollable"
      scrollButtons="on"
      onChange={handleChange}

    >
      <Tab className={classes.root} label="Home" component={Link} to="/" />
      <Tab className={classes.root} label="Products" component={Link} to="/products" />
      <Tab className={classes.root} label="About Us" />
      <Tab className={classes.root} label="Privacy Policy" />
      <Tab className={classes.root} label="Environment" />
    </Tabs>

  </div>);

}

