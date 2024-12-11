// src/components/Sidebar.js
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Drawer, List, ListItem, ListItemText } from '@mui/material';

// function Sidebar() {
//   return (
//     <Drawer
//       sx={{
//         width: 240,
//         flexShrink: 0,
//         '& .MuiDrawer-paper': {
//           width: 240,
//           boxSizing: 'border-box',
//         },
//       }}
//       variant="permanent"
//       anchor="left"
//     >
//       <List>
//         <ListItem button component={Link} to="/">
//           <ListItemText primary="Home" />
//         </ListItem>
//         <ListItem button component={Link} to="/calendar">
//           <ListItemText primary="Calendar" />
//         </ListItem>
//         <ListItem button component={Link} to="/settings">
//           <ListItemText primary="Settings" />
//         </ListItem>
//       </List>
//     </Drawer>
//   );
// }

// export default Sidebar;

import React from 'react';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';

function Sidebar() {
  return (
    <Drawer
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <List>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/calendar">
          <ListItemText primary="Calendar" />
        </ListItem>
        <ListItem button component={Link} to="/event/1">
          <ListItemText primary="Event Details" />
        </ListItem>
        <ListItem button component={Link} to="/profile">
          <ListItemText primary="Profile" />
        </ListItem>
      </List>
    </Drawer>
  );
}

export default Sidebar;
