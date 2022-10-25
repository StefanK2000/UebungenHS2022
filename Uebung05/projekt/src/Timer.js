import { clear } from "@testing-library/user-event/dist/clear";
import React from "react";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid'

var timer = ''

class Timer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {time: timer, render: true};
        this.buttonClicked = this.buttonClicked.bind(this);
        this.setTimer = this.setTimer.bind(this)
        this.updateTime = this.updateTime.bind(this);
    }

    setTimer(event) {
        timer = event.target.value;
    }

    buttonClicked(event) {
        if (timer % 1 === 0){
                clearInterval(clear);
                this.setState({time: timer, render:false});
                clear = setInterval(this.updateTime, 1000);
        }
    }

    updateTime() {
        if (this.state.time > 1) {
            this.setState({time: this.state.time - 1});
        }
        else {
            this.setState({time: "FERTIG", render: true});
        }
    }

    render() {
        return (<>
            {this.state.render&&
            <Grid container style={{margin: 10}}>
                <TextField label="Zahl eingeben" type="number" step="1" variant="outlined" onChange={this.setTimer} />
            </Grid>
            }
            <Grid container style={{marginTop:10}}>
                <Button variant="contained" margin="10" onClick={this.buttonClicked}>Start</Button>
            </Grid>
            <Grid container style={{marginTop:10}}>
                {this.state.time}
            </Grid>
        </>);
    }
}
export default Timer;