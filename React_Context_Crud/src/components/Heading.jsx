import React from 'react';
import { useNavigate } from "react-router-dom";
import { Button, Navbar, NavbarBrand } from "reactstrap";

export const Heading = () => {

    const navigate = useNavigate();

    return (
        <Navbar color="secondary" dark>
            <NavbarBrand>Crud</NavbarBrand>
            <Button color="info" outline onClick={() => navigate('/add')}>Add User</Button>
        </Navbar>
    )
}
