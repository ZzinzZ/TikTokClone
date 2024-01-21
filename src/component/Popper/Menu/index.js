import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

import { Wrapper as PopperWraper } from "~/component/Popper";
import styles from "./Menu.module.scss";
import MenuItem from "./MenuItem";
import MenuHeader from "./MenuHeader";

const cx = classNames.bind(styles);
const defaultFn = () => {};

function Menu({ children, items = [],hideOnClick= false, onChange = defaultFn }) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];

  const renderItems = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;
      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.children]);
            }
            else {
              onChange(item);
            }
          }}
        />
      );
    });
  };
  return (
    <Tippy
      delay={[0, 600]}
      interactive
      placement="bottom-end"
      hideOnClick={hideOnClick}
      render={(attrs) => (
        <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
          <PopperWraper className={cx("menu-popper")}>
            {history.length > 1 && (
              <MenuHeader
                title="Languages"
                onBack={() => {
                  setHistory((prev) => prev.slice(0, prev.length - 1));
                }}
              />
            )}
            <div className={cx('menu-body')}>{renderItems()}</div>
          </PopperWraper>
        </div>
      )}
      onHide={() => setHistory(prev => prev.slice(0,1))}
      
    >
      {children}
    </Tippy>
  );
}

export default Menu;
