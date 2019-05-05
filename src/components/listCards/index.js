import React, { Component } from 'react'
import Card from '../Card'
import { Button } from 'react-bootstrap';

import '../../styles/listCards.css'

class ListCards extends Component {
    render() {
        return (
            <div className="listContainer">
                {/* <Container>
                    <Row>
                        <Col>1 of 2</Col>
                        <Col>2 of 2</Col>
                    </Row>
                </Container> */}
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
                )
            }
        }
        
        export default ListCards
