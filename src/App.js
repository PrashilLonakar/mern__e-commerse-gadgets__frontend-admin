import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import ForgotPassword from "./pages/ForgotPassword";
import MainLayout from "./components/layout/MainLayout";
import Inquiries from "./pages/Inquiries";
import BlogList from "./pages/blog/List";
import BlogCategoryList from "./pages/blog-category/List";
import ProductList from "./pages/product/List";
import BrandList from "./pages/brand/List";
import CategoryList from "./pages/category/List";
import ColorList from "./pages/color/List";
import OrderList from "./pages/Order";
import CustomerList from "./pages/Customer";
import CouponList from "./pages/coupon/List";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/admin" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="inquiry" index element={<Inquiries />} />
          <Route path="blog" index element={<BlogList />} />
          <Route path="blog-category" index element={<BlogCategoryList />} />
          <Route path="order" index element={<OrderList />} />
          <Route path="customer" index element={<CustomerList />} />
          <Route path="brand" index element={<BrandList />} />
          <Route path="color" index element={<ColorList />} />
          <Route path="product" index element={<ProductList />} />
          <Route path="category" index element={<CategoryList />} />
          <Route path="coupon" index element={<CouponList />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
