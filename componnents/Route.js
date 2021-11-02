import { Fragment } from "react";
import Link from "next/link";

const Route = () => {
  const ulStyle = {
    listStyle: "none",
    padding: "0",
    display: "inline-flex",
  };
  const liStyle = {
    margin: "0 10px",
  };
  return (
    <Fragment>
      <div>
        <ul style={ulStyle}>
          <li style={liStyle}>
            <b>Routes</b>
          </li>
          <li style={liStyle}>
            <Link href="/">home</Link>
          </li>
          <li style={liStyle}>
            <Link href="/news">/news</Link>
          </li>
          <li style={liStyle}>
            <Link href="/news/details">/news/details</Link>
          </li>
          <li style={liStyle}>
            <Link href="/news/details/123">/news/detail/123</Link>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Route;
