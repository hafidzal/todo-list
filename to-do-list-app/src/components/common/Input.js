import React from "react";
import { FormGroup, Input } from 'reactstrap';

const InputTodo = (itemValue,change) => (
    <>
    {console.log('item value: ', itemValue)}
    <FormGroup>
        <Input 
            type="text" 
            name="todoItem" 
            id="todoItem"
            placeholder="What you want to do?"
            value={itemValue}
            onChange={change} />
    </FormGroup>
    </>
);

export default InputTodo;
