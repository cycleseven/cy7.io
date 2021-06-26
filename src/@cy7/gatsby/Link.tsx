import { Link as Cy7Link } from "@cy7/designSystem";
import { Link as GatsbyLink } from "gatsby";
import React from "react";

type LinkType =  "internal" | "external" | "email";

interface LinkProps {
  to: string;
  type?: LinkType;
}

function Link({ type = "internal", to, ...props }: LinkProps): JSX.Element {
  switch (type) {
    case "external":
      return (
        <Cy7Link
          href={to}
          rel="noreferrer noopener"
          target="_blank"
          {...props}
        />
      );
    case "email":
      return <Cy7Link href={`mailto:${to}`} {...props} />;
    default:
      return <Cy7Link as={GatsbyLink} to={to} {...props} />;
  }
}

export type { LinkType, LinkProps };
export { Link };
