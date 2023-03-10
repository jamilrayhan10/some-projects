import React from "react";
import  Link  from "next/link";

const Links = () => {
  return (
    <>
      <div className="links_area">
        <div className="links">
          <span>01. </span>
          <Link href="/pagination">Pagination</Link> <br />
          <span>02. </span>
          <Link href="/about">About Me</Link> <br />
          <span>03. </span>
          <Link href="/contact">Contact Me</Link> <br />
        </div>
      </div>
    </>
  );
};

export default Links;
