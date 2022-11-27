import React from 'react';

const AddProduct = () => {

    const handleAddProduct = event => {
        event.preventDefault()
        
        const imageHostKey = process.env.REACT_APP_IMGBB_KEY
        console.log(imageHostKey);

        const form = event.target;
        const name = form.productName.value;
        const model = form.productModel.value;
        const originalPrice = form.originalPrice.value;
        const sellingPrice = form.sellingPrice.value;
        const description = form.description.value;
        const location = form.location.value;
        const image = form.image.value

        console.log(name, model, originalPrice, sellingPrice, description, location);


        const addProduct = {
            name,
            model,
            originalPrice,
            sellingPrice,
            description,
            location,
            image
        }

        console.log(addProduct);
        form.reset()
       


    }
    return (
        <div>
            <h2 className='text-4xl'>Add A Product</h2>

            <form onSubmit={handleAddProduct}>
                <div className="max-w-md w-full mt-14 bg-white shadow rounded-lg p-7 space-y-6">
                    <div className="flex flex-col">
                        <label className="text-sm font-bold text-gray-600 mb-1" htmlFor="text">Product Name</label>
                        <input className="border rounded-md bg-white px-3 py-2" type="text" name="productName" id="text" required />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm font-bold text-gray-600 mb-1" htmlFor="text">Product Model</label>
                        <input className="border rounded-md bg-white px-3 py-2" type="text" name="productModel" id="text" required />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm font-bold text-gray-600 mb-1" htmlFor="text">Product Original Price</label>
                        <input className="border rounded-md bg-white px-3 py-2" type="text" name="originalPrice" id="text" required />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm font-bold text-gray-600 mb-1" htmlFor="text">Product Selling Price</label>
                        <input className="border rounded-md bg-white px-3 py-2" type="text" name="sellingPrice" id="text" required />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm font-bold text-gray-600 mb-1" htmlFor="text">Product Description</label>
                        <input className="border rounded-md bg-white px-3 py-2" type="text" name="description" id="text" required />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm font-bold text-gray-600 mb-1" htmlFor="text">Selling  Location</label>
                        <input className="border rounded-md bg-white px-3 py-2" type="text" name="location" id="text" required />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm font-bold text-gray-600 mb-1" htmlFor="text">Upload Your Product Image</label>
                        <input type="file"  name='image' className="file-input file-input-bordered file-input-primary w-full " required/>
                    </div>


                    <div>
                        <button className="w-full bg-indigo-600 text-white rounded-md p-2">Add Product</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;