// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails";
import "controllers";
// alert("Hello from application.js");

const message_appender = function (content) {
  document
    .querySelector("#messages-table")
    .insertAdjacentHTML("beforeend", content);
};

document.addEventListener("turbo:load", function () {
  message_appender("hello from turbo:load");
});
