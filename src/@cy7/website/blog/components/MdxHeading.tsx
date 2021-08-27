import { Link, LinkIcon, styled } from "@cy7/design-system";
import { slugify } from "@cy7/website/common/utils/slugify";
import React from "react";

const Anchor = styled(Link, {
  display: "inline-block",
  margin: "-5px 0 0 -24px",
  padding: "5px 4px",
  verticalAlign: "middle",

  "&:not(:focus) svg": {
    visibility: "hidden",
  },
});

const Heading = styled("h1", {
  [`&:hover ${Anchor} svg`]: {
    visibility: "visible",
  },
});

type HeadingElement = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type MdxHeadingProps = {
  as: HeadingElement;
  children: string;
} & React.ComponentProps<typeof Heading>;

function MdxHeading({
  as,
  children,
  ...props
}: MdxHeadingProps): React.ReactElement {
  const slug = slugify(children);
  const label = children;

  return (
    <Heading as={as} id={slug} {...props}>
      <Anchor
        aria-label={label}
        href={`#${slug}`}
        title={label}
        variant="plain"
      >
        <LinkIcon width={16} />
      </Anchor>
      {children}
    </Heading>
  );
}

type MdxTagHeadingProps = Omit<MdxHeadingProps, "as">;

function createMdxHeading(as: HeadingElement) {
  return function MdxTagHeading({
    children,
    ...props
  }: MdxTagHeadingProps): React.ReactElement {
    return (
      <MdxHeading as={as} {...props}>
        {children}
      </MdxHeading>
    );
  };
}

const MdxH1 = createMdxHeading("h1");
const MdxH2 = createMdxHeading("h2");
const MdxH3 = createMdxHeading("h3");
const MdxH4 = createMdxHeading("h4");
const MdxH5 = createMdxHeading("h5");
const MdxH6 = createMdxHeading("h6");

export default MdxHeading;

export { MdxH1, MdxH2, MdxH3, MdxH4, MdxH5, MdxH6 };
