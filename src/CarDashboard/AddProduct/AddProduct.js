import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate()

    

    const imageHostKey = process.env.REACT_APP_IMGBB_KEY
    const handleAddProduct = data => {
        const image = data.image[0]
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`


        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
               
                if (imageData.success) {
                    
                    const addProduct = {
                        name: data.productName,
                        model: data.productModel,
                        originalPrice: data.originalPrice,
                        sellingPrice: data.sellingPrice,
                        description: data.description,
                        location: data.location,
                        postDate: data.postDate,
                        yearsOfUse: data.yearsOfUse,
                        image: imageData.data.url,
                        sellerName: data.name
                    }
                   

                    fetch('https://used-car-website-server.vercel.app/add-product',{
                        method:'POST',
                        headers:{
                            'content-type' : 'application/json'
                        },
                        body: JSON.stringify(addProduct)
                    })
                    .then(res => res.json())
                    .then(result =>{
                        
                        toast.success('Product addedd')
                        navigate('/dashboard/my-product')
                    })
                }
            })


    }


    return (
        <div>
            <h2 className='text-4xl'>Add A Product</h2>

            <form onSubmit={handleSubmit(handleAddProduct)}>
                <div className="max-w-md w-full mt-14 bg-white shadow rounded-lg p-7 space-y-6">
                    <div className="flex flex-col">
                        <label className="text-sm font-bold text-gray-600 mb-1" htmlFor="text">Type Your Name</label>
                        <input {...register("name")} className="border rounded-md bg-white px-3 py-2" type="text" id="text" required />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm font-bold text-gray-600 mb-1" htmlFor="text">Product Name</label>
                        <input {...register("productName")} className="border rounded-md bg-white px-3 py-2" type="text" id="text" required />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm font-bold text-gray-600 mb-1" htmlFor="text">Product Model</label>
                        <input {...register("productModel")} className="border rounded-md bg-white px-3 py-2" type="text" id="text" required />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm font-bold text-gray-600 mb-1" htmlFor="text">Product Original Price</label>
                        <input {...register("originalPrice")} className="border rounded-md bg-white px-3 py-2" type="text" id="text" required />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm font-bold text-gray-600 mb-1" htmlFor="text">Product Selling Price</label>
                        <input {...register("sellingPrice")} className="border rounded-md bg-white px-3 py-2" type="text" id="text" required />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm font-bold text-gray-600 mb-1" htmlFor="text">Product Description</label>
                        <input {...register("description")} className="border rounded-md bg-white px-3 py-2" type="text" id="text" required />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm font-bold text-gray-600 mb-1" htmlFor="text">Selling  Location</label>
                        <input {...register("location")} className="border rounded-md bg-white px-3 py-2" type="text" id="text" required />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm font-bold text-gray-600 mb-1" htmlFor="text">Type Post Date</label>
                        <input {...register("postDate")} placeholder=' 00 march 2022' className="border rounded-md bg-white px-3 py-2" type="text" id="text" required />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm font-bold text-gray-600 mb-1" htmlFor="text">Year Of Use</label>
                        <input {...register("yearsOfUse")} placeholder="00 Month, 00 days" className="border rounded-md bg-white px-3 py-2" type="text" id="text" required />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm font-bold text-gray-600 mb-1" htmlFor="text">Upload Your Product Image</label>
                        <input {...register("image")} type="file" className="file-input file-input-bordered file-input-primary w-full " required />
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