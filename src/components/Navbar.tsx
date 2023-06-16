import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Link to="/">PORTFOLIO</Link> | <Link to="/about">About Jack</Link> |{" "}
      <Link to="/developer">Software Developer</Link> |{" "}
      <Link to="/educator">Educator</Link> |{" "}
      <Link to="/musician">Musician</Link> |{" "}
      <Link to="/designer">Game Designer</Link>
    </>
  );
};
export default Navbar;
