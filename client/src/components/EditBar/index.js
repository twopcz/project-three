import React from 'react';
import Button from 'react-bootstrap/Button';

function EditBar(props) {
  return (
    // <ButtonGroup aria-label="edit bar">
    <div>
      <Button
        hidden={props.hideAddButton}
        className='mx-1 mb-3'
        variant='outline-success'
        onClick={() => props.add()}
      >
        Add
      </Button>
      <Button
        hidden={props.noneSelected}
        className='mx-1 mb-3'
        variant='outline-warning'
        onClick={() => props.edit()}
      >
        Edit
      </Button>
      <Button
        hidden={props.noneSelected}
        className='mx-1 mb-3'
        variant='outline-danger'
        onClick={() => props.delete()}
      >
        Delete
      </Button>
    </div>
    // </ButtonGroup>
  );
}

export default EditBar;
