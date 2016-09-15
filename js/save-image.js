$(document).ready(function() {

    // get image param sent from background.js
    function $_GET(param) {
        var vars = {};
        window.location.href.replace(location.hash, '').replace(
            /[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
            function(m, key, value) { // callback
                vars[key] = value !== undefined ? value : '';
            }
        );

        if (param) {
            return vars[param] ? vars[param] : null;
        }
        return vars;
    }

    var imageUrl = $_GET('image');
    //var decode_imageUrl = decodeUrl($_GET('image'));

    console.log(imageUrl);

    var $imagePreview = $('#image_preview');

    $imagePreview.attr('src', imageUrl);

});
