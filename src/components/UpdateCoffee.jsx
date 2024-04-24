import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCoffee = () => {
    const coffee = useLoaderData()
    console.log(coffee)
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee

    const handleUpdatedCoffee = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const quantity = e.target.quantity.value;
        const supplier = e.target.supplier.value;
        const taste = e.target.taste.value;
        const category = e.target.category.value;
        const details = e.target.details.value;
        const photo = e.target.photo.value;
        const updatedCoffee = { name, quantity, supplier, taste, category, details, photo }
        console.log(updatedCoffee)
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                }
            })
    }


    return (
        <div>
             <div className="bg-[#F4F3F0] p-24">
            <h4 className="text-3xl font-extrabold">Update COffee</h4>
            <form onSubmit={handleUpdatedCoffee}>
                {/* form name and quantity row */}
                <div className="md:flex ">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="name" defaultValue={name} placeholder="Coffee Name" className="input input-bordered md:w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="quantity" defaultValue={quantity} placeholder="Available Quantity" className="input input-bordered md:w-full" />
                        </label>
                    </div>
                </div>
                {/* form supplier row */}
                <div className="md:flex ">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">supplier</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="supplier" defaultValue={supplier} placeholder="supplier" className="input input-bordered md:w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="taste" defaultValue={taste} placeholder="Taste" className="input input-bordered md:w-full" />
                        </label>
                    </div>
                </div>
                {/* form Category and Details row */}
                <div className="md:flex ">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="category" defaultValue={category} placeholder="Category" className="input input-bordered md:w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="details" defaultValue={details} placeholder="Details" className="input input-bordered md:w-full" />
                        </label>
                    </div>
                </div>
                {/* form Photo Url row */}
                <div className="">
                    <div className="form-control md:w-full">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="photo" defaultValue={photo} placeholder="Photo Url" className="input input-bordered md:w-full" />
                        </label>
                    </div>
                </div>

                <input type="submit" value="Add Coffee" className="btn bg-slate-400 btn-block mt-2" />
            </form>
        </div>
        </div>
    );
};

export default UpdateCoffee;