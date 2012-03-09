/* Drop-Down Menu
 * --------------------
 * A simple drop-down menu for use in Fusion.
 * The element that is clicked needs to have an ID of "(something)button" and
 * its associated menu element needs to be "(something)menu", with that (something)
 * being the same to link the two together.
 */

(function () {

    /* Global variables */
    var currmenu = '', clicked = '';

    /* Prototype */
    var ddmenuPrototype = {
        options: {
            container: '', // Container that holds the button and menu DIVs
            button: '', // The element that is clicked
            buttonClass: '', // The class added to the element to display it as currently selected
            menu: '', // The menu associated with the clicked element
            isTopRibbon: false // Whether or not the menu is associated with the top ribbon
        },

        _create: function () {
            var _this = this, // Put this widget in a separate variable
                opt = _this.options; // Grab the options for ease of access

            /* This binds a click event to the element this widget is attached to. */
            $(_this.element[0]).bind('click', function () {
                $(opt.button, opt.container).removeClass(opt.buttonClass); // Remove the "selected" class
                $(opt.menu, opt.container).slideUp('fast'); // Hide the menu

                clicked = this.id;

                if (currmenu != clicked) { /* If the clicked element is not the currently open element */
                    $('#' + clicked).addClass(opt.buttonClass); // Add the "selected" class
                    var menu = clicked.split('button'); // Get the menu ID
                    $('#' + menu[0] + 'menu').slideDown('fast'); // Show the menu

                    currmenu = clicked;
                } /* Else go back to the default state */
                else {
                    currmenu = '';
                }

                /* If this is the top ribbon menu, we want the menu to disappear when you click
                 * anywhere else on the page.
                 */
                if (opt.isTopRibbon) {
                    $('#contentcontainer').one('click', function () {
                        _this.closeMenus();
                    });

                    $('div', '#contentcontainer').one('click', function () {
                        _this.closeMenus();
                    });
                }
            });
        },

        // Close all menus associated with this collection of menus
        closeMenus: function () {
            var opt = this.options;
            $(opt.button, opt.container).removeClass(opt.buttonClass);
            $(opt.menu, opt.container).slideUp('fast');
            currmenu = '';
        }
    }

    $.widget("ds.ddmenu", ddmenuPrototype);

})();