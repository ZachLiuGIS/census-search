import React, { Component, PropTypes } from 'react';
import InfoTable from './InfoTable';
import InfoPanelRow from './InfoPanelRow';
import _ from 'lodash';
import numeral from 'numeral';

class InfoPanel extends Component {

    componentWillUpdate(nextProps) {
        console.log('InfoPanel will update');
        console.log(nextProps);
    }

    render() {
        let styles;
        if (this.props.error) {
            return <div>{this.props.error}</div>
        }
        if (this.props.isFetching) {
            styles = {opacity: 0.4};
        }
        if (_.isEmpty(this.props.geoJson)) {
            return null;
        }
        const { properties } = this.props.geoJson.features[0];
        const options = this.props.options;

        const data = [
            {
                name: "Population",
                value: numeral(properties.population).format('0,0')
            },
            {
                name: "Med House Income",
                value: numeral(properties.income).format('$ 0,0')
            },
            {
                name: "Med Home Value",
                value: numeral(properties.median_home_value).format('$ 0,0')
            },
            {
                name: "Med Gross Rent",
                value: numeral(properties.median_gross_rent).format('$ 0,0')
            },
            {
                name: "Poverty Rate",
                value: numeral((parseInt(properties.poverty) / parseInt(properties.population)).toString()).format('0.0%')
            }
        ];

        return (
            <div style={styles}>
                <InfoPanelRow title="Stat Level:" content={options.level}/>
                <InfoTable data={data}/>
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