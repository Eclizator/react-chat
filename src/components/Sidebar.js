import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames'
import Avatar from '@material-ui/core/Avatar';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import ListItemText from '@material-ui/core/ListItemText';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';


import RestoreIcon from '@material-ui/icons/Restore';
import ExploreIcon from '@material-ui/icons/Explore';
import AddIcon from '@material-ui/icons/Add';

import titleInitials from "../utils/title-initials";

const styles = theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.background.default,
  },

  drawerPaper: {
    position: 'relative',
    height: '100%',
    width: 320,  
  },
  drawerHeader: {
    ...theme.mixins.toolbar,
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
  },
  chatsList: {
    height: 615,
    overflowY: 'scroll',
    overflow: "hidden",
  },
  newChatButton:{
    position: 'absolute',
    left: 'auto',
    right: 20,
    bottom: 60,
  },
  
});
const Sidebar = ({ classes, chats }) => (

  <Drawer
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <TextField
              fullWidth
              margin="normal"
              placeholder="Search chats..."
            />
          </div>
          <Divider />
         
          <List className={classes.chatsList}>
            {chats.map((chat, index) => (
              <ListItem key={index} button>
                <Avatar>{titleInitials(chat.title)}</Avatar>
                <ListItemText primary={chat.title}/>
              </ListItem>
            ))}
          </List>
          
          <Button
            variant="fab"
            color="primary"
            className={classes.newChatButton}
          >
            <AddIcon />
          </Button>
          <BottomNavigation showLabels>
            <BottomNavigationAction label="My Chats" icon={<RestoreIcon />} />
            <BottomNavigationAction label="Explore" icon={<ExploreIcon />} />
          </BottomNavigation>
        </Drawer>

);

export default withStyles(styles)(Sidebar);

