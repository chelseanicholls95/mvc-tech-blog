const moment = require("moment");
const handlebars = require("handlebars");

const formatDate = handlebars.registerHelper("formatDate", function (date) {
  return moment(date).format("DD.MM.YYYY - HH:mm");
});

module.exports = formatDate;
