import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { Link, LinkIcon } from "@cy7/designSystem";
import { slugify } from "@cy7/utils/slugify";

const Anchor = styled(Link).attrs({ appearance: "image" })`
  display: inline-block;
  margin: -5px 0 0 -24px;
  padding: 5px 4px;
  vertical-align: middle;

  &:not(:focus) svg {
    visibility: hidden;
  }
`;

const Heading = styled.h1`
  &:hover ${Anchor} svg {
    visibility: visible;
  }
`;

function MdxHeading({ as, children, ...props }) {
  const slug = slugify(children);
  const label = `Link to "${children}" heading`;

  return (
    <Heading as={as} id={slug} {...props}>
      <Anchor aria-label={label} href={`#${slug}`} title={label}>
        <LinkIcon width={16} />
      </Anchor>
      {children}
    </Heading>
  );
}

MdxHeading.propTypes = {
  as: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),
  children: PropTypes.string.isRequired
};

MdxHeading.defaultProps = {
  as: "h1"
};

function createMdxHeading(as) {
  return function MdxTagHeading(props) {
    return <MdxHeading as={as} {...props} />;
  };
}

const MdxH1 = createMdxHeading("h1");
const MdxH2 = createMdxHeading("h2");
const MdxH3 = createMdxHeading("h3");
const MdxH4 = createMdxHeading("h4");
const MdxH5 = createMdxHeading("h5");
const MdxH6 = createMdxHeading("h6");

export { MdxHeading, MdxH1, MdxH2, MdxH3, MdxH4, MdxH5, MdxH6 };
