/*
 * Copyright (c) 2014 Gwennael Buchet
 *
 * License/Terms of Use
 *
 * Permission is hereby granted, free of charge and for the term of intellectual property rights on the Software, to any
 * person obtaining a copy of this software and associated documentation files (the "Software"), to use, copy, modify
 * and propagate free of charge, anywhere in the world, all or part of the Software subject to the following mandatory
 * conditions:
 *
 *   •    The above copyright notice and this permission notice shall be included in all copies or substantial portions
 *   of the Software.
 *
 *  Any failure to comply with the above shall automatically terminate the license and be construed as a breach of these
 *  Terms of Use causing significant harm to Gwennael Buchet.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
 *  WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE AUTHORS
 *  OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 *  TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *  SOFTWARE.
 *
 *  Except as contained in this notice, the name of Gwennael Buchet shall not be used in advertising or otherwise to promote
 *  the use or other dealings in this Software without prior written authorization from Gwennael Buchet.
 *
 *  These Terms of Use are subject to French law.
 */

/**
 * @module
 * @class CGSGInterpolator
 * @extends {CGSGObject}
 * @constructor
 * @author Gwennael Buchet (gwennael.buchet@gmail.com)
 */
var CGSGInterpolator = CGSGObject.extend(
    {
        initialize: function () {
        },

        /**
         * @method computeInterpolations
         * @param keys {Array} Array of all the animation keys
         * @param steps {Array} Array of steps between 2 keys. steps.length = keys.length - 1.
         * @return {Array} Array of {x, y} object corresponding to all the points in the curve
         */
        compute: function (keys, steps) {
        },

        /**
         * return the length between the keys, by peer
         * @method getLengths
         */
        getLengths: function () {
        }
    }
);