import React, { Component, PropTypes } from 'react'

class SearchBox extends Component {

    onSearchSubmit(e) {
        e.preventDefault();
        let street = this.tbxStreet.value;
        let city = this.tbxCity.value;
        let state = this.tbxState.value;
        let level = this.sltLevel.value;
        let options = {
            street, city, state, level
        };
        this.props.onSearch(options);
    }

    render() {
        return (
            <form className="form-horizontal search-box" onSubmit={this.onSearchSubmit.bind(this)}>
                    <div className="form-group">
                        <label className="control-label col-sm-2">Address:</label>
                        <div className="col-sm-10">
                            <input ref={node => this.tbxStreet = node} type="text" className="form-control"
                                   defaultValue="4400 Ashford Dunwoody Rd"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-2">City:</label>
                        <div className="col-sm-10">
                            <input ref={node => this.tbxCity = node} type="text" className="form-control"
                                   defaultValue="Atlanta"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-2">State:</label>
                        <div className="col-sm-10">
                            <input ref={node => this.tbxState = node} type="text" className="form-control"
                                   defaultValue="GA"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-2">Level:</label>
                        <div className="col-sm-10 select-control">
                            <select ref={node => this.sltLevel = node}>
                                <option value="tract">Tract</option>
                                <option value="state">State</option>
                                <option value="county">County</option>
                                <option value="blockGroup">Block Group</option>
                                <option value="place">Incorporated Place</option>
                            </select>
                        </div>
                    </div>

                    <div className="">
                        <button type="submit" className="btn btn-default">Search
                        </button>
                    </div>
            </form>
        )
    }
}

SearchBox.propTypes = {
    onSearch: PropTypes.func.isRequired
};

export default SearchBox;