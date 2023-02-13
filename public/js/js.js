//Change this to your no-image file
let noimage =
  "https://ami-sni.com/wp-content/themes/consultix/images/no-image-found-360x250.png";

function readURL(input) {
  console.log(input.files);
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $("#img-preview").attr("src", e.target.result);
    };

    reader.readAsDataURL(input.files[0]);
  } else {
    $("#img-preview").attr("src", noimage);
  }
}
