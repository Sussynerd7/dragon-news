import React, { Suspense, use } from 'react';
import { NavLink } from 'react-router';
const categoryPromise = fetch("/categories.json")
    .then((res) => res.json())
const Catogries = () => {
    const Categories = use(categoryPromise);

    return (
        <div>

            <h1>Caategory({Categories.length})</h1>
            <div className='grid grid-cols-1 bg-gray-100 p-5 rounded-2xl w-78 gap-3 mt-5'>
                {
                    Categories.map((cat) => (<NavLink key={cat.id} to={`/category/${cat.id}`} className={"btn hover:bg-gray-200"} >{cat.name}</NavLink>))
                }
            </div>
        </div>
    );
};

export default Catogries;