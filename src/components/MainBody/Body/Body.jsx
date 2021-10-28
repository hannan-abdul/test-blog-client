import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Body.css';
import AllNewsDetails from '../AllNewsDetail/AllNewsDetails';

const Body = () => {
    const [newsdetails, setNewsdetails] = useState([])
    useEffect(() => {
        const getAllNews = async () => {
            try {
                const res = await axios.get('http://localhost:5500/api/news/allnews');
                setNewsdetails(res.data)
            }
            catch (err) {
                console.log(err)
            }
        }
        getAllNews()
    }, [])

    return (
        <section className="blog-section container text-center mt-5">
            <div>
            {
                newsdetails.map(newdata =>
                        <AllNewsDetails
                            newdata={newdata}
                            key={newdata._id} />
                )
            }
            </div>
        </section>
    );
};

export default Body;