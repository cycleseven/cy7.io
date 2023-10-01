import { Link } from "@cy7/website/common";
import React from "react";

type MdxLinkProps = {
  children?: React.ReactNode;
  href?: string;
};

function MdxLink({ children, href }: MdxLinkProps): React.ReactElement {
  if (typeof href === "undefined") {
    throw new Error("Tried to render <MdxLink /> without a valid href");
  }

  if (href.startsWith("/")) {
    return (
      <Link to={href} type="internal">
        {children}
      </Link>
    );
  }

  return (
    <Link to={href} type="external">
      {children}
    </Link>
  );
}

export default MdxLink;
