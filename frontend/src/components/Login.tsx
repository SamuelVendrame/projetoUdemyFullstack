import { useState } from "react";
import Input from "./Inputs";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
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
        <img src="./logo.png" alt="Logo" className="mb-4 h-[100px]" />
        <Input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <Input
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
        <button className="w-full rounded-md bg-[red] py-2 text-sm">
          Login
        </button>
        <button className="w-full rounded-md bg-[#dfd3ad] py-2 text-[red]">
          Nao tenho uma conta
        </button>
      </div>
    </form>
  );
};

export default Login;
