import React from 'react';
import Modal from 'react-modal';

const TodoModal = (props) => (
    <Modal
        isOpen={props.isOpen}
        contentLabel="test"
    >
        {props.todos.map((todo, index) => 
            (<p key={index}>{todo}</p>)
        )}
        <button type="button" className="btn btn-danger" onClick={() => props.openModal(false)}>Succcess</button>
    </Modal>
);

export default TodoModal;