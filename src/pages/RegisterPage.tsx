import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../redux/hooks";
import { addUser } from "../redux/slices/usersSlice";

export default function RegisterPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [communityCode, setCommunityCode] = useState("");
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const handleRegister = () => {
    dispatch(
      addUser({
        firstname: firstName,
        lastname: lastName,
        email,
        username,
        password,
        community: communityCode,
        events: [],
      })
    );
    navigate("/login");
  };

  return (
    <div className="p-5">
      <h1 className="text-center">Créer un compte</h1>
      <Form>
        <Form.Group controlId="formBasicFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicCommunityCode">
          <Form.Label>Community Code</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter community code"
            value={communityCode}
            onChange={(e) => setCommunityCode(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" onClick={handleRegister} className="mt-3">
          Register
        </Button>
        <p className="mt-1">
          Vous avez déja un compte? Cliquer <Link to={"/login"}>Ici</Link>
        </p>
      </Form>
    </div>
  );
}
