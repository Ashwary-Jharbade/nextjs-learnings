import Link from "next/link";
import { Fragment } from "react";
const Routes = () => {
  return (
    <Fragment>
      <ul style={{ display: "inline-flex", listStyle: "none", padding: "0" }}>
        <li>
          <b>Routes:</b>
        </li>
        <li style={{ margin: "0 10px" }}>
          <Link href="/">home</Link>
        </li>
        <li style={{ margin: "0 10px" }}>
          <Link href="/news/">news</Link>
        </li>
        <li style={{ margin: "0 10px" }}>
          <Link href="/news/details/">/news/details</Link>
        </li>
        <li style={{ margin: "0 10px" }}>
          <Link href="/news/details/abc">/news/details/abc</Link>
        </li>
        <li>
          <Link href="/ASVBDSB">Error</Link>
        </li>
      </ul>
    </Fragment>
  );
};
export default Routes;
