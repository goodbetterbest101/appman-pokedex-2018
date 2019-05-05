import React, { Component } from 'react'
import Card from '../Card'
import { Button } from 'react-bootstrap';

import '../../styles/listCards.css'

class ListCards extends Component {
    render() {
        return (
            <div className="listContainer">
                {this.props.myList.map( (data, index) => {
                    return data
                })}
            </div>
                )
            }
        }
        
        export default ListCards
