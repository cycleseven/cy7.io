import { Link as Cy7Link } from "@cy7/design-system";
import { VariantProps } from "@stitches/react";
import { GatsbyLinkProps, Link as GatsbyLink } from "gatsby";
import React, { ComponentProps } from "react";

type LinkType = "internal" | "external" | "email";

type BaseProps = { children?: React.ReactNode } & ComponentProps<
  typeof Cy7Link
> &
  VariantProps<typeof Cy7Link>;

type InternalLinkProps = {
  type?: "internal";
} & BaseProps &
  Omit<GatsbyLinkProps<object>, "ref">;

type ExternalLinkProps = {
  type: "external";
} & BaseProps;

type EmailLinkProps = {
  type: "email";
} & BaseProps;

type LinkProps = { to: string } & (
  | InternalLinkProps
  | ExternalLinkProps
  | EmailLinkProps
);

function Link({
  type = "internal",
  to,
  ...props
}: LinkProps): React.ReactElement {
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
