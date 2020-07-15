import React from "react";
import { Button } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

class ToDoItem extends React.Component {
  state = {
    showDeleteModal: false,
  };

  onDeleteClick = () => {
    this.setState({ showDeleteModal: true });
  };

  onEditClick = () => {
    const { onEdit, item } = this.props;
    if (onEdit) {
      onEdit(item);
    }
  };

  onClose = () => {
    this.setState({ showDeleteModal: false });
  };

  handleDelete = () => {
    const {
      onDelete,
      item: { id },
    } = this.props;
    if (onDelete) {
      onDelete(id);
      this.onClose();
    }
  };

  render() {
    const {
      item: { name },
    } = this.props;
    const { showDeleteModal } = this.state;
    return (
      <>
        <div className="todo">
          <span>{name}</span>
          <div className="but2">
            <Button
              variant="contained"
              color="secondary"
              onClick={this.onEditClick}
            >
              Edit
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={this.onDeleteClick}
            >
              Remove
            </Button>
          </div>
        </div>
        <Dialog open={showDeleteModal} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Delete</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure you want to delete this {name}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.onClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleDelete} color="primary">
              Yes
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }
}

export default ToDoItem;
