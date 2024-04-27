import { useState } from "react";
import { useLoaderData } from "react-router-dom";


const Users = () => {
    const loadedUser = useLoaderData()
    const [users, setUsers] = useState(loadedUser)
    return (
        <div>
            <h4>User: {loadedUser.length}</h4>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Created At</th>
                            <th>Last Login</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map(user => <tr key={user._id}>
                                <th>$</th>
                                <td>{user.email}</td>
                                <td>{user.crateAt}</td>
                                <td>
                                    <button className="btn">X</button>
                                </td>
                                <td>Blue</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;