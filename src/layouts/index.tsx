import { Link, Outlet, history } from "umi";
import { Flex, Menu } from "antd";
import React, { useState } from "react";
import "./index.less";
export default function Layout() {
  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
    if (e.key == "app") {
      history.push("/file");
    } else {
      history.push("/");
    }
  };
  const items = [
    {
      label: "标准文件数据检索",
      key: "mail",
    },
    {
      label: "文件查重",
      key: "app",
    },
  ];
  return (
    <Flex className="main" align="center" justify="space-between" vertical>
      <header>xxx标准文件查重</header>
      <div className="content">
        <div className="navbar">
          <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
            theme={"dark"}
          />
        </div>
        <div className="main-content">
          <Outlet />
        </div>
      </div>
      <footer>rheryer</footer>
    </Flex>
  );
}
