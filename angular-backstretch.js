/*
 * Title: ngBackstretch
 * Description: An angular directive to assist the use of jQuery Backstretch.
 *              A plugin by Robbin & Co http://srobbin.com/jquery-plugins/backstretch/
 * Version: 1.0.0
 * Authors: Steven Collier, Erik Zettersten
 */
(function() {

    /* Start ngBackstretch */

    'use strict';

    angular.module('ngBackstretch', [])

    .directive('ngBackstretch', [

        function() {

            if (typeof $.fn.backstretch !== 'function')
                throw new Error('ngBackstretch | Please make sure the jquery backstretch plugin is included before this directive is added.')

            return {
                restrict: 'A',
                link: function(scope, element, attr) {

                    if (attr.ngBackstretch === '' || typeof attr.ngBackstretch === 'undefined')
                        throw new Error('ngBackstretch | You have not declared an image to be stretched.')

                    if (element.context.toString().match(/HTMLBodyElement/gi).length)
                        return $.backstretch(attr.ngBackstretch);

                    $(element).backstretch(attr.ngBackstretch);

                }
            }

        }

    ]);

}).call(this);
