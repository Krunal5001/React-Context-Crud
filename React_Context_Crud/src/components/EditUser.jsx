import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { GlobalContext } from "../context/GlobalState";

const EditUser = () => {
    const { editUser, users } = useContext(GlobalContext);
    const [selectedUser, setSelectedUser] = useState({
        id: '',
        name: ''
    })
    const navigate = useNavigate();
    const currentUserId = useParams();

    useEffect(() => {
        const userId = currentUserId?.id;
        const selectedUser = users.find(user => user.id === userId);
        setSelectedUser(selectedUser);
    }, [currentUserId, users]);

    const handleChange = (e) => {
        setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        editUser(selectedUser);
        navigate("/");
    }

    return (
        <Form onSubmit={handleSubmit} className='p-5'>
            <FormGroup>
                <Label>Name</Label>
                <Input type="text" name='name' value={selectedUser?.name} placeholder="Enter user" required onChange={handleChange} />
            </FormGroup>
            <Button type="submit" color="primary" outline>Edit Name</Button>
            <Button outline className="ms-3" onClick={() => navigate("/")}>Cancel</Button>
        </Form>
    )
}

export default EditUser;
