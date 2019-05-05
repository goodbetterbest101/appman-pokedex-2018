import React, { Component } from 'react'
import '../../styles/statusBar.css'

class StatusBar extends Component {
    render() {
        return (
            <div className="container">
                <div className="detail">
                    <span>Name</span>
                    <div className="outer">
                        <div className="inner" style={{ width: '50px' }}></div>
                    </div>
                </div>

            </div>
        )
    }
}

export default StatusBar
