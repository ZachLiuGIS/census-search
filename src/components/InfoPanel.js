import React, { Component, PropTypes } from 'react'
import InfoPanelRow from './InfoPanelRow'
import _ from 'lodash';

class InfoPanel extends Component {


    render() {
        if (this.props.isFetching) {
            return <div>Loading...</div>
        }
        if (_.isEmpty(this.props.result.data)) {
            return null;
        }
        return (
            <div>
                <InfoPanelRow title="Address: " content={this.props.result.fullAddress} />
                <InfoPanelRow title="Stat Level: " content={this.props.result.level} />
                <InfoPanelRow title="Population: " content={this.props.result.data.population} />
                <InfoPanelRow title="Income: " content={this.props.result.data.income} />
            </div>
        )
    }
}

InfoPanel.propTypes = {
    result: PropTypes.object.isRequired,
    isFetching: PropTypes.bool.isRequired
};

export default InfoPanel;