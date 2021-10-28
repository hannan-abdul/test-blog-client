import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Footer from '../../Footer/Footer';
import Sidebar from '../Body/Sidebar/Sidebar';
import NewsDetailComponent from '../NewsDetailComponent/NewsDetailComponent';

const SingleNewsDetail = () => {
    const { newsId } = useParams();
    const [newdata, setNewsdata] = useState([]);

    useEffect(() => {
        const getSingleNews = async () => {
            try {
                const res = await axios.get('https://fast-shore-46060.herokuapp.com/api/news/' + newsId);
                setNewsdata(res.data)
            }
            catch (err) {
                console.log(err)
            }
        }
        getSingleNews()
    }, [newsId])

    return (
        <div>
            <div className="container d-flex">
                <div className="col-9">
                    <NewsDetailComponent newdata={newdata}></NewsDetailComponent>
                </div>
                <div className="col-3">
                    <Sidebar />
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default SingleNewsDetail;