import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className='right-sidebar'>
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img className="w-50" src="https://cdn.pixabay.com/photo/2017/05/30/03/58/blog-2355684_960_720.jpg"
                    alt=""
                />
                <p className="text-start">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit enim sint tempore suscipit sunt ullam itaque repellendus doloribus modi autem?
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="list-unstyled">international</li>
                    <li>international</li>
                    <li>international</li>
                    <li>international</li>
                    <li>international</li>

                </ul>
            </div>
        </div>
    );
};

export default Sidebar;