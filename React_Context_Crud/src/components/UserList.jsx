import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { Button, ListGroup, ListGroupItem } from "reactstrap";
import { GlobalContext } from "../context/GlobalState";

export const UserList = () => {
    const { users, removeUser } = useContext(GlobalContext);
    const navigate = useNavigate();

    return (
        <ListGroup className="p-5">
            {users.length > 0 ? (
                <>
                    {users.map(user => (
                        <ListGroupItem className="d-flex" style={{ justifyContent: 'space-between', alignItems: 'center' }} key={user.id}>
                            <strong>{user.name}</strong>
                            <div className="">
                                <Button color="warning" outline onClick={() => navigate(`/edit/${user.id}`)} >Edit</Button>
                                <Button color="danger" outline className="ms-3" onClick={() => removeUser(user.id)}>Delete</Button>
                            </div>
                        </ListGroupItem>
                    ))}
                </>
            ) : (
                <h4 className="text-center">No Users</h4>
            )}
        </ListGroup>
    )
}
