//import hooks
import { togglelogin } from "../global-state/authSlice";
import { useDispatch, useSelector } from "react-redux";

//import components
import { NavLink } from "react-router-dom";

const Header = () => {
  let dispatch = useDispatch();
  let { isLoggiedind } = useSelector(({ toggleauth }) => toggleauth);
  return (
    <div className="header">
      <h1>CRUD APP</h1>
      <ul className="nav">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="posts/add">Add Post</NavLink>
        </li>
        <li
          className="login"
          onClick={() => {
            dispatch(togglelogin());
          }}>
          {isLoggiedind ? "logout" : "login"}
        </li>
      </ul>
    </div>
  );
};

export default Header;
