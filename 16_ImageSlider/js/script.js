$(window).load(function() {
  $(".col-xs-12").twentytwenty();
});

var tribute = new Tribute({
        values: [
          {
            key: "Jordan Humphreys",
            value: "Jordan Humphreys",
            email: "getstarted@zurb.com"
          },
          {
            key: "Sir Walter Riley",
            value: "Sir Walter Riley",
            email: "getstarted+riley@zurb.com"
          }
        ],
        selectTemplate: function(item) {
          if (typeof item === "undefined") return null;
          if (this.range.isContentEditable(this.current.element)) {
            return (
              '<span contenteditable="false"><a href="http://zurb.com" target="_blank" title="' +
              item.original.email +
              '">' +
              item.original.value +
              "</a></span>"
            );
          }

          return "@" + item.original.value;
        }
      });

      tribute.attach(document.getElementById("editComment"));