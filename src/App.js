import * as React from 'react';
import Button from '@mui/material/Button';
import './App.scss';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import TextField from '@mui/material/TextField';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Modal.setAppElement('#yourAppElement');

function App() {

  const [alignment, setAlignment] = React.useState('good');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  
  return (
      <div class="body">
        <h3 class="col" id="header">Hoe heb je dit applicatie ervaren?</h3>
        <div class="col" id="emojiButtons">
          <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
          >
            <ToggleButton value="good"><i class="far fa-smile-beam"></i></ToggleButton>
            <ToggleButton value="ok"><i class="far fa-meh"></i></ToggleButton>
            <ToggleButton value="bad"><i class="far fa-frown"></i></ToggleButton>
          </ToggleButtonGroup>
        </div>
        <div class="col" id="formDiv">
          <form>
            <label>
              Plaats commentaar:
              <br/>
              <br/>
              <TextField id="comment" type="text"/>
            </label>
          </form>
        </div>
        <Button type="submit" id="ModalButton" variant="text">Verstuur</Button>
      </div>
  );
}

export default App;
