import React from 'react';
import {Route, Routes} from 'react-router-dom';
import PointsInCirclesVisualization from "./PointsInCirclesVisualization";
import Documentation from "./Documentation.js";

const AppRoutes = () => {
    return (
        <Routes>

            <Route index path="/" element={<PointsInCirclesVisualization />} />
            <Route exact path="/points-in-circles-testing" element={<PointsInCirclesVisualization />} />
            <Route exact path="/documentation" element={<Documentation />} />

        </Routes>
    );
};

export default AppRoutes;
