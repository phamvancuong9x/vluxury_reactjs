import { useRef, useState } from "react";
import { Link } from "react-router-dom";

export function SearchInput() {
  const [valueSearch, setValueSearch] = useState("");
  const InputSearchRef = useRef();
  const handleKeyPress = (e) => {
    if (e.charCode === 13) {
      if (e.target.value.trim() === "") return;

      window.location.assign(`/search?title_like=${valueSearch}`);
    }
  };
  const handleClick = (e) => {
    valueSearch.trim() === "" && e.preventDefault();
    setValueSearch("");
    InputSearchRef.current?.focus();
  };

  return (
    <>
      <input
        className="nav__input"
        ref={InputSearchRef}
        id="nav__input-search"
        type="text"
        value={valueSearch}
        placeholder="Tìm sản phẩm..."
        onKeyPress={handleKeyPress}
        onChange={(e) => setValueSearch(e.target.value)}
      />
      <Link
        className="nav__link-search"
        to={`/search?title_like=${valueSearch}`}
        onClick={handleClick}
      >
        <i className="fas fa-search"></i>
      </Link>
    </>
  );
}
