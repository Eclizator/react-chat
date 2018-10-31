import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ChatListItem from './ChatListItem';

const styles = theme => ({
  chatsList: {
    height: '100%',
    overflowY: 'scroll',
  },
  noChats: {
    textAlign: 'center',
  }
});

const ChatList = ({ classes, chats, activeChat, disabled }) => (
  <List className={classes.chatsList}>
    {chats && chats.length ? (
      chats.map((chat) => (
        <ChatListItem
          disabled = {disabled}
          key={chat._id}
          active={activeChat && activeChat._id === chat._id}
          chatId={chat._id}
          {...chat}
        />
      ))
    ) : (
      <Typography variant="subheading" className={classes.noChats}>
        There is no chats yet...
      </Typography>
    )}
  </List>
);

export default withStyles(styles)(ChatList);
