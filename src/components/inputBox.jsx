import React from 'react';
import {FormGroup, Input, Label} from "reactstrap";

const InputBox = (props) => {
    const {type, name, value, onChange, label} = props;
    return (
        <FormGroup>
            <Label>{label}</Label>
            <Input type={type}
                   name={name}
                   id={name}
                   onChange={onChange}
                   value={value}
            />
        </FormGroup>
    );
};

export default InputBox;