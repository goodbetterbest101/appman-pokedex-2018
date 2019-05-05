import React, { Component } from 'react'
import StatusBar from '../statusBar'
import Card from '../Card'
import '../../styles/modal.css'

import { Modal, Button } from 'react-bootstrap';


class ModalSearch extends Component {
    render() {
        return (
            <div className="modalContainer">
                <Modal size='lg' show={this.props.openAdd} onHide={this.props.closeAddCard}>
                {/* <Modal.Header> */}
                    <div>
                        <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
                    </div>
                    {/* </Modal.Header> */}
                    <Modal.Body>
                        {this.props.pokemonCards.map( (data, index) => {
                            // console.log(index)
                            return <Card addListCard={this.props.addListCard} index={index} imageUrl={data.imageUrl} name={data.name}/>
                        })}
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}

export default ModalSearch