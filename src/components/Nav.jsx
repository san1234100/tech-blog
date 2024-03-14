import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <ul className="flex items-center max-w-fit pb-5 mx-auto space-x-10 my-5 select-none text-white font-medium">
      <li className="cursor-pointer hover:text-lightBlue">
         <Link to={'/'}>Home</Link>
      </li>
      <li className="cursor-pointer hover:text-lightBlue">
        <Link to={'/posts'}>Posts</Link>
        </li>
      <li className="cursor-pointer hover:text-lightBlue">
        <Link to={'/about'}>About</Link>
        </li>
    </ul>
  );
};

export default Nav;
