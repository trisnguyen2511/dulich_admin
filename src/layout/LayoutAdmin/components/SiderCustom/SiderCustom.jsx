import {
  UserOutlined,
  FundProjectionScreenOutlined,
  BankOutlined,
  ProjectOutlined,
  IdcardOutlined,
  PartitionOutlined,
  FileTextOutlined
} from "@ant-design/icons";
import { Menu, MenuProps } from "antd";
import { Link, NavLink, useLocation } from "react-router-dom";

export default function SiderCustom() {
  const location = useLocation();
  const linkString = location.pathname.split("/")[1];

  const items = [
    {
      key: "tour",
      icon: (
        <NavLink to={"tour"}>
          <UserOutlined />
        </NavLink>
      ),
      label: "Tour",
    },
    {
      key: "tourHot",
      icon: (
        <Link to={"tourHot"}>
          <FundProjectionScreenOutlined />
        </Link>
      ),
      label: "Tour Hot",
    },
    {
      key: "dataHeader",

      icon: (
        <NavLink to={"dataHeader"}>
          <BankOutlined />
        </NavLink>
      ),
      label: "Data Header",
    },

    {
      key: "dataFooter",
      icon: (
        <NavLink to={"dataFooter"}>
          <ProjectOutlined />
        </NavLink>
      ),
      label: "Data Footer",
    },

    {
      key: "aboutUsHome",
      icon: (
        <NavLink to={"aboutUsHome"}>
          <IdcardOutlined />
        </NavLink>
      ),
      label: "About Us Home",
    },
    {
      key: "aboutUsDetail",
      icon: (
        <NavLink to={"aboutUsDetail"}>
          <PartitionOutlined />
        </NavLink>
      ),
      label: "About Us Detail",
    },
    {
      key: "blog",
      icon: (
        <NavLink to={"blog"}>
          <FileTextOutlined />
        </NavLink>
      ),
      label: "Blog",
    },
  ];

  return (
    <Menu
      className="sider"
      theme="dark"
      mode="inline"
      defaultSelectedKeys={[linkString]}
      items={items}
    />
  );
}
