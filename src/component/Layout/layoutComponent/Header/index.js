import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import classNames from "classnames/bind";
import {
  faCloudUpload,
  faCoins,
  faEarthAsia,
  faEllipsisVertical,
  faUser,
  faGear,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCircleQuestion,
  faKeyboard,
  faMessage,
} from "@fortawesome/free-regular-svg-icons";

import routesConfig from "~/config/routes";
import Search from "../Search";
import Button from "~/component/Button";
import images from "../../../../assets/images";
import styles from "./Header.module.scss";
import Menu from "../../../Popper/Menu";
import Image from '~/component/Image';



const cx = classNames.bind(styles);

const MENU_ITEM = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: "English",
    children: {
      title: "Language",
      data: [
        {
          type: "language",
          code: "en",
          title: "English",
        },
        {
          type: "language",
          code: "vi",
          title: "Tiếng Việt",
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: "Feedback and help",
    to: "/feedback",
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: "Keyboard shortcuts",
  },
];



function Header() {
  
  const currentUser = true;

  //handle logic
  const handleMenuChange = (menuItem) => {
    console.log(menuItem);
  };

  

  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: "View profile",
      to: "/user",
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: "Get coins",
      to: "/coins",
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: "Settings",
      to: "/settings",
    },
    ...MENU_ITEM,
    {
      icon: <FontAwesomeIcon icon={faRightFromBracket} />,
      title: "Log out",
      to: "/logout",
      separate: true,
    },
  ];

  return (
    <header className={cx("warper")}>
      <div className={cx("header-content")}>
        {/* Logo */}
        <div className={cx("logo")}>
          <Link to={routesConfig.home}>
            <img src={images.logo} alt="Tiktok" />
          </Link>
        </div>
        {/* Search */}
        <Search></Search>

        {/* Actions */}
        <div className={cx("actions")}>
          {currentUser ? (
            <div>
              <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                <button className={cx("action-btn")}>
                  <FontAwesomeIcon icon={faCloudUpload} />
                </button>
              </Tippy>

              <button className={cx("action-btn")}>
                <FontAwesomeIcon icon={faMessage} />
              </button>
            </div>
          ) : (
            <>
              <Button text>Upload</Button>
              <Button primary>Log in</Button>
            </>
          )}
          <Menu
            items={currentUser ? userMenu : MENU_ITEM}
            onChange={handleMenuChange}
          >
            {currentUser ? (
              <Image
                className={cx("user-avt")}
                alt=""
                src="https://photo.znews.vn/w660/Uploaded/dqvpxpck/2021_10_08/Husqvarna_zing_1.jpg"
              />
            ) : (
              <button className={cx("more-btn")}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
