import assert from "assert";
import { formatFriendlyDate } from "../utils/dates";

test("should convert ISO8601 date string to a friendly format", () => {
  assert.equal(formatFriendlyDate("2020-11-14"), "14th November 2020");
});
