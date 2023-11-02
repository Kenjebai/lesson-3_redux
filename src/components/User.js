import React from "react";
import { Table } from "react-bootstrap";

function User({username}){

    return(
        <div>
          <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Username</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{username.id}</td>
            <td>{username.name}</td>
            <td>{username.username}</td>
            <td>{username.email}</td>
          </tr>
          <tr>
            <td>{username.id}</td>
            <td>{username.name}</td>
            <td>{username.username}</td>
            <td>{username.email}</td>
          </tr>
          <tr>
            <td>{username.id}</td>
            <td colSpan={2}>{username.name}</td>
            <td>{username.email}</td>
          </tr>
        </tbody>
      </Table>
        </div>
      )
}

export default User