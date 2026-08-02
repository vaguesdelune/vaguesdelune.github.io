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