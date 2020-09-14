import React from 'react';
import { InputGroup, InputGroupText, InputGroupAddon, Input } from 'reactstrap';

const Example = (props) => {
    return (
        <div style={{marginBottom:"20px"}}>
            <InputGroup>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText >Tìm kiếm</InputGroupText>
                </InputGroupAddon>
                <Input onChange={event => props.setSearch(event.target.value)} />
            </InputGroup>
        </div>
    );
};

export default Example;