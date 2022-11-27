import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthContext';
import toast from 'react-hot-toast';



const CarBookingModal = ({ carModel, setcarModel }) => {
    const { model, categoryName,category, resalePrice, image, location } = carModel
    const { user } = useContext(AuthContext)

    const handleCarBooking = (event) => {
        event.preventDefault()
        const form = event.target
        const fullname = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const price = form.price.value;
        const location = form.location.value;
        const category = form.category.value;
        const model = form.model.value;

        const carBooking = {
            buyerName: fullname,
            email,
            phone,
            price,
            image,
            category,
            model,
            location
        }



        fetch('https://used-car-website-server.vercel.app/car-bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(carBooking)


        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Your Selected Car is booking success')
                }
                else {
                    toast.success(data.message)
                }
            })

    }

    return (
        <div>
            <input type="checkbox" id="car-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="car-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleCarBooking} className="flex flex-col w-96 mx-auto mt-4 mb-4 rounded  dark:text-gray-100 ng-untouched ng-pristine ng-valid">

                        <img src={image} alt="" srcSet="" />

                        <input name='category' id="category" type="text" defaultValue={categoryName || category} readOnly placeholder='Full Name' className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 dark:text-gray-900 focus:dark:border-violet-400 focus:ring-violet-400 border input-bordered" />

                        <input name='model' id="model" type="text" defaultValue={model} readOnly placeholder='Full Name' className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 dark:text-gray-900 focus:dark:border-violet-400 focus:ring-violet-400 border input-bordered" />


                        <input name='location' id="location" type="text" defaultValue={location} readOnly placeholder='Full Name' className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 dark:text-gray-900 focus:dark:border-violet-400 focus:ring-violet-400 border input-bordered" />

                        <input name='price' id="price" type="text" defaultValue={resalePrice} readOnly className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 dark:text-gray-900 focus:dark:border-violet-400 focus:ring-violet-400 border input-bordered" />

                        <input id="name" type="name" name='name' defaultValue={user?.displayName} readOnly placeholder='Email Address' className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 dark:text-gray-900 focus:dark:border-violet-400 focus:ring-violet-400 border input-bordered" />


                        <input id="email" type="email" name='email' defaultValue={user?.email} readOnly placeholder='Email Address' className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 dark:text-gray-900 focus:dark:border-violet-400 focus:ring-violet-400 border input-bordered" />


                        <input id="phone" name='phone' type="tel" placeholder='Phone Numbers' className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 dark:text-gray-900 focus:dark:border-violet-400 focus:ring-violet-400 border input-bordered" />



                        <input className="flex items-center justify-center h-12 px-6 mt-8 text-sm font-semibold rounded dark:bg-violet-400 btn bg-orange-700 text-white dark:text-gray-900" type="submit" value="Submit" />


                    </form>

                </div>

            </div>
        </div>
    );
};

export default CarBookingModal;