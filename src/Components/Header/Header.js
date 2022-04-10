import React from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../hook/useFirebase";
import "./Header.css";

const Header = () => {
  const { user, handleSignOut } = useFirebase();
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/signup">Sign Up</Link>

      {user?.uid ? (
        <Link onClick={handleSignOut} to="/signout">
          Sign Out
        </Link>
      ) : (
        <Link to="/login">Log In</Link>
      )}
      <>
        <img
          style={{ width: "30px", borderRadius: "50%", marginRight: "5px" }}
          src={user?.photoURL}
          alt=""
        ></img>
        <small>{user?.displayName}</small>
      </>
    </nav>
  );
};

export default Header;
