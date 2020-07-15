import React from "react";
import { Button } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { TextField } from "@material-ui/core";

class EditModal extends React.Component {
  state = {
    inputValue: this.props.item.name,
  };

  handleSave = () => {
    const {
      onSave,
      item: { id },
    } = this.props;
    const {inputValue} = this.state;
    if (onSave) {
      onSave(id, inputValue);
      this.onClose();
    }
  };

  onChange = (event) => {
    this.setState({inputValue: event.target.value})
  };

  onClose = () => {
    const {onClose} = this.props;
    if (onClose) {
      onClose();
    }
  };

  render() {
    const { inputValue } = this.state;
    return (
      <Dialog
        open={true}
        onClose={this.onClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Edit</DialogTitle>
        <DialogContent>
        <TextField
              autoFocus
              margin="dense"
              onChange={this.onChange}
              value={inputValue}
              id="name"
              label=""
              type="email"
              fullWidth
            />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.onClose} color="primary">
            Cancel
          </Button>
          <Button onClick={this.handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default EditModal;
