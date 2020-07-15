import React from "react";
import "./App.css";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
import ToDoItem from "./components/ToDoItem";
import { v4 as uuidv4 } from "uuid";
import EditModal from "./components/EditModal";
// import { render } from 'react-dom';

class App extends React.Component {
  state = {
    inputValue: "",
    items: [],
    editedItem: null,
  };

  onAddItem = () => {
    const { inputValue, items } = this.state;
    if(!inputValue.trim()) {
      alert('please enter text');
    }else if(inputValue. trim().length < 3){
      alert('please enter at least 3 chars')      
    }else{
      this.setState({
        items: [...items, { name: inputValue, id: uuidv4() }],
        inputValue: "",
      });
    } 
  };

  onDeleteItem = (id) => {
    const { items } = this.state;
    const newItems = items.filter((item) => item.id !== id);
    this.setState({
      items: newItems,
    });
  };

  onEditItem = (item) => {
    this.setState({ editedItem: item });
  };

  onUpdateItem = (id, name) => {
    const { items } = this.state;
    items.map((item) => {
      if (item.id === id) {
        item.name = name;
      }
    });
  };

  onEditModalClose = () => {
    this.setState({editedItem: null})
  };

  onInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  renderItem = (elem, index) => {
    return (
      <ToDoItem
        key={elem.id + "_" + index}
        item={elem}
        onDelete={this.onDeleteItem}
        onEdit={this.onEditItem}
      />
    );
  };
  onKeyDown = (event) => {
    if (event.keyCode === 13) {
      this.onAddItem();
    }
  };

  inputProps = {
    onKeyDown: this.onKeyDown,
  };

  render() {
    const { items, editedItem } = this.state;
    return (
      <div className='d1'>
        <div className='button1'>
        <TextField
          value={this.state.inputValue}
          onChange={this.onInputChange}
          id="standard-error-helper-text"
          label="To do"
          variant="outlined"
          inputProps={this.inputProps}
        />
        <Button className='b1' onClick={this.onAddItem} variant="contained" color="secondary">
          Add
        </Button>
        </div>
        <div>{items.map(this.renderItem)}</div>
        {editedItem && (
          <EditModal
            item={editedItem}
            onSave={this.onUpdateItem}
            onClose={this.onEditModalClose}
          />
        )}
      </div>
    );
  }
}



export default App;
