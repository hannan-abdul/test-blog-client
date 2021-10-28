import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Body.css';
import AllNewsDetails from '../AllNewsDetail/AllNewsDetails';
import ReactPaginate from 'react-paginate';

const Body = () => {
    const [newsdetails, setNewsdetails] = useState([])

    useEffect(() => {
        const getAllNews = async () => {
            try {
                const res = await axios.get('https://fast-shore-46060.herokuapp.com/api/news/allnews');
                setNewsdetails(res.data)
            }
            catch (err) {
                console.log(err)
            }
        }
        getAllNews()
    }, [])

    // pagination 
    const [pageNumber, setPageNumber] = useState(0);
    const userPerPage = 3;
    const pageVigited = pageNumber * userPerPage;

    const displayUsers = newsdetails.slice(pageVigited, pageVigited + userPerPage)
        .map(newdata =>
            <AllNewsDetails
                newdata={newdata}
                key={newdata._id} />
        )

    const pageCount = Math.ceil(newsdetails.length / userPerPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };
    return (
        <section className="blog-section container text-center mt-5">
            <div>
                {
                    displayUsers
                }
            </div>
            <ReactPaginate
                previousLabel={"Prev"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
            />
        </section>
    );
};

export default Body;