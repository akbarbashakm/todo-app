import React from 'react';
import styled from 'styled-components';
import { Route, Switch, Link } from 'react-router-dom';
import TrackerModal from './TrackerModal';
import { connect } from "react-redux";

const Table = styled.table`
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
    tr:nth-child(even) {
        background-color: #dddddd;
    }
`;

const TD = styled.td`
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
`;

const TH = styled.th`
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
`;

const TrackerTable = ({
    dataList = []
}) => {
    return (
        <div>
            <Table>
                <tr>
                    <TH>S.No</TH>
                    <TH>Date</TH>
                    <TH>Description</TH>
                    <TH>Income / Expense</TH>
                    <TH>Amount</TH>
                    <TH>Summary</TH>
                </tr>
                {
                    dataList.length ? dataList.map(({
                        sNo,
                        date,
                        description,
                        inputValue,
                        amount
                    }, index) => {
                        return (
                            <tr key={index}>
                                <TD>
                                    <Link
                                        to={{
                                            pathname: `/wallet/${sNo}`
                                        }}
                                    >
                                        {sNo}
                                    </Link>
                                </TD>
                                <TD>{date}</TD>
                                <TD>{description}</TD>
                                <TD>{inputValue}</TD>
                                <TD>{amount}</TD>
                                {
                                    inputValue === 'Income' ? 
                                        <TD>{`Credited ${amount} to my wallet`}</TD> :
                                        <TD>{`Debitted ${amount} to my wallet`}</TD>
                                }
                            </tr>
                        )
                    }) : <tr>
                        <TD colSpan="6" style={{'textAlign': 'center'}}>{'No Records Available'}</TD>
                    </tr>
                }
            </Table>
            <Switch>
                <Route path="/add-wallet" exact={true} component={TrackerModal} />
                <Route path="/wallet/:sNo" exact={true} component={TrackerModal} />
            </Switch>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        dataList: state.todos
    }
}

export default connect(
    mapStateToProps,
    null
)(TrackerTable);