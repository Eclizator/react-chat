import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

<<<<<<< HEAD
=======

>>>>>>> 1e2babf40ceab07bc4695fad0c7c1ca9b5224da2
const styles = theme => ({
  appBar: {
    position: 'fixed',
    width: `calc(100% - 320px)`,
<<<<<<< HEAD
  },
});

const ChatHeader = ({ classes }) => (
  <AppBar color="primary" className={classes.appBar}>
    <Toolbar>
      <Typography variant="title" color="inherit" noWrap>
        DogeCodes React Chat
      </Typography>
    </Toolbar>
  </AppBar>
);

export default withStyles(styles)(ChatHeader);
=======
    
  },
  
});

const ChatHeader = ({ classes }) => (
        <AppBar color="primary" className={classes.appBar}>
          <Toolbar>
            <Typography variant="title" color="inherit" noWrap>
              DogeCodes React Chat
            </Typography>
          </Toolbar>
        </AppBar>

);


export default withStyles(styles) (ChatHeader);
>>>>>>> 1e2babf40ceab07bc4695fad0c7c1ca9b5224da2
