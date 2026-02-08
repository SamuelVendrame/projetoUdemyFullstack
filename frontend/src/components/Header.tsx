import { Link } from "react-router";

const Header = () => {
  return (
    <div className="bg-[#161410]">
      <div className="mx-auto flex w-full items-center justify-between p-2 p-3 md:w-[737px] md:p-0">
        <img src="./logo.png" alt="" className="h-[100px] w-[110px]" />
        <Link to="/login">
          <div className="flex h-[35px] w-[130px] cursor-pointer items-center justify-center rounded-sm bg-[#F2DAAC]">
            Entrar
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
