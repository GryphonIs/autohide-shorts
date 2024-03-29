// ==UserScript==
// @name         YouTube Shorts Shelf Autohide
// @namespace    https://gryphon.is/autohide-shorts
// @version      1.0
// @description  Automatically hide the YouTube Shorts shelf by sending a button press to the dismiss button.
// @author       GryphonIs
// @match        https://www.youtube.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function clickNotInterestedButton() {
        var notInterestedButton = document.querySelector('button[aria-label="Not interested"]');
        if (notInterestedButton) {
            notInterestedButton.click();
        }
    }
    function checkForButton() {
        var observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                clickNotInterestedButton();
            });
        });
        observer.observe(document.body, { childList: true, subtree: true });
    }
    window.addEventListener('load', checkForButton);
})();
