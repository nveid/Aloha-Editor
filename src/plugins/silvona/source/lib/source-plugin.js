define( [
    'aloha',
    'aloha/plugin',
    'jquery',
    'ui/port-helper-attribute-field',
    'ui/ui',
    'ui/scopes',
    'ui/surface',
    'ui/button',
    'ui/toggleButton',
    'aloha/console',
], function (
    Aloha,
    Plugin,
    jQuery,
    AttributeField,
    Ui,
    Scopes,
    Surface,
    Button,
    ToggleButton,
    console
    ) {

    var GENTICS = window.GENTICS,
        pluginNamespace = 'aloha-silvona-source',
        oldValue = '',
        newValue;
    return Plugin.create( 'silvonasource', {
        init: function() {
            this.createbuttons();
            this.subscribeEvents();
        },
        createbuttons: function() {

        },
        subscribeEvents: function() {

        }
    });
    }

    })