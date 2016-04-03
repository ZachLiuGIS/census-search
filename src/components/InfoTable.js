import React, { Component, PropTypes } from 'react'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import _ from 'lodash';
import numeral from 'numeral';

class InfoTable extends Component {

    componentWillUpdate(nextProps) {
        console.log('InfoTable will update');
        console.log(nextProps);
    }

    render() {
        return (
            <div>
                <BootstrapTable data={this.props.data} striped={true} hover={true} condensed={true}>
                    <TableHeaderColumn dataField="name" isKey={true} dataAlign="center" dataSort={true}>Variable</TableHeaderColumn>
                    <TableHeaderColumn dataField="value" dataAlign="center" >Value</TableHeaderColumn>
                </BootstrapTable>
            </div>
        )
    }
}

InfoTable.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default InfoTable;