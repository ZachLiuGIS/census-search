import React, { Component, PropTypes } from 'react'

class InfoPanelRow extends Component {


    render() {
        return (
            <div className="row info-panel-row">
                <div className="col-sm-4">
                    {this.props.title}
                </div>
                <div className="col-sm-8">
                    {this.props.content}
                </div>
            </div>
        )
    }
}

InfoPanelRow.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
};

export default InfoPanelRow;