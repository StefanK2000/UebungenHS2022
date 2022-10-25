import Timer from "./Timer";
import React from 'react';
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";


function App() {
    return(<>
            <AppBar position="sticky" color="primary">
                <Toolbar>
                    <Typography variant="h5">Counter</Typography>
                </Toolbar>
            </AppBar>
            <Timer />
            </>);
}
    export default App;