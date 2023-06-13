import React from "react";
import Search from "./Search";

function Header({searchSequence}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search searchSequence={searchSequence} />
    </header>
  );
}

export default Header;
