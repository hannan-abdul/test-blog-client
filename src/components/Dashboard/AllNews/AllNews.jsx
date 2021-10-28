import React, { useState } from 'react';
import axios from 'axios';
import './AllNews.css';
import { useSelector } from 'react-redux';

const AllNews = ({ newdata }) => {
    const { title, author, category, _id } = newdata;
    const email = useSelector((state) => state.auth.userdetails.email);

    const deleteNews = async () => {
        try {
            await axios.delete(`https://fast-shore-46060.herokuapp.com/api/news/${_id}`,{
                data: {email: email}
            });
            window.location.replace("/manage-news");
        }
        catch (err) {
            console.log(err);
        }
    }
    return (
        <div>
            <div className="row row-fix justify-content-center align-items-center">
                <div className="col-md-2">
                    <p>{title}</p>
                </div>
                <div className="col-md-3">
                    <h6>{author}</h6>
                </div>
                <div className="col-md-3">
                    <h6>{category}</h6>
                </div>
                <div className="col-md-4">
                    <button className="button-fix" onClick={() => deleteNews(_id)}>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default AllNews;