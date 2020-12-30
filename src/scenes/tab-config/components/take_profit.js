import React, { Component } from 'react';
import { connect } from 'react-redux';

// thuộc tính cho main order recovery

class TakeProfit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valueTakeProFit: '',
        };
    }
    render() {
        return (
            <section>

                {/* MIN_PART_TO_CLOSE */}
                <div className="row">
                    <div className="col-4">
                        <span>MIN_PART_TO_CLOSE</span>
                    </div>
                    <div className="col-7">
                        <input type="text" className="form-control mb-1"></input>
                    </div>
                </div>

                {/* PROFIT_IN_MONEY */}
                <div className="row">
                    <div className="col-4">
                        <span>PROFIT_IN_MONEY</span>
                    </div>
                    <div className="col-7">
                        <input type="text" className="form-control mb-1"></input>
                    </div>
                </div>

                {/* PROFIT_IN_PIP */}
                <div className="row">
                    <div className="col-4">
                        <span>PROFIT_IN_PIP</span>
                    </div>
                    <div className="col-7">
                        <input type="text" className="form-control mb-1"></input>
                    </div>
                </div>

                {/* MODE_TAKE_PROFIT */}
                <div className="row">
                    <div className="col-4">
                        <span>MODE_TAKE_PROFIT</span>
                    </div>
                    <div className="col-7">
                        <select value={this.state.valueTakeProFit} onChange={(e) => this.setState({ valueTakeProFit: e.target.value })} className="form-control mb-1">
                            <option value="0">cân bằng</option>
                            <option value="1">ưu tiên lợi nhuận</option>
                            <option value="2">ưu tiên giảm lỗ</option>
                        </select>
                    </div>
                </div>

            </section>
        )
    }
}

export default connect(null, {

})(TakeProfit)