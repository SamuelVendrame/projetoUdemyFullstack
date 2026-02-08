import { useState } from "react";
import Input from "../components/Inputs.tsx";
import { Link } from "react-router";
import Button from "../components/Button.tsx";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(email);
    console.log(password);
  }

  return (
    <form
      className="flex h-screen items-center justify-center bg-[black]"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col items-center justify-center gap-2">
        <Link to="/">
          <img src="./logo.png" alt="Logo" className="mb-4 h-[100px]" />
        </Link>

        <Input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <Input
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />

        <Button title="Login" variant="default" />
        <Link to="/register" className="w-full">
          <Button title="Nao tenho uma conta" variant="outline" />
        </Link>
      </div>
    </form>
  );
};

export default Login;
