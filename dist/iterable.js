!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Iterable=e():t.Iterable=e()}(this,function(){return function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var r={};return e.m=t,e.c=r,e.i=function(t){return t},e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=1)}([function(t,e,r){"use strict";function n(t){if(Array.isArray(t)){for(var e=0,r=Array(t.length);e<t.length;e++)r[e]=t[e];return r}return Array.from(t)}Object.defineProperty(e,"__esModule",{value:!0});var o=!1,i=!1,a=function(){return o||console.warn("Iterable not initialized, before using call Iterable.init with required params"),o},c=function(){for(var t,e=arguments.length,r=Array(e),o=0;o<e;o++)r[o]=arguments[o];(t=console).info.apply(t,n(["[react-iterable-track]"].concat(r)))},u={autoConfig:!0,debug:!1},l=function(t){return function(){var e;if(a()){for(var r=arguments.length,n=Array(r),o=0;o<r;o++)n[o]=arguments[o];(e=window._iaq)[t].apply(e,n),i&&c("called "+t+" with "+n)}}};e.default={init:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u;o&&console.warn("Already initialized Iterable."),window._iaq=window._iaq||[],function(){var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src=("https:"==document.location.protocol?"https://":"http://")+"js.iterable.com/analytics.js";var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e)}(),t?(window._iaq.push(["account",t]),o=!0,i=e.debug,Object.assign(this,{identify:l("identify"),track:l("track"),updateCart:l("updateCart"),trackPurchase:l("trackPurchase")})):console.warn("Please init with API_KEY for initializing")}}},function(t,e,r){t.exports=r(0)}])});
//# sourceMappingURL=iterable.js.map