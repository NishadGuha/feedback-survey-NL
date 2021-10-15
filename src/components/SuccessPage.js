import React from 'react'
import '../App.scss';
import { useHistory } from 'react-router-dom';

function SuccessPage() {

    const history = useHistory();

    const redoSurvey = () => {
        history.push("/");
    }

    return (
        <div class="body">
            <h3>Verstuurd!</h3>
            <i id="successTick" class="fas fa-check-circle"></i>
            <i id="redo" class="fas fa-undo-alt" onClick={redoSurvey}></i>
        </div>
    )
}

export default SuccessPage
