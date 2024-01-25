import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { login } from "../redux/slices/authSlice";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const users = useAppSelector((state) => state.users);

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const handleLogin = () => {
    if (users.map((user) => user.username).includes(username)) {
      const user = users.find((_user) => _user.username === username);
      if (user?.password === password) {
        dispatch(login(username));
        navigate('/events')
      }
    }
  };

  return (
    <div className="p-5">
      <h1 className="text-center">Se connecter</h1>
      <Form>
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

        <Button variant="primary" onClick={handleLogin} className="mt-3">
          Login
        </Button>
        <p className="mt-1">
          Pas de compte? Cliquer <Link to={"/register"}>Ici</Link>
        </p>
      </Form>
    </div>
  );
}
