import React from 'react';

const CarBookingModal = ({carModel}) => {
    const {model, categoryName} = carModel
    
    return (
        <div>
            <input type="checkbox" id="car-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="car-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-semibold">Category:  {categoryName}</h3>
                    <h3 className="text-lg font-semibold">Model No:  {model}</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                </div>
            </div>
        </div>
    );
};

export default CarBookingModal;