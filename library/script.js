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
  const muteImg = document.getElementById("mute");

  if (muteBtn) {
    // 1. Establish a single source of truth for the global muted state
    let isGlobalMuted = false;

    muteBtn.addEventListener('click', () => {
      // Toggle the global state flag
      isGlobalMuted = !isGlobalMuted;
      
      
      const allMedia = document.querySelectorAll('audio');
      
      
      allMedia.forEach(media => {
        media.muted = isGlobalMuted;
      });
      
      
      if (isGlobalMuted) {
        muteImg.src = "icons/ion--volume-mute-sharp.svg";
      } else {
        muteImg.src = "icons/ion--volume-high-sharp.svg";
      }
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const volumeFader = document.getElementById('volume-fader');
  const faderWrapper = document.querySelector('.slider-wrapper');

  if (volumeFader && faderWrapper) {
    // 1. Existing volume functionality...
    volumeFader.addEventListener('input', (e) => {
      const volumeValue = e.target.value;
      document.querySelectorAll('audio, video').forEach(media => {
        media.volume = volumeValue;
      });
    });

    // 2. NEW: Structural state triggers for the dragging look
    volumeFader.addEventListener('mousedown', () => {
      faderWrapper.classList.add('is-dragging');
    });

    document.addEventListener('mouseup', () => {
      faderWrapper.classList.remove('is-dragging');
    });
  }
});



      const toggles = document.querySelectorAll('input[id^="toggle-trigger-"]');

  toggles.forEach(toggle => {
    toggle.addEventListener('change', function() {
      // Si on vient d'ouvrir ce menu déroulant
      if (this.checked) {
        // On parcourt les autres pour les fermer
        toggles.forEach(otherToggle => {
          if (otherToggle !== this) {
            otherToggle.checked = false;
          }
        });
      }
    });
  });

document.querySelectorAll('input[id^="toggle-trigger-"]').forEach(checkbox => {
    checkbox.addEventListener('change', (event) => {
        if (event.target.checked) {
            const rowParente = event.target.closest('[class*="library-row-"]');
            
            if (rowParente) {
                // Double frame pour attendre la fin du rendu CSS instantané
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        // Calcule la position réelle APRÈS l'apparition du bloc
                        const positionElement = rowParente.getBoundingClientRect().top + window.scrollY;
                        
                      
                        const decallageHeader = 150; 

                        window.scrollTo({
                            top: positionElement - decallageHeader,
                            behavior: 'smooth'
                        });
                    });
                });
            }
        }
    });
});