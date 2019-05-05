import React, { Component } from 'react'
import _ from 'lodash'
import StatusBar from '../statusBar'
import Card from '../Card'
import '../../styles/modal.css'

import { Modal, Button } from 'react-bootstrap';


class ModalSearch extends Component {

    handleInput = (event) => {
        console.log(event.target.value)
    }

    render() {
        return (
            <div className="modalContainer">
                <Modal size='lg' show={this.props.openAdd} onHide={this.props.closeAddCard}>
                    <div>
                        <input type="text" placeholder="Search.." onChange={_.debounce( event => this.props.searchCards(event.target.value, event.target.value), 2000, { leading: true })}/>
                    </div>
                    <Modal.Body>
                        {this.props.pokemonCards.map( (data, index) => {
                            return <Card addListCard={this.props.addListCard} num={index} imageUrl={data.imageUrl} name={data.name}/>
                        })}
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}

export default ModalSearch