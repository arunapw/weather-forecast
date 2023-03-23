let draggable = document.getElementById('draggable');

drag_start = (event) => {
  let style = window.getComputedStyle(event.target, null);
  event.dataTransfer.setData("text/plain",
    (parseInt(style.getPropertyValue("left"),10) - event.clientX) + ',' +
    (parseInt(style.getPropertyValue("top"),10) - event.clientY));
}
drag_over = (event) => {
  event.preventDefault();
  return false;
}
drop = (event) => {
  let offset = event.dataTransfer.getData("text/plain").split(',');
  draggable.style.left = (event.clientX + parseInt(offset[0],10)) + 'px';
  draggable.style.top = (event.clientY + parseInt(offset[1],10)) + 'px';
  event.preventDefault();
  return false;
}
draggable.addEventListener('dragstart', drag_start, false);
document.body.addEventListener('dragover', drag_over, false);
document.body.addEventListener('drop', drop, false);

let page = document.getElementById('video-wrapper');

let placeHolderImageUrl = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg';
let videoUrl = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4';
let videoElement = `<video id='landing-page-video' poster='${placeHolderImageUrl}' autoplay loop muted> <source src='${videoUrl}' type='video/mp4'/></video>`;

page.insertAdjacentHTML('beforeend', videoElement);
