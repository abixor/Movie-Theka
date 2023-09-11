import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
// import Button from '@mui/material/Button';
// import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';

const Popup = (props) => {
  const { title, year, type, img, setshow, setSingledata, show } = props

  window.onload = function () {
    document.getElementById('close').onclick = function () {
      this.parentNode.parentNode.remove();
      return false;
    };

  };

  const handleCancel = () => {

    setshow(false)
    setSingledata('')

  }

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"

    >
      <div className="card mb-3" style={{ display: show ? "block" : "none" }}>
        <button type="button" class="btn-close text-end" aria-label="Close" onClick={handleCancel}></button>
        <div className="row g-0 p-4">
          <div className="col-md-4 text-center">
            <img src={img} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title"><b>{title}</b></h5>
              <p className="card-text">
                1. “May the Force be with you.” -Star Wars, 1977 <br />

                2. “There's no place like home.” -The Wizard of Oz, 1939<br />

                3. “I'm the king of the world!” -Titanic, 1997<br />

                4. “Carpe diem. Seize the day, boys. Make your lives extraordinary.” -Dead Poets Society, 1989<br />

                5. “Elementary, my dear Watson.” -The Adventures of Sherlock Holmes, 1939<br />

                6. “It's alive! It's alive!” -Frankenstein, 1931<br />

                7. “My mama always said life was like a box of chocolates. You never know what you're gonna get.” -Forrest Gump, 1994<br />

                8. “I'll be back.” -The Terminator, 1984<br />

                9. “You're gonna need a bigger boat.” -Jaws, 1975<br />

                10. “Here's looking at you, kid.” -Casablanca, 1942<br />




              </p>
              <p className="card-text">
                <small className="text-muted">{year}<br />{type}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );




  return (
    <Drawer
      anchor={'bottom'}
      open={show}
      onClose={handleCancel}
    >
      {list('bottom')}
    </Drawer>


  )
}

export default Popup;
