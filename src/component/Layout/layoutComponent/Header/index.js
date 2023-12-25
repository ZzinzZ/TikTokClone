import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import {
  faCircleXmark,
  faMagnifyingGlass,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";

import images from "../../../../assets/images";
import styles from "./Header.module.scss";
import { Wrapper as PopperWarper } from "../../../Popper";
import AccountItem from "../../../AccoutItem";

const cx = classNames.bind(styles);

function Header() {
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([1, 2, 3]);
    }, 0);
  });

  return (
    <header className={cx("warper")}>
      <div className={cx("header-content")}>
        {/* Logo */}
        <div className={cx("logo")}>
          <img src={images.logo} alt="Tiktok" />
        </div>
        {/* Search */}
        <Tippy
          interactive
          visible={searchResult.length > 0}
          render={(attrs) => (
            <div className={cx("search-results")} tabIndex="-1" {...attrs}>
              <PopperWarper>
                <h4 className={cx("search-title")}>Nhat Anh</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PopperWarper>
            </div>
          )}
        >
          <div className={cx("search")}>
            <input
              placeholder="Search accounts and videos"
              spellCheck={false}
            />
            <button className={cx("search-clear")}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />

            <button className={cx("search-btn")}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </Tippy>
        {/* Actions */}
        <div className={cx("actions")}></div>
      </div>
    </header>
  );
}

export default Header;
