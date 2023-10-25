import { Grid, TextField, Paper, Button } from '@mui/material';
import React from 'react'

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { item: { title: "" } };
        this.add = props.add;
        this.isComposing = false; // IME 상태를 나타내는 플래그
    }

    onInputChage = (e) => {
        const thisItem = this.state.item;
        thisItem.title = e.target.value;
        this.setState({ item: thisItem });
        console.log(thisItem);

    }
    onCompositionStart = () => {
        this.isComposing = true;
    }

    onCompositionEnd = () => {
        this.isComposing = false;
    }

    onButtonClick = () => {
        this.add(this.state.item);
        this.setState({ item: { title: "" } });
    }

    enterKeyEventHandler = (e) => {
        if (e.key === 'Enter' && !this.isComposing) {
            this.onButtonClick();
        }
    }

    render() {
        return (
            <Paper style={{ margin: 16, padding: 16 }}>
                <Grid container>
                    <Grid xs={11} md={11} item style={{ paddingRight: 16 }}>
                        <TextField placeholder="Add Todo here" fullWidth
                            value={this.state.item.title}
                            onChange={this.onInputChage}
                            onKeyDown={this.enterKeyEventHandler}
                            onCompositionStart={this.onCompositionStart}
                            onCompositionEnd={this.onCompositionEnd} />
                    </Grid>
                    <Grid xs={1} md={1} item>
                        <Button fullWidth color="secondary" variant="outlined" onClick={this.onButtonClick}>
                            +
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        );
    }
}

export default AddTodo;