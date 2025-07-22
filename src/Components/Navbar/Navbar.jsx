import { Link } from "react-router-dom";

const routes = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/about",
    label: "About",
  },
];

const Navbar = () => {
  return (
    <div className='fixed z-[9999] w-full top-4 flex items-center'>
      <div className='mx-auto backdrop-blur-2xl bg-white/20 flex gap-2 rounded-full'>
        {routes.map((route, index) => (
          <Link key={index} to={route.path} className='uppercase px-4 py-2'>
            {route.label}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Navbar;
