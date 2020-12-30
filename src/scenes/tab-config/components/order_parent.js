import React, { Component } from 'react';
import { connect } from 'react-redux';

// thuộc tính cho main order recovery

class OrderParent extends Component {
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
                        <span>TYPE_OF_LAUNCH</span>
                    </div>
                    <div className="col-7">
                        <select value={this.state.valueTypeOfLaunch} onChange={(e) => this.setState({ valueTypeOfLaunch: e.target.value })} className="form-control mb-1">
                            <option value="1">1</option>
                            <option value="2">2</option>
                        </select>
                    </div>
                </div>

                {/* DRAW_DOWN_PIP */}
                <div className="row">
                    <div className="col-4">DRAW_DOWN_PIP</div>
                    <div className="col-7">
                        <input type="text" className="form-control mb-1"></input>
                    </div>
                </div>

                {/* DRAW_DOWN_MONEY */}
                <div className="row">
                    <div className="col-4">DRAW_DOWN_MONEY</div>
                    <div className="col-7">
                        <input type="text" className="form-control mb-1"></input>
                    </div>
                </div>

                {/* AUTO_TAKE_PROFIT */}
                <div className="row">
                    <div className="col-4">
                        <span>AUTO_TAKE_PROFIT</span>
                    </div>
                    <div className="col-7">
                        <select value={this.state.valueTypeOfLaunch} onChange={(e) => this.setState({ valueTypeOfLaunch: e.target.value })} className="form-control mb-1">
                            <option value="0">false</option>
                            <option value="1">true</option>
                        </select>
                    </div>
                </div>

                {/* AUTO_TAKE_PROFIT_IN_POINT */}
                <div className="row">
                    <div className="col-4">
                        <span>AUTO_TAKE_PROFIT_IN_POINT</span>
                    </div>
                    <div className="col-7">
                        <select value={this.state.valueTypeOfLaunch} onChange={(e) => this.setState({ valueTypeOfLaunch: e.target.value })} className="form-control mb-1">
                            <option value="0">false</option>
                            <option value="1">true</option>
                        </select>
                    </div>
                </div>  

                {/* AUTO_TAKE_PROFIT_IN_MONEY */}
                <div className="row">
                    <div className="col-4">
                        <span>AUTO_TAKE_PROFIT_IN_MONEY</span>
                    </div>
                    <div className="col-7">
                        <select value={this.state.valueTypeOfLaunch} onChange={(e) => this.setState({ valueTypeOfLaunch: e.target.value })} className="form-control mb-1">
                            <option value="0">false</option>
                            <option value="1">true</option>
                        </select>
                    </div>
                </div>

                {/* AUTO_BUY_SELL_WHEN_EMPTY */}
                <div className="row">
                    <div className="col-4">
                        <span>AUTO_BUY_SELL_WHEN_EMPTY</span>
                    </div>
                    <div className="col-7">
                        <select value={this.state.valueTypeOfLaunch} onChange={(e) => this.setState({ valueTypeOfLaunch: e.target.value })} className="form-control mb-1">
                            <option value="0">false</option>
                            <option value="1">true</option>
                        </select>
                    </div>
                </div>
                
                {/* AUTO_BUY_SELL_SYMBOL */}
                <div className="row">
                    <div className="col-4">
                        <span>AUTO_BUY_SELL_SYMBOL</span>
                    </div>
                    <div className="col-7">
                        <select value={this.state.valueTypeOfLaunch} onChange={(e) => this.setState({ valueTypeOfLaunch: e.target.value })} className="form-control mb-1">
                            <option value="0">false</option>
                            <option value="1">true</option>
                        </select>
                    </div>
                </div>

                {/* AUTO_BUY_SELL_VOLUME */}
                <div className="row">
                    <div className="col-4">
                        <span>AUTO_BUY_SELL_VOLUME</span>
                    </div>
                    <div className="col-7">
                        <select value={this.state.valueTypeOfLaunch} onChange={(e) => this.setState({ valueTypeOfLaunch: e.target.value })} className="form-control mb-1">
                            <option value="0">false</option>
                            <option value="1">true</option>
                        </select>
                    </div>
                </div>
            </section>
        )
    }
}

export default connect(null, {

})(OrderParent)