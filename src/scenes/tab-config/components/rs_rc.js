import React, { Component } from 'react';
import { connect } from 'react-redux';

// thuộc tính cho main order recovery

class RS_RC extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valueTypeOfLaunch: '',
        };
    }
    render() {
        return (
            <section>
            <div className="row">
                <div className="col-4">
                    <span>RECOVERY_ZONE_IN_POINT</span>
                </div>
                <div className="col-7">
                    <select value={this.state.valueZoneInPoint} onChange={(e) => this.setState({ valueZoneInPoint: e.target.value })} className="form-control mb-1">
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>
                </div>
            </div>

            {/* RECOVERY_ZONE_IN_POINT */}
            <div className="row">
                <div className="col-4">
                    <span>RECOVERY_ZONE_IN_POINT</span>
                </div>
                <div className="col-7">
                    <select value={this.state.valueZoneInPoint} onChange={(e) => this.setState({ valueZoneInPoint: e.target.value })} className="form-control mb-1">
                        <option value="0">buy bellow and sell above</option>
                        <option value="1">buy above and sell bellow</option>
                        <option value="2">no zone</option>
                    </select>
                </div>
            </div>
            
            {/* ALLOW_TYPE_RSRC */}
            <div className="row">
                <div className="col-4">
                    <span>ALLOW_TYPE_RSRC</span>
                </div>
                <div className="col-7">
                    <select value={this.state.valueZoneInPoint} onChange={(e) => this.setState({ valueZoneInPoint: e.target.value })} className="form-control mb-1">
                        <option value="0">buy and sell</option>
                        <option value="1">only buy</option>
                        <option value="2">only sell</option>
                    </select>
                </div>
            </div>

            {/* MINIMAL_FIRST_RSRC */}
            <div className="row">
                <div className="col-4">
                    <span>MINIMAL_FIRST_RSRC</span>
                </div>
                <div className="col-7">
                   <input type="text" className="form-control mb-1"></input>
                </div>
            </div>

            {/* MULTIPLIER_RSRC */}
            <div className="row">
                <div className="col-4">
                    <span>MULTIPLIER_RSRC</span>
                </div>
                <div className="col-7">
                   <input type="text" className="form-control mb-1"></input>
                </div>
            </div>

            {/* MINIMAL_STEP_RSRC */}
            <div className="row">
                <div className="col-4">
                    <span>MINIMAL_STEP_RSRC</span>
                </div>
                <div className="col-7">
                   <input type="text" className="form-control mb-1"></input>
                </div>
            </div>
            
            {/* MULTIPLIER_STEP_RSRC */}
            <div className="row">
                <div className="col-4">
                    <span>MULTIPLIER_STEP_RSRC</span>
                </div>
                <div className="col-7">
                   <input type="text" className="form-control mb-1"></input>
                </div>
            </div>
        </section>
        )
    }
}

export default connect(null, {

})(RS_RC)