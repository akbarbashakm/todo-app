import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import Header from './Header';
import Button from './Button';
import Input from './Input';

const AddTodo = ({ dispatch }) => {
    const [inputValue, setValue] = useState('');
    const onInputChange = (e) => {
        e && e.preventDefault();
        setValue(e.target.value);
    }

    return (
        <Header headerName={'ADD ITEM'}>
            <form onSubmit={e => {
                e && e.preventDefault()
                if (!inputValue.trim()) {
                    return
                }
                dispatch(addTodo(inputValue))
                setValue('');
            }}>
                <Input onChangeAction={onInputChange} inputValue={inputValue}/>
                <Button type="submit" buttonName={'Add Todo'} />
            </form>
        </Header>
    )
}

export default connect()(AddTodo)
