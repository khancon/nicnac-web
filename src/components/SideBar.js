// src/components/SideBar.js

import React from 'react';

const SideBar = () => {
    return (
        <aside className="sidebar">
            <ul>
                <li><a href="#">Link 1</a></li>
                <li><a href="#">Link 2</a></li>
                <li><a href="#">Link 3</a></li>
                {/* More links as needed */}
            </ul>
        </aside>
    );
};

export default SideBar;
