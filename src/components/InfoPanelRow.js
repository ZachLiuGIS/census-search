import React, { Component, PropTypes } from 'react'

class InfoPanelRow extends Component {


    render() {
        return (
            <div className="row info-panel-row">
                <div className="col-sm-5">
                    {this.props.title}
                </div>
                <div className="col-sm-7">
                    {this.props.content}
                </div>
            </div>
        )
    }
}

export default InfoPanelRow;