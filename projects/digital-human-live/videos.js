'use strict';
const clips = Array.from(document.querySelectorAll('.film-screen video'));
clips.forEach(video => video.addEventListener('play', () => {
  clips.forEach(other => { if (other !== video) other.pause(); });
}));
