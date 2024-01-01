import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Menu.module.scss";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function MenuHeader({ title, onBack  }) {
  return (
    <header className={cx('menu-header')}>
        <button className={cx('back-btn')} onClick={onBack}>
            <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <h4 className={cx('header-title')}>{title}</h4>
    </header>
  );
}

export default MenuHeader;