document.addEventListener('DOMContentLoaded', function() {
  const videoElement = document.getElementById('video-element');

  if (videoElement) {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        videoElement.srcObject = stream;
      })
      .catch((error) => {
        console.error('Error accessing camera:', error);
      });
  } else {
    console.error('Could not find video element with ID "video-element"');
  }
});


"use strict";
function dragNdrop(event) {
    var fileName = URL.createObjectURL(event.target.files[0]);
    var preview = document.getElementById("preview");
    var previewImg = document.createElement("img");
    const elementToRemove = document.getElementById('uploadOuter');
    previewImg.setAttribute("src", fileName);
    preview.innerHTML = "";
    preview.appendChild(previewImg);
    elementToRemove.remove();
}
function drag() {
    document.getElementById('uploadFile').parentNode.className = 'draging dragBox';
}
function drop() {
    document.getElementById('uploadFile').parentNode.className = 'dragBox';
}

console.log("connect")