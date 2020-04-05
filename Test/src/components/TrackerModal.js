import React, { Component } from 'react';
import styled from 'styled-components';
import { withLastLocation } from 'react-router-last-location';
import { connect } from "react-redux";
import { addTodo, updateTodo } from '../actions';

const Modal = styled.div`
    position: fixed;
    z-index: 1;
    padding-top: 100px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4);
`;

const ModalContent = styled.div`
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 50%;
`;

const FormContainer = styled.div`
    padding: 6px;
    margin: 50px;
    background-color: white;
`;

export const ActionButton = styled.button`
    background-color: #4CAF50;
    color: white;
    padding: 16px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    outline: none;
    float: right;
    border-radius: 5%;
    width: ${props => props.size === 'small' ? '10%' : '30%'};
    opacity: 0.9;
    &:hover: {
        opacity: 1
    }
`;

const FormInput = styled.input`
    width: 95%;
    padding: 15px;
    margin: 10px 0 22px 0;
    display: block;
    outline: none;
    border: none;
    background: #f1f1f1;
`;

const FormSelect = styled.select`
    margin: 10px 0 22px 0;
    height: 20px;
    outline: none;
    display: block;
    border: none;
`;


const Close = styled.span`
    color: #aaaaaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
    &:hover,
    &:focus: {
        color: #000;
        text-decoration: none;
        cursor: pointer;
    }
`;

class TrackerModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
            description: '',
            inputValue: 'income',
            amount: null
        }
    }

    componentDidMount = () => {
        const { match, dataList } = this.props;
        const { params: { sNo = '' } } = match;
        if (sNo) {
            const currentData = dataList.filter(d => d.sNo === sNo);
            if (currentData.length) {
                const {
                    date,
                    description,
                    inputValue,
                    amount
                } = currentData[0];
                this.setState({
                    date,
                    description,
                    inputValue,
                    amount,
                    isUpdate: true
                })
            }
        }
        document.addEventListener('keyup', this.handleKeyUp);
    }

    componentWillUnmount() {
        document.removeEventListener('keyup', this.handleKeyUp);
    }

    /**
   * Trigger when click the escape button
   * @param {*} e
   */
    handleKeyUp = (e) => {
        if (e.keyCode === 27) this.closeModal();
    }

    onChangeAction = (e) => {
        e && e.preventDefault();
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    onClickAction = (e) => {
        e && e.preventDefault();
        const { match, dataList } = this.props;
        const { params: { sNo = '' } } = match;
        const { date, description, inputValue, amount, isUpdate } = this.state;
        this.props[isUpdate? 'updateData' : 'addData']({
            date,
            description,
            inputValue,
            amount,
            sNo
        }, sNo);
        this.closeModal();
    }

    closeModal = () => {
        this.props.history.push('/');
    }

    render() {
        const { date, description, inputValue, amount } = this.state;
        return (
            <Modal>
                <ModalContent>
                    <Close onClick={this.closeModal}>&times;</Close>
                    <FormContainer>
                        <label for="date"><b>Date</b></label>
                        <FormInput value={date} type="date" placeholder="Choose Date" name="date" required onChange={this.onChangeAction} />
                        <label for="description"><b>Description</b></label>
                        <FormInput value={description} type="text" placeholder="Add Some Description" name="description" required onChange={this.onChangeAction} />
                        <label for="inc"><b>Income / Expense</b></label>
                        <FormSelect value={inputValue} id="cars" name="inputValue" onChange={this.onChangeAction} form="carform" required>
                            <option value="Income">Income</option>
                            <option value="Expense">Expense</option>
                        </FormSelect>
                        <label for="amt"><b>Amount</b></label>
                        <FormInput value={amount} type="number" placeholder="Amount in Rs" name="amount" onChange={this.onChangeAction} />
                        <ActionButton type="submit" onClick={this.onClickAction}>Register</ActionButton>
                    </FormContainer>
                </ModalContent>
            </Modal>
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    addData: value => dispatch(addTodo(value)),
    updateData:  (value, sNo) => dispatch(updateTodo(value, sNo)),
});

const mapStateToProps = state => {
    return {
        dataList: state.todos
    }
}


export default withLastLocation(connect(
    mapStateToProps,
    mapDispatchToProps
)(TrackerModal));