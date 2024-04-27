import { NavLink } from "react-router-dom";


const Headers = () => {
    return (
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/user">Users</NavLink>
            <NavLink to="/signup">Sign up</NavLink>
            <NavLink to="/login">Login</NavLink>
        </div>
    );
};

export default Headers;