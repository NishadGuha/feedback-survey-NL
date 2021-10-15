import * as React from 'react';
import '../App.scss';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

function ToggleButtons() {

    const [alignment, setAlignment] = React.useState('good');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    return (
        <div class="col" id="emojiButtons">
          <ToggleButtonGroup
            class="toggleButton"
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
          >
            <ToggleButton value="bad"><i class="far fa-frown"></i></ToggleButton>
            <ToggleButton value="ok"><i class="far fa-meh"></i></ToggleButton>
            <ToggleButton value="good"><i class="far fa-smile-beam"></i></ToggleButton>
          </ToggleButtonGroup>
        </div>
    )
}

export default ToggleButtons
