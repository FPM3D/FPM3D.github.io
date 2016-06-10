/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 How to use it:
 IN HTML
 <!-- Trigger/Open The Modal -->
 <button id="myBtn">Open Modal</button>
 
 <!-- The Modal -->
 <div id="myModal">
 <!-- Modal content -->
 <div id = "modalContent">
 <div id = "close">X</div>
 <p>Some text in the Modal..</p>
 </div>
 </div>
 
 THEN IN JS
 modalWindowInit("myModal", "modalContent", "myBtn", "close");
 modalWindowTotalCloseBackground();
 modalWindowAddCloseElemStyle("close", "MW-close-btn-fpm3d-dark");
 modalWindowAddContentStyle("modalContent", "MW-content-fpm3d-dark");
 
 ALSO NEED 
 <link rel="stylesheet" href="js/modelWindow/modelWindow.css">
 <link rel="stylesheet" href="js/modelWindow/modelWindowStyles.css">
 <script src="js/modelWindow/modelWindow.js"></script>
 **/


// One global weriable
var MW_OPEN_ONCE = 0;
// Create from simple objects a modal windows. Itself adds styles
function modalWindowInit(winElemID, winElemContentID, openElemID, closeElemID) {
    // Get the modal
    var modal = document.getElementById(winElemID);
    // Get the button that opens the modal
    var btn = document.getElementById(openElemID);
    // Get the <span> element that closes the modal
    var span = document.getElementById(closeElemID);
    // Get the modal content
    var content = document.getElementById(winElemContentID);

    content.className += "MW-content-simple";
    modal.className += "modal-window";
    span.className += "MW-close-btn-simple";
    // When the user clicks the button, open the modal 
    btn.onclick = function () {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
        MW_OPEN_ONCE = 1;
    }

    content.onclick = function () {
        MW_OPEN_ONCE = 1;
    }
}
function modalWindowInitFull(winElemID, winElemContentID, winElemContentStyle,
        openElemID, closeElemID, closeElemStyle) {
    // Get the modal
    var modal = document.getElementById(winElemID);
    // Get the button that opens the modal
    var btn = document.getElementById(openElemID);
    // Get the <span> element that closes the modal
    var span = document.getElementById(closeElemID);
    // Get the modal content
    var content = document.getElementById(winElemContentID);

    modal.className += "modal-window";
    content.className += winElemContentStyle;
    span.className += closeElemStyle;
    // When the user clicks the button, open the modal 
    btn.onclick = function () {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
        MW_OPEN_ONCE = 1;
    }

    content.onclick = function () {
        MW_OPEN_ONCE = 1;
    }
}
function modalWindowInitFullBG(winElemID, winElemContentID, winElemContentStyle,
        openElemID, closeElemID, closeElemStyle, useBackgroundClose) {
    // Get the modal
    var modal = document.getElementById(winElemID);
    // Get the button that opens the modal
    var btn = document.getElementById(openElemID);
    // Get the <span> element that closes the modal
    var span = document.getElementById(closeElemID);
    // Get the modal content
    var content = document.getElementById(winElemContentID);

    modal.className += "modal-window";
    content.className += winElemContentStyle;
    span.className += closeElemStyle;
    // When the user clicks the button, open the modal 
    btn.onclick = function () {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
        MW_OPEN_ONCE = 1;
    }

    content.onclick = function () {
        MW_OPEN_ONCE = 1;
    }
    if (useBackgroundClose) {
        modal.onclick = function () {
            if (MW_OPEN_ONCE == 0) {
                modal.style.display = "none";
            }
            MW_OPEN_ONCE = 0;
        }
    }
}
// Add style function NEED TO TEST
function modalWindowAddCloseElemStyle(closeElemID, ClassName) {
    var span = document.getElementById(closeElemID);
    span.className += " " + ClassName;
}
function modalWindowAddContentStyle(contentElemID, ClassName) {
    var content = document.getElementById(contentElemID);
    content.className += " " + ClassName;
}
// When the user clicks anywhere outside of the modal, close it NEED TO TEST - can shake all names and other
function modalWindowTotalCloseBackground() {
    var total = document.getElementsByClassName("modal-window").length;
    var modal;
    for (var i = 0; i < total; i++) {
        model = document.getElementsByClassName("modal-window")[i];
        modal.onclick = function () {
            if (MW_OPEN_ONCE == 0) {
                modal.style.display = "none";
            }
            MW_OPEN_ONCE = 0;
        }
    }
}
