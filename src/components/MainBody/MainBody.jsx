import React from 'react';
import Body from './Body/Body';
import Sidebar from './Body/Sidebar/Sidebar';
import './MainBody.css';

const MainBody = () => {
    return (
        <section className="container body-section">
            <div className="row">
                <div className="col-md-8">
                    <Body />
                </div>
                <div className="col-md-4">
                    <Sidebar />
                </div>
            </div>
        </section>
    );
};

export default MainBody;