const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      {...props}
      className="text-md flex h-[34px] w-[350px] rounded-md bg-yellow-50 px-2 py-2 text-sm outline-none"
    />
  );
};

export default Input;
