$(document).ready(function() {

    var scrollFireOptions = [];
    var $menuItems = $('.scrollspy-menu').find('li');
    var menuItemClicked = false;

    $menuItems.on("click", function() {
      menuItemClicked = true;
      selectMenuItem(this);
      setTimeout(function() { menuItemClicked = false}, 100);
    });

    function selectMenuItem(menuItemToSelect) {
      $menuItems.each(function (i, menuItem) {
        $(menuItem).toggleClass('active', menuItemToSelect===menuItem);
      });
    }

    $('.scrollspy').each(function(i, element) {
        var elementId = element.getAttribute('id');
        if (elementId === null) return;

        var $anchorsToElement = $menuItems.find('a[href="#'+elementId+'"]');
        var offset = i === 0? -10 : "20%";
        $anchorsToElement.each(function(i, anchorToElement) {
          var $anchorToElement = $(anchorToElement);
          var menuItem = anchorToElement.parentElement;
          var localElement = element;
          var waypoint = new Waypoint({
              element: element,
              handler: function() {
                  if (!menuItemClicked)
                    selectMenuItem(menuItem);
              },
              offset: offset//,offset: localElement.id === "home" ? "bottom-in-view" : "top-in-view"
          });
        });
    });


});
