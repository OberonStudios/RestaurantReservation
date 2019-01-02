import React, { Component } from 'react';

class ConfimationModal extends Component {
    render() {
        return (
            <div class={`modal ${this.props.modalOpen ? `is-active` : ''}`}>
                <div class="modal-background"></div>
                <div class="modal-card">
                    <div className="modal-card-body reservation-confirmation-modal">
                        <h3>Hello</h3>
                        <button className="button" onClick={() => this.props.toggleModal(false)}>Open Modal</button>
                    </div>
                </div>
                <button class="modal-close is-large" aria-label="close" onClick={() => this.props.toggleModal(false)}></button>
            </div>
        );
    }
}

export default ConfimationModal;