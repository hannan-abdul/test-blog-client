import React from 'react';
import { Link } from 'react-router-dom';
import './AllNewsDetails.css';

const AllNewsDetails = ({newdata}) => {
    const { title, photo, description, _id} = newdata;
    return (
        <div className="row align-items-center home-blog-fix mt-5 mb-5"id="blog">
            <div className="col-md-4">
                <img className="img-tag" src={photo} alt="blogimage" />
            </div>
            <div className="col-md-8 text-start ps-5">
                <h3>{title}</h3>
                <p>{description}</p>
                <Link to={"/newsdetail/" + _id}><button className="btn btn-fix">Read More</button></Link>
            </div>
        </div>
    );
};

export default AllNewsDetails;