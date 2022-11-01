import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom'

// pages, components
import WebsiteLayout from './pages/layouts/WebsiteLayout';

import AdminLayout from './pages/layouts/AdminLayout';

import PrivateRouter from './components/PrivateRouter';
import Page404 from './pages/Page404';
import HomePage from './pages/client/Home/HomePage';
import ProjectDetail from './pages/client/ProjectDetail';
function App() {
  return (
    <>
      <Routes>
        {/* Website */}
        <Route path="/" element={<WebsiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="project/:slug" element={<ProjectDetail />} />

        </Route>
      
        {/* Admin */}
        <Route path="admin" element={<PrivateRouter><AdminLayout /></PrivateRouter>}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={"Abc"} />

          {/* <Route path="product">
            <Route index element={< Product />} />
            <Route path=":id/edit" element={<EditProduct />} />
            <Route path="add" element={<AddProduct />} />
          </Route> */}

        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
}

export default App;
