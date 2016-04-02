import React, { Component, PropTypes } from 'react'
import InfoPanelRow from './InfoPanelRow'
import _ from 'lodash';
import numeral from 'numeral';

class InfoPanel extends Component {

    componentWillUpdate(nextProps) {
        console.log('InfoPanel will update');
        console.log(nextProps);
    }

    render() {
        let styles;
        if (this.props.isFetching) {
            styles = {opacity: 0.4};
        }
        if (_.isEmpty(this.props.geoJson)) {
            return null;
        }
        const { properties } = this.props.geoJson.features[0];
        const options = this.props.options;

        return (
            <div style={styles}>
                <InfoPanelRow title="Stat Level: " content={options.level} />
                <InfoPanelRow title="Population: " content={numeral(properties.population).format('0,0')} />
                <InfoPanelRow title="Med House Income: " content={numeral(properties.income).format('$ 0,0')} />
                <InfoPanelRow title="Med Home Value: " content={numeral(properties.median_home_value).format('$ 0,0')} />
                <InfoPanelRow title="Med Gross Rent: " content={numeral(properties.median_gross_rent).format('$ 0,0')} />
                <InfoPanelRow title="Poverty Rate: " content={numeral((parseInt(properties.poverty) / parseInt(properties.population)).toString()).format('0.0%')} />
            </div>
        )
    }
}

InfoPanel.propTypes = {
    options: PropTypes.object.isRequired,
    geoJson: PropTypes.object.isRequired,
    isFetching: PropTypes.bool.isRequired
};

export default InfoPanel;