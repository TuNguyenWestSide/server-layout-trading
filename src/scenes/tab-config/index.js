import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TabView, TabPanel } from 'primereact/tabview';

import OrderParent from '../tab-config/components/order_parent';
import RS_RC from '../tab-config/components/rs_rc';
import TakeProfit from '../tab-config/components/take_profit';

class TabConfig extends Component {
    render() {
        const styleWidth = {
            height: '200px'
        }
        return (
            <div className="container-fluid">
                <div className="row mt-5 mx-2 justify-content-between">
                    <div className="card col-3" style={styleWidth}>List Symbol</div>
                    <div className="card col-8">
                        <TabView>
                            <TabPanel header="ORDER_PARENT">
                                <OrderParent></OrderParent>
                            </TabPanel>
                            <TabPanel header="RS_RC">
                                <RS_RC></RS_RC>
                            </TabPanel>
                            <TabPanel header="TAKE_PROFIT">
                                <TakeProfit></TakeProfit>
                            </TabPanel>
                        </TabView>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, {

})(TabConfig)