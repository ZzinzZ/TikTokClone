import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from './AccountItem.module.scss'
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AccountItem() {
    return (
      <div className={cx("wrapper")}>
        <img
          className={cx("avatar")}
          src="https://media.wired.com/photos/5f87340d114b38fa1f8339f9/master/w_1600%2Cc_limit/Ideas_Surprised_Pikachu_HD.jpg"
          alt="#"
        />
        <div className={cx("infomation")}>
          <h4 className={cx("name")}>
            <span>Nguyen Nhat Anh</span>
            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
          </h4>
          <span className={cx("user-name")}>nguyennhatanh</span>
        </div>
      </div>
    );
}

export default AccountItem;