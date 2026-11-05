'use strict';
const homeVideos=Array.from(document.querySelectorAll('.digital-screen video'));
homeVideos.forEach(video=>video.addEventListener('play',()=>homeVideos.forEach(other=>{if(other!==video)other.pause()})));
window.addEventListener('load',()=>{if(location.hash==='#digital-human')document.getElementById('digital-human')?.scrollIntoView()});
