import { Link } from "@cy7/gatsby";
import React from "react";

type MdxLinkProps = {
  href: string;
} & typeof Link;

function MdxLink({ href, ...props }: MdxLinkProps): React.ReactElement {
  if (href.startsWith("/")) {
    return <Link to={href} {...props} type="internal" />;
  }

  return <Link to={href} {...props} type="external" />;
}

export default MdxLink;
