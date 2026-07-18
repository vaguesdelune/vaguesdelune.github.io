let currentStep = 0;
const targetStep = 150;
let hasLoaded = false;

const audio = document.getElementById("bg-audio");
audio.volume = 0.03;

window.addEventListener('wheel', (event) => {

  if (event.deltaY > 0) {
    currentStep++;
  } else {
    currentStep = Math.max(0, currentStep - 1);
  }

  if (audio) {
    // Calculate volume progress (0 at start, 1 at target step)
    const volumeProgress = currentStep / targetStep;
    
    // Invert it so it starts loud (1) and fades out (0) as you scroll down
    let newVolume = volumeProgress;
    
    // Safety clamp to ensure it stays strictly between 0 and 1
    audio.volume = Math.max(0.01, Math.min(0.85, newVolume));
  }

  if (currentStep >= targetStep && !hasLoaded) {
    hasLoaded = true;
    window.location.href = 'https://youtube.com';
  }
}, { passive: false });


document.addEventListener('DOMContentLoaded', () => {
  const muteBtn = document.getElementById("mute-btn");
  const drone = document.getElementById('bg-audio');
  const muteImg = document.getElementById("mute");

        if (drone) {
    drone.muted = true;
  }


  if (muteBtn) {
    muteBtn.addEventListener('click', () => {

      
      drone.muted = !drone.muted;
      
      
      if (drone.muted) {
        muteImg.src = "icons/ion--volume-mute-sharp.svg";
      } else {
        muteImg.src = "icons/ion--volume-high-sharp.svg";
      }
    });
  }
    });

    document.addEventListener('wheel', (event) =>{
      const scrollText = document.getElementById("scroll");
      if (scrollText && event.deltaY > 0){
        scrollText.style.display = "none";
      }
    })