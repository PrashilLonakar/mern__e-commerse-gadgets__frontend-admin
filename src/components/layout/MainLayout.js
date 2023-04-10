import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { AiOutlineDashboard, AiOutlineBgColors } from "react-icons/ai";
import { BiCategory, BiAddToQueue } from "react-icons/bi";
import { HiClipboardList } from "react-icons/hi";
import { FiUsers } from "react-icons/fi";
import { SiBrandfolder } from "react-icons/si";
import { RiCoupon3Line } from "react-icons/ri";

import { BsCart4, BsCardList, BsFillQuestionDiamondFill } from "react-icons/bs";
import { FaBlogger, FaBlog } from "react-icons/fa";
import { TbBrandAmigo, TbBrandProducthunt } from "react-icons/tb";

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
        <div className="logo" />
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
              icon: <AiOutlineDashboard className="fs-4" />,
              label: "Dashboard",
            },
            {
              key: "customers",
              icon: <FiUsers className="fs-4" />,
              label: "Customers",
            },
            {
              key: "catalog",
              icon: <BsCart4 className="fs-4" />,
              label: "Catalogs",
              children: [
                {
                  key: "product",
                  icon: <TbBrandProducthunt className="fs-4" />,
                  label: "Product",
                  children: [
                    {
                      key: "product/add",
                      icon: <BiAddToQueue className="fs-4" />,
                      label: "Add",
                    },
                    {
                      key: "product/list",
                      icon: <BsCardList className="fs-4" />,
                      label: "List",
                    },
                  ],
                },
                {
                  key: "brand",
                  icon: <SiBrandfolder className="fs-4" />,
                  label: "Brand",
                  children: [
                    {
                      key: "brand/add",
                      icon: <BiAddToQueue className="fs-4" />,
                      label: "Add",
                    },
                    {
                      key: "brand/list",
                      icon: <BsCardList className="fs-4" />,
                      label: "List",
                    },
                  ],
                },
                {
                  key: "category",
                  icon: <BiCategory className="fs-4" />,
                  label: "Category",
                  children: [
                    {
                      key: "category/add",
                      icon: <BiAddToQueue className="fs-4" />,
                      label: "Add",
                    },
                    {
                      key: "category/list",
                      icon: <BsCardList className="fs-4" />,
                      label: "List",
                    },
                  ],
                },
                {
                  key: "color",
                  icon: <AiOutlineBgColors className="fs-4" />,
                  label: "Color",
                  children: [
                    {
                      key: "color/add",
                      icon: <BiAddToQueue className="fs-4" />,
                      label: "Add",
                    },
                    {
                      key: "color/list",
                      icon: <BsCardList className="fs-4" />,
                      label: "List",
                    },
                  ],
                },
              ],
            },
            {
              key: "orders",
              icon: <HiClipboardList className="fs-4" />,
              label: "Orders",
            },
            {
              key: "blogs",
              icon: <FaBlogger className="fs-4" />,
              label: "Blog",
              children: [
                {
                  key: "blog/add",
                  icon: <BiAddToQueue className="fs-4" />,
                  label: "Add",
                },
                {
                  key: "blog/list",
                  icon: <BsCardList className="fs-4" />,
                  label: "List",
                },
              ],
            },
            {
              key: "blog-category",
              icon: <FaBlog className="fs-4" />,
              label: "Blog-Category",
              children: [
                {
                  key: "blog-category/add",
                  icon: <BiAddToQueue className="fs-4" />,
                  label: "Add",
                },
                {
                  key: "blog-category/list",
                  icon: <BsCardList className="fs-4" />,
                  label: "List",
                },
              ],
            },
            {
              key: "coupon",
              icon: <RiCoupon3Line className="fs-4" />,
              label: "Coupons",
              children: [
                {
                  key: "coupon/add",
                  icon: <BiAddToQueue className="fs-4" />,
                  label: "Add",
                },
                {
                  key: "coupon/list",
                  icon: <BsCardList className="fs-4" />,
                  label: "List",
                },
              ],
            },
            {
              key: "inquiries",
              icon: <BsFillQuestionDiamondFill className="fs-4" />,
              label: "Inquiries",
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
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
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainLayout;
