import React from 'react';
import { ListItem, ListItemText, InputBase, Checkbox, IconButton, ListItemSecondaryAction } from "@mui/material";
import { DeleteOutline } from '@mui/icons-material';

class Todo extends React.Component {
    // 생성자를 이용해 매개변수를 받음
    // super를 이용해 props 오브젝트를 초기화, this.state를 item 변수와 props.item으로 초기화, state는 리액트가 관리하는 오브젝트, 변경할 수 있는 변수를 state 오브젝트에서 관리함, 자바스크립트 내에서 변경한 변수의 값을 HTML에 다시 렌더링하기 위함
    constructor(props) {
        super(props);
        this.state = { item: props.item, readOnly: true };
        this.delete = props.delete;
        this.update = props.update;
    }
    deleteEventHandler = () => {
        this.delete(this.state.item);
    }

    offReadOnlyMode = () => {
        console.log("Event!", this.state.readOnly)
        this.setState({ readOnly: false }, () => {
            console.log("ReadOnly? ", this.state.readOnly)
        });
    }

    enterKeyEventHandler = (e) => {
        if (e.key === "Enter") {
            this.setState({ readOnly: true })
            this.update(this.state.item);
        }
    }

    editEventhandler = (e) => {
        const thisItem = this.state.item;
        thisItem.title = e.target.value;
        this.setState({ item: thisItem });
    }

    checkboxEventHandler = (e) => {
        const thisItem = this.state.item;
        thisItem.done = !thisItem.done;
        this.setState({ item: thisItem });
        this.update(this.state.item);
    }

    render() {
        const item = this.state.item;
        return (
            <ListItem>
                <Checkbox checked={item.done} onChange={this.checkboxEventHandler} />
                <ListItemText>
                    <InputBase
                        inputProps={{ "aria-label": "naked", readOnly: this.state.readOnly, }}
                        onClick={this.offReadOnlyMode}
                        onKeyDown={this.enterKeyEventHandler}
                        onChange={this.editEventhandler}
                        type='text'
                        id={item.id}
                        name={item.id}
                        value={item.title}
                        multiline={true}
                        fullWidth={true}
                    />
                </ListItemText>
                <ListItemSecondaryAction>
                    <IconButton aria-label="Delete Todo" onClick={this.deleteEventHandler}>
                        <DeleteOutline />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem >
        );
    }
}

export default Todo;