// src/components/HomeFeed.js

import React from 'react';
import SideBar from './SideBar';
import VideoFeed from './VideoFeed';

const HomeFeed = () => {
    return (
        <div className="content-area">
            <SideBar />
            <VideoFeed />
        </div>
    );
};

export default HomeFeed;
