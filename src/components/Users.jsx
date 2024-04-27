import { useState } from "react";
import { useLoaderData } from "react-router-dom";


const Users = () => {
    const loadedUser = useLoaderData()
    const [users, setUsers] = useState(loadedUser)

    const handleDelete = id => {
        //    make sure user is confirm 
        fetch(`http://localhost:5000/user/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deleteCount > 0) {
                    alert('Success Delete')
                    // remove the user from ui 
                    const remaining = users.filter(user => user._id !== id)
                    setUsers(remaining)
                }
            })
    }

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
                                <td>{user.lastLoginAt}</td>
                                <td>
                                    <button onClick={() => { handleDelete(user._id) }} className="btn">X</button>
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