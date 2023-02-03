import { Link } from "@cy7/website/common";
import React from "react";

type MdxLinkProps = {
  href?: string;
};

function MdxLink({ href }: MdxLinkProps): React.ReactElement {
  if (typeof href === "undefined") {
    throw new Error("Tried to render <MdxLink /> without a valid href");
  }

  if (href.startsWith("/")) {
    return <Link to={href} type="internal" />;
  }

  return <Link to={href} type="external" />;
}

export default MdxLink;
