import React from 'react';
<<<<<<< HEAD
import { withStyles } from '@material-ui/core/styles'
import ChatMessageList from './ChatMessageList';
import MessageInput from './MessageInput';

const styles = theme => ({
=======
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames'
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import titleInitials from "../utils/title-initials";


const styles = theme =>({
   messagesWrapper: { 
    height: '100%',
    width: '100%',
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: '120px',
  },
  messageInputWrapper: {
    position: 'fixed',
    left: 'auto',
    right: 0,
    bottom: 0,
    width: `calc(100% - 600px)`,
    padding: theme.spacing.unit * 3,
  },
  messageInput: {
    padding: theme.spacing.unit * 2,
  },
  messageWrapper: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 100,
    
  },
  messageWrappperFromMe: {
    justifyContent: 'flex-end',
  },
  message: {
    maxWidth: '70%',
    minWidth: '10%',
    padding: theme.spacing.unit,
    marginLeft: theme.spacing.unit * 2,
  },
  messageFromMe: {
    marginRight: theme.spacing.unit * 2,
    backgroundColor: '#e6dcff'
  },
>>>>>>> 1e2babf40ceab07bc4695fad0c7c1ca9b5224da2
  chatLayout: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '64px',
<<<<<<< HEAD
    height: '100%',
    overflow: 'hidden',
  },
});

const Chat = ({ classes, messages }) => (
  <main className={classes.chatLayout}>
    <ChatMessageList messages={messages} />
    <MessageInput />
  </main>
);

=======
    height: "600px",
    overflow: 'hidden',
    overflowY: 'scroll',
  },
});

class Chat extends React.Component {  
    componentDidMount() {
       this.scrollDownHistory();
    }
    componentDidUpdate(){
      this.scrollDownHistory();
    }
  
    scrollDownHistory(){
      const messageWrapper = this.refs.messageWrapper;
  
      if (messageWrapper) {
        messageWrapper.scrollTop = messageWrapper.scrollHeight;
      }
    };

render(){ 
  const { classes, messages} = this.props;

  return (
  <main className={classes.chatLayout} ref="messageWrapper">
          <div className={classes.messagesWrapper}>
            {messages && messages.map((message, index) => {
              const isMessageFromMe = message.sender === 'me';

              const userAvatar = (
                <Avatar>
                  {titleInitials(message.sender)}
                </Avatar>
              );

              return (
                
                <div key={index} className={classnames(
                  classes.messageWrapper,
                  isMessageFromMe && classes.messageWrappperFromMe
                )}>
                  {!isMessageFromMe && userAvatar}
                  <Paper className={classnames(
                    classes.message,
                    isMessageFromMe && classes.messageFromMe
                  )}>
                    <Typography variant="caption">
                      {message.sender}
                    </Typography>
                    <Typography variant="body1">
                      {message.content}
                    </Typography>
                  </Paper>
                  {isMessageFromMe && userAvatar}
                </div>
              );
            })}
          </div>
          <div className={classes.messageInputWrapper}>
            <Paper className={classes.messageInput} elevation={6}>
              <Input fullWidth placeholder="Type your message…"/>
            </Paper>
          </div>
   </main>
       );    
    }
}
>>>>>>> 1e2babf40ceab07bc4695fad0c7c1ca9b5224da2
export default withStyles(styles)(Chat);
