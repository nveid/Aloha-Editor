define(
    [ 'aloha', 'aloha/plugin' ],
    function( Aloha, plugin) {
        "use strict";
        var Aloha	= window.Aloha;

        return plugin.create( 'silvonasave', {
            init: function() {
                var that = this;
                // Executed on plugin initialization
                // remember refernce to this class for callback
                var that = this;

                // create save button to ribbon
                /*
                var saveButton = new Aloha.ui.Button({label : "Save",
                    onclick : function() {
                        that.save();
                    }
                });
                */
                /*
                new Aloha.ui.Button({
                    'label' : "test",
                    'onclick' : function (a,b,c) {
                        // determine target lang using the icon class
                        // there should obviously be a better way to
                        // determine which button has been clicked...
                        alert('test');
                    }
                })

                // add button to ribbon
                Aloha.Ribbon.addButton(saveButton);
                */
                Aloha.editor_state = false;
                jQuery('#aloha_toggle_editor').live('click',function() {
                    if(!Aloha.editor_state) {
                        Aloha.jQuery('.editable').aloha();
                    } else {
                        /* Kill all the hilited regions. */
                        /* TODO: See if we can find a way to just call the hilited regions plugin instead of duplicating its code.
                         */
                        var
                            i, editable,
                            animateEnd = function () {
                                jQuery(this).css('outline', '');
                            };
                        for ( i = 0; i < Aloha.editables.length; i++) {
                            editable = Aloha.editables[i].obj;
                            if (editable.hasClass('aloha-editable-highlight')) {
                                editable.css('outline', editable.css('outlineColor') + ' ' + editable.css('outlineStyle') + ' ' + editable.css('outlineWidth'))
                                    .removeClass('aloha-editable-highlight')
                                    .animate({
                                        outlineWidth : '0px'
                                    }, 300, 'swing', animateEnd);
                            }
                        }
                        Aloha.jQuery('.editable').mahalo();
                    }
                    Aloha.editor_state = !Aloha.editor_state;

                });
                Aloha.Sidebar.right.addPanel({
                    id       : 'aloha-silvona-editor-options',
                    title    : '<span style="float:left; margin-left:20px;">Silvona Options</span>',
                    expanded : true,
                    activeOn: true,
                    content: '<div id="aloha-silvona-editor-coptions"><a href="#" id="aloha_toggle_editor">Toggle Editor</a></div>'
                });
            }
        });
    });

