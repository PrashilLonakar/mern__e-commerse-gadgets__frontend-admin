import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import ForgotPassword from "./pages/ForgotPassword";
import MainLayout from "./components/layout/MainLayout";

import InquiryList from "./pages/Inquiries";

import BlogList from "./pages/blog/List";
import BlogAdd from "./pages/blog/Add";

import BlogCategoryList from "./pages/blog-category/List";
import BlogCategoryAdd from "./pages/blog-category/Add";

import ColorList from "./pages/color/List";
import ColorAdd from "./pages/color/Add";

import CategoryList from "./pages/category/List";
import CategoryAdd from "./pages/category/Add";

import BrandList from "./pages/brand/List";
import BrandAdd from "./pages/brand/Add";

import ProductList from "./pages/product/List";
import ProductAdd from "./pages/product/Add";

import CouponList from "./pages/coupon/List";

import OrderList from "./pages/Order";
import CustomerList from "./pages/Customer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/admin" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="inquiry" index element={<InquiryList />} />

          <Route path="blog" index element={<BlogList />} />
          <Route path="blog/add" index element={<BlogAdd />} />

          <Route path="blog-category" index element={<BlogCategoryList />} />
          <Route path="blog-category/add" index element={<BlogCategoryAdd />} />

          <Route path="color" index element={<ColorList />} />
          <Route path="color/add" index element={<ColorAdd />} />

          <Route path="category" index element={<CategoryList />} />
          <Route path="category/add" index element={<CategoryAdd />} />

          <Route path="brand" index element={<BrandList />} />
          <Route path="brand/add" index element={<BrandAdd />} />

          <Route path="product" index element={<ProductList />} />
          <Route path="product/add" index element={<ProductAdd />} />

          <Route path="coupon" index element={<CouponList />} />

          <Route path="order" index element={<OrderList />} />
          <Route path="customer" index element={<CustomerList />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
