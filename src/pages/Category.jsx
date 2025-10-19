import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import Newscard from '../components/Newscard';

const Category = () => {
    const {id} = useParams();
    const [category, setCategory] = useState([]);
    const data = useLoaderData();
    console.log(data);

    useEffect(() => {
        if (id == 0) {
            setCategory(data);
            return;
        } else if (id == 1) {
            const semifiltered = data.filter(news => news.others.is_today_pick == true);
            setCategory(semifiltered);
            
        } else {
            const filteredData = data.filter(news => news.category_id == id);
            setCategory(filteredData);
        }
    }, [data,id]);

    return (
        <div>
            <h1>Total ({category.length})news found</h1>
            <div className="grid grid-cols-2 gap-5">
{category.map((news)=>(<Newscard key={news.category_id} news={news} ></Newscard>))}

            </div>
        </div>
    );
};

export default Category;