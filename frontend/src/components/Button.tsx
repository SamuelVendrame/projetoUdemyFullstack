type ButtonType = {
  title: string;
  variant: "default" | "outline";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ title, variant = "default", ...props }: ButtonType) => {
  // const default = w-full cursor-pointer rounded-md border-2 border-red-500 bg-red-500 py-1
  // const outline = w-full cursor-pointer rounded-md border-2 border-red-500 bg-white py-1 text-[red]"

  const buttonVariant = () => {
    if (variant === "default") {
      return "w-full cursor-pointer rounded-md border-2 border-red-500 bg-red-500 py-1";
    } else if (variant === "outline") {
      return "w-full cursor-pointer rounded-md border-2 border-red-500 bg-white py-1 text-[red]";
    }
  };

  return (
    <button {...props} className={buttonVariant()}>
      {title}
    </button>
  );
};

export default Button;
