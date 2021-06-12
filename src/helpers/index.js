const moment = require("moment");
const handlebars = require("handlebars");

const formatDate = handlebars.registerHelper("formatDate", function (date) {
  return moment(date).format("DD.MM.YYYY - hh:mm");
});

module.exports = formatDate;
