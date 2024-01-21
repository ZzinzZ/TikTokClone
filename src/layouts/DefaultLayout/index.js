import Header from "../layoutComponent/Header";
import SideBar from "../layoutComponent/SideBar";
import styles from './DefaultLayout.module.scss'
import classNames from "classnames/bind";


const cx = classNames.bind(styles);

function DefaultLayout({children}) {
  return (
    <div className={cx("warper")}>
      <Header />
      <div className={cx("container")}>
        <SideBar />
        <div className={cx("content")}>{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
