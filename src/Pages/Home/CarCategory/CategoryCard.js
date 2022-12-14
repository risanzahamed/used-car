import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
    return (
        <div>
            <Link to = {`/category/${category.category_id}`}>
                <div className="max-w-md rounded-md shadow-md p-10 sm:mx-auto sm:text-center">
                    <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
                        <img src={category.image} alt="" srcSet="" />
                    </div>
                    <h6 className="mb-3 lg:px-5 text-xl font-bold leading-5">{category.categoryName}</h6>
                </div>

            </Link>

        </div>
    );
};

export default CategoryCard;