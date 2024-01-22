import HeadLessTippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import classNames from "classnames/bind";
import styles from "./Search.module.scss";
import { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faMagnifyingGlass,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";

import * as searchSevice  from "~/services/searchSevice";
import { Wrapper as PopperWarper } from "~/component/Popper";
import AccountItem from "~/component/AccoutItem";
import { useDebounce } from "~/hooks";

const cx = classNames.bind(styles);

function Search() {
  const [searchResult, setSearchResult] = useState([]);
  const [searchValue, setSearchValues] = useState("");
  const [showResults, setShowResults] = useState(true);
  const [loading, setLoading] = useState(false);

  const debounce = useDebounce(searchValue, 500);

  const inputRef = useRef();

  useEffect(() => {
    if (!debounce.trim()) {
      setSearchResult([]);
      return;
    }

    const fetchApi = async () => {
      setLoading(true);
      const results = await searchSevice.search(debounce);
      setSearchResult(results);
      setLoading(false);
    }

    fetchApi();
    
  }, [debounce]);

  //hande function
  const handleClear = () => {
    setSearchValues("");
    inputRef.current.focus();
  };

  const handleChange = (e) => {
    const searchValue = e.target.value;
    if (!searchValue.startsWith(" ")) setSearchValues(searchValue);
  };

  // const handleSubmit = (e) => {
  //   console.log('submit');
  // };

  const handleHideResults = () => {
    setShowResults(false);
  };
  return (
    <>
      <HeadLessTippy
        offset={[12, 18]}
        interactive
        appendTo={() => document.body}
        delay={[0, 200]}
        visible={showResults && searchResult?.length > 0}
        onClickOutside={handleHideResults}
        render={(attrs) => (
          <div className={cx("search-results")} tabIndex="-1" {...attrs}>
            <PopperWarper>
              <h4 className={cx("search-title")}>Account</h4>
              {searchResult?.map((result) => (
                <AccountItem key={result.id} data={result} />
              ))}
            </PopperWarper>
          </div>
        )}
      >
        <div className={cx("search")}>
          <input
            ref={inputRef}
            value={searchValue}
            placeholder="Search accounts and videos"
            spellCheck={false}
            onChange={handleChange}
            onFocus={() => setShowResults(true)}
          />
          {!!searchValue && !loading && (
            <button className={cx("search-clear")} onClick={handleClear}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          )}
          {loading && (
            <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />
          )}

          <button className={cx("search-btn")} onMouseDown={e => e.preventDefault()}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </HeadLessTippy>
    </>
  );
}

export default Search;
