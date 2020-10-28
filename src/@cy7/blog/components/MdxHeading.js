import PropTypes from "prop-types";
import React from "react";
import { slugify } from "@cy7/utils/slugify";

function MdxHeading({ as, children, ...props }) {
  const Element = as;
  const slug = slugify(children);
  return (
    <Element id={slug} {...props}>
      {children}
    </Element>
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
