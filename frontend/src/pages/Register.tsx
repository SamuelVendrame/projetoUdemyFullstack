import { useState } from "react";
import Input from "../components/Inputs";
import { Link } from "react-router";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [cep, setCEP] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    /*Preciso entender melhor isso de semantica aq*/
    e.preventDefault();
    console.log({ name, email, password, confirmPassword, cep });
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
        <Input placeholder="Nome" onChange={(e) => setName(e.target.value)} />
        <Input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          placeholder="Senha"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          placeholder="Confirme sua senha"
          type="password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <Input
          placeholder="CEP"
          type="text"
          onChange={(e) => setCEP(e.target.value)}
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

export default Register;
