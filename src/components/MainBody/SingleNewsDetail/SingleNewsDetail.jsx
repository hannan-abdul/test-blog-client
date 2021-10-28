import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Sidebar from '../Body/Sidebar/Sidebar';
import NewsDetailComponent from '../NewsDetailComponent/NewsDetailComponent';

const SingleNewsDetail = () => {
    const { newsId } = useParams();
    const [newdata, setNewsdata] = useState([]);

    useEffect(() => {
        const getSingleNews = async () => {
            try {
                const res = await axios.get('http://localhost:5500/api/news/' + newsId);
                setNewsdata(res.data)
            }
            catch (err) {
                console.log(err)
            }
        }
        getSingleNews()
    }, [newsId])

    return (
        <div className="container d-flex">
            <div className="col-9">
                <NewsDetailComponent newdata={newdata}></NewsDetailComponent>
            </div>
            <div className="col-3">
                <Sidebar />
            </div>
        </div>
    );
};

export default SingleNewsDetail;