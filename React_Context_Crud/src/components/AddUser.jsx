import React, { useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { v4 as uuidv4 } from 'uuid';
import { GlobalContext } from "../context/GlobalState";

const AddUser = () => {
    const [name, setName] = useState('');
    const { addUser } = useContext(GlobalContext);
    const navigate = useNavigate();

    const handleSubmit = () => {
        const newUser = {
            id: uuidv4(),
            name
        }
        addUser(newUser);
        navigate("/");
    }

    return (
        <Form onSubmit={handleSubmit} className='p-5'>
            <FormGroup>
                <Label>Name</Label>
                <Input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter user" required />
            </FormGroup>
            <Button type="submit" color="primary" outline>Edit Name</Button>
            <Button outline className="ms-3" onClick={() => navigate("/")}>Cancel</Button>
        </Form>
    )
}

export default AddUser;