import React, { Component, PropTypes } from 'react'
import InfoPanelRow from './InfoPanelRow'
import _ from 'lodash';
import numeral from 'numeral';

class InfoPanel extends Component {


    render() {
        let styles;
        if (this.props.isFetching) {
            styles = {opacity: 0.4};
        }
        if (_.isEmpty(this.props.result.data)) {
            return null;
        }
        return (
            <div style={styles}>
                <InfoPanelRow title="Address: " content={this.props.result.fullAddress} />
                <InfoPanelRow title="Stat Level: " content={this.props.result.level} />
                <InfoPanelRow title="Population: " content={numeral(this.props.result.data.population).format('0,0')} />
                <InfoPanelRow title="Med House Income: " content={numeral(this.props.result.data.income).format('$ 0,0')} />
                <InfoPanelRow title="Med Home Value: " content={numeral(this.props.result.data.median_home_value).format('$ 0,0')} />
                <InfoPanelRow title="Med Gross Rent: " content={numeral(this.props.result.data.median_gross_rent).format('$ 0,0')} />
                <InfoPanelRow title="Poverty Rate: " content={
                    numeral(this.props.result.data.poverty / this.props.result.data.population).format('0.0%')} />
            </div>
        )
    }
}

InfoPanel.propTypes = {
    result: PropTypes.object.isRequired,
    isFetching: PropTypes.bool.isRequired
};

export default InfoPanel;