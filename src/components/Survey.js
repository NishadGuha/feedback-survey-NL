import React from 'react';
import Button from '@mui/material/Button';
import '../App.scss';
import TextField from '@mui/material/TextField';
import ToggleButtons from './ToggleButtons';
import { useHistory } from 'react-router-dom';

function Survey() {

    const history = useHistory();

    const submitSurveyHandler = () => {
        history.push("/success");
    }

    return (
        <div class="body">
        <h3 class="col" id="header">Hoe heb je deze applicatie ervaren?</h3>
        <ToggleButtons />
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
        <Button type="submit" id="ModalButton" variant="text" onClick={submitSurveyHandler}>Verstuur</Button>
      </div>
    )
}

export default Survey
