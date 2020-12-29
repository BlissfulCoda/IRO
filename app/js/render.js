const path = require('path');
const os = require('os');
const { ipcRenderer } = require('electron');

// Form EventListner
const form = document.querySelector('#image-form');
const slider = document.querySelector('#slider');
const img = document.querySelector('#img');
const log = require('electron-log');

document.querySelector('#output-path').innerText = path.join(
  os.homedir(),
  'iro'
);

// OnSubmit
form.addEventListener('submit', e => {
  e.preventDefault();

  const imgPath = img.files[0].path;
  const quality = slider.value;
  ipcRenderer.send('image:minimize', {
    imgPath,
    quality
  });
});

// On Done
ipcRenderer.on('image:done', () => {
  M.toast({
    html: `Image resized to ${slider.value}% quality`
  });
});
