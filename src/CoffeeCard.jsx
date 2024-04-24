import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CoffeeCard = ({ coffee , setCoffees, coffees}) => {
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee

    const handleDelete = _id => {
        console.log(_id)

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {  
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Coffee has been deleted.",
                                icon: "success"
                            });
                            const remaining = coffees.filter(coffee => coffee._id !== _id)
                            setCoffees(remaining)
                        }
                    })

            }
            else {
                console.log('not delete')
            }
        });
    }


    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={photo} alt="Movie" /></figure>
                <div className=" flex w-full">
                    <div>
                        <h2 className="card-title">{name}</h2>
                        <p>{quantity}</p>
                        <p>{supplier}</p>
                        <p>{taste}</p>
                        <p>{details}</p>
                    </div>
                    <div className="card-actions">
                        <div className="btn-group btn-group-vertical space-y-4">
                            <button className="btn join-item">view</button>
                            <Link to={`/updateCoffee/${_id}`}>
                            <button className="btn join-item">Edit</button>
                            </Link>
                            <button onClick={() => handleDelete(_id)} className="btn join-item">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;