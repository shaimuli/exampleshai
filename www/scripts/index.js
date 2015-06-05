// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        alert("onDeviceReady");
        var ref = window.open('http://www.jetcopy.co.il/', '_self', 'location=yes');
        //ref.addEventListener('loadstart', function (event) { alert('start: ' + event.url); });
        //ref.addEventListener('loadstop', function (event) { alert('stop: ' + event.url); });
        //ref.addEventListener('loaderror', function (event) { alert('error: ' + event.message); });
        //ref.addEventListener('exit', onBackKeyDown, false);
        ref.addEventListener("backbutton", onBackKeyDown, false);
        
        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
    };

    function onBackKeyDown(e) {
        alert("onBackKeyDown");
        e.preventDefault();
        navigator.notification.confirm("אתה בטוח שברצונך לצאת?", onConfirm, "Confirmation", "Yes,No");
        // Prompt the user with the choice
    }

    function onConfirm(button) {
        alert("onConfirm");
        if (button == 2) {//If User selected No, then we just do nothing
            return;
        } else {
            navigator.app.exitApp();// Otherwise we quit the app.
        }
    }
} )();