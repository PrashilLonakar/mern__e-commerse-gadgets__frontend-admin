import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import React, { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";

import { AiOutlineDashboard, AiOutlineBgColors } from "react-icons/ai";
import { BiCategory, BiAddToQueue } from "react-icons/bi";
import { HiClipboardList } from "react-icons/hi";
import { FiUsers } from "react-icons/fi";
import { SiBrandfolder } from "react-icons/si";
import { RiCoupon3Line } from "react-icons/ri";
import { HiUserCircle } from "react-icons/hi";

import { BsCart4, BsCardList, BsFillQuestionDiamondFill } from "react-icons/bs";
import { FaBlogger, FaBlog } from "react-icons/fa";
import { TbBrandAmigo, TbBrandProducthunt } from "react-icons/tb";
import { IoIosNotifications } from "react-icons/io";

const { Header, Sider, Content } = Layout;
const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <h2 className="text-white fs-5 text-center py-3 mb-0">
            <span className="sm-logo">AJ</span>
            <span className="lg-logo">Ama-John</span>
          </h2>
          Ama-john
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[""]}
          onClick={({ key }) => {
            if (key == "signout") {
            } else {
              navigate(key);
            }
          }}
          items={[
            {
              key: "",
              icon: <AiOutlineDashboard className="fs-5" />,
              label: "Dashboard",
            },
            {
              key: "customers",
              icon: <FiUsers className="fs-5" />,
              label: "Customers",
            },
            {
              key: "catalog",
              icon: <BsCart4 className="fs-5" />,
              label: "Catalogs",
              children: [
                {
                  key: "product",
                  icon: <TbBrandProducthunt className="fs-5" />,
                  label: "Product",
                  children: [
                    {
                      key: "product/add",
                      icon: <BiAddToQueue className="fs-5" />,
                      label: "Add",
                    },
                    {
                      key: "product/list",
                      icon: <BsCardList className="fs-5" />,
                      label: "List",
                    },
                  ],
                },
                {
                  key: "brand",
                  icon: <SiBrandfolder className="fs-5" />,
                  label: "Brand",
                  children: [
                    {
                      key: "brand/add",
                      icon: <BiAddToQueue className="fs-5" />,
                      label: "Add",
                    },
                    {
                      key: "brand/list",
                      icon: <BsCardList className="fs-5" />,
                      label: "List",
                    },
                  ],
                },
                {
                  key: "category",
                  icon: <BiCategory className="fs-5" />,
                  label: "Category",
                  children: [
                    {
                      key: "category/add",
                      icon: <BiAddToQueue className="fs-5" />,
                      label: "Add",
                    },
                    {
                      key: "category/list",
                      icon: <BsCardList className="fs-5" />,
                      label: "List",
                    },
                  ],
                },
                {
                  key: "color",
                  icon: <AiOutlineBgColors className="fs-5" />,
                  label: "Color",
                  children: [
                    {
                      key: "color/add",
                      icon: <BiAddToQueue className="fs-5" />,
                      label: "Add",
                    },
                    {
                      key: "color/list",
                      icon: <BsCardList className="fs-5" />,
                      label: "List",
                    },
                  ],
                },
              ],
            },
            {
              key: "orders",
              icon: <HiClipboardList className="fs-5" />,
              label: "Orders",
            },
            {
              key: "blogs",
              icon: <FaBlogger className="fs-5" />,
              label: "Blog",
              children: [
                {
                  key: "blog/add",
                  icon: <BiAddToQueue className="fs-5" />,
                  label: "Add",
                },
                {
                  key: "blog/list",
                  icon: <BsCardList className="fs-5" />,
                  label: "List",
                },
              ],
            },
            {
              key: "blog-category",
              icon: <FaBlog className="fs-5" />,
              label: "Blog-Category",
              children: [
                {
                  key: "blog-category/add",
                  icon: <BiAddToQueue className="fs-5" />,
                  label: "Add",
                },
                {
                  key: "blog-category/list",
                  icon: <BsCardList className="fs-5" />,
                  label: "List",
                },
              ],
            },
            {
              key: "coupon",
              icon: <RiCoupon3Line className="fs-5" />,
              label: "Coupons",
              children: [
                {
                  key: "coupon/add",
                  icon: <BiAddToQueue className="fs-5" />,
                  label: "Add",
                },
                {
                  key: "coupon/list",
                  icon: <BsCardList className="fs-5" />,
                  label: "List",
                },
              ],
            },
            {
              key: "inquiries",
              icon: <BsFillQuestionDiamondFill className="fs-5" />,
              label: "Inquiries",
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="d-flex justify-content-between px-3 pe-3"
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
          <div className="d-flex gap-3 align-items-center">
            <div className="position-relative">
              <IoIosNotifications style={{ "font-size": "25px" }} />
              <div className="badge bg-warning rounded-circle p-1 position-absolute">
                3
              </div>
            </div>
            <div className="d-flex gap-3 align-items-center">
              <div>
                <HiUserCircle style={{ "font-size": "60px" }} />
              </div>
              <div>
                <h5 className="mb-0">Dummy</h5>
                <p className="mb-0">dummybummy@gmail.com</p>
              </div>
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainLayout;
