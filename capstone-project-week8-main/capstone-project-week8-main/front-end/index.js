async function getLinks() {
  let links;

  await axios
    .get("http://localhost:3000/links")
    .then((res) => (links = res.data))
    .catch((err) => console.log(err));

  const facebookLink = document.getElementById("facebook-link");
  const instagramLink = document.getElementById("instagram-link");
  const twitterLink = document.getElementById("twitter-link");
  const amazonLink = document.getElementById("amazon-link");

  facebookLink.setAttribute("href", links.facebook);
  instagramLink.setAttribute("href", links.instagram);
  twitterLink.setAttribute("href", links.twitter);
  amazonLink.setAttribute("href", links.amazon);
}

getLinks();

$(document).ready(function () {
  var readURL = function (input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        $(".profile-pic").attr("src", e.target.result);
      };

      reader.readAsDataURL(input.files[0]);
    }
  };

  $(".file-upload").on("change", function () {
    readURL(this);
  });

  $("#links-button").on("click", function () {
    $("#links-message-area").html("Updated!");
  });

  $(".upload-button").on("click", function () {
    $(".file-upload").click();
  });
});
