import React, { useContext } from "react";
import { Form } from "react-bootstrap";
import { AuthContext } from "../contexts/AuthContext";

export interface IAuthProps {
  username: string;
  password: string;
}

const Authentication = () => {
  const { username, setUsername, password, setPassword } =
    useContext(AuthContext);

  return (
    <div>
      <form className="d-flex">
          <Form.Control
            className="me-2"
            type="text"
            size="sm"
            value={username}
            placeholder="Cascade Username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <Form.Control
            type="password"
            size="sm"
            value={password}
            placeholder="Cascade Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
      </form>
    </div>
  );
};

export default Authentication;
