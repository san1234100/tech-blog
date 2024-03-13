const Nav = () => {
  return (
    <ul className="flex items-center max-w-fit pb-5 mx-auto space-x-10 my-5 select-none text-white font-medium">
      <li className="cursor-pointer hover:text-lightBlue">Home</li>
      <li className="cursor-pointer hover:text-lightBlue">About</li>
      <li className="cursor-pointer hover:text-lightBlue">Contact</li>
    </ul>
  );
};

export default Nav;
