document.addEventListener('play', function(e) {
    const elements = document.querySelectorAll('audio');
    
    elements.forEach(elem => {
        
        if (elem !== e.target) {
            elem.pause();
        }
    });
}, true);

const audioVolume = document.querySelectorAll('audio');

audioVolume.forEach(audio => {
  audio.volume = 0.3;
});

document.addEventListener('scroll', () => {

const lazulina = document.getElementById('lazulina-bg');

lazulina.play().catch(error => {
    console.log("Playback blocked by browser policy:", error);
  });


}, { once: true });

document.addEventListener('DOMContentLoaded', () => {
  const muteBtn = document.getElementById("mute-btn");
  const lazulina = document.getElementById('lazulina-bg');
  const muteImg = document.getElementById("mute");

  if (muteBtn) {
    muteBtn.addEventListener('click', () => {
      
      lazulina.muted = !lazulina.muted;
      
      
      if (lazulina.muted) {
        muteImg.src = "icons/ion--volume-mute-sharp.svg";
      } else {
        muteImg.src = "icons/ion--volume-high-sharp.svg";
      }
    });
  }
    });