const { format } = require("date-fns");

function formatFriendlyDate(isoDate) {
  return format(new Date(isoDate), "do MMMM yyyy");
}

module.exports = { formatFriendlyDate };
