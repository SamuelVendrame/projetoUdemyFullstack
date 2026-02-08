import { useState } from "react";
import Input from "../components/Inputs";
import { Link } from "react-router";
import Button from "../components/Button";

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

        <Button title="Criar conta" variant={"default"} className="w-full" />

        <Link to="/login" className="w-full">
          <Button title="Ja tenho uma conta" variant={"outline"} />
        </Link>
      </div>
    </form>
  );
};

export default Register;
