/*
 * Media queries utility
 */
import _ from "lodash";

export const sizes = {
  small: 600,
  medium: 1024,
  large: 1440,
  xlarge: 1920,
};

// Iterate through the sizes and create min-width media queries
const entries = Object.keys(sizes);
let obj = {};
_.map(entries, (key) => {
  obj[key] = `@media (min-width:${sizes[key]}px)`;
});
export const media = obj;
