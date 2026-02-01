import Input from "./components/Inputs";

const App = () => {
  return (
    <p className="p6 flex gap-2 bg-black">
      <Input placeholder="E-mail" type="text" />
      <Input placeholder="Senha" type="password" /> // Entender melhor esse
      processo de reutilizacao. Confuso.
    </p>
  );
};

export default App;
