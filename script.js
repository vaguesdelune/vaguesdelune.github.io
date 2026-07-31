let currentStep = 0;
const targetStep = 150;
let hasLoaded = false;
const audio = document.getElementById('bg-audio');
if (audio) audio.volume = 0.03;

let touchStartY = 0;

function handleStepChange(delta) {
    if (delta > 0) {
        currentStep++;
    } else {
        currentStep = Math.max(0, currentStep - 1);
    }

    if (audio) {
        const volumeProgress = currentStep / targetStep;
        let newVolume = volumeProgress;
        audio.volume = Math.max(0.01, Math.min(0.85, newVolume));
    }

    const scrollText = document.getElementById('scroll');
    if (scrollText && currentStep > 0) {
        scrollText.style.display = 'none';
    }

    if (currentStep >= targetStep && !hasLoaded) {
        hasLoaded = true;
        window.location.href = 'https://vdlaudio.com/library';
    }
}

window.addEventListener('wheel', (event) => {
    handleStepChange(event.deltaY);
}, { passive: false });

window.addEventListener('touchstart', (event) => {
    touchStartY = event.touches[0].clientY;
}, { passive: true });

window.addEventListener('touchmove', (event) => {
    const touchCurrentY = event.touches[0].clientY;
    const deltaY = touchStartY - touchCurrentY;
    
    // Threshold to prevent over-sensitive triggering per tiny frame
    if (Math.abs(deltaY) > 10) {
        handleStepChange(deltaY);
        touchStartY = touchCurrentY;
    }
}, { passive: true });

document.addEventListener('DOMContentLoaded', () => {
    const muteBtn = document.getElementById('mute-btn');
    const drone = document.getElementById('bg-audio');
    const muteImg = document.getElementById('mute');
    if (drone) {
        drone.muted = true;
    }
    if (muteBtn) {
        muteBtn.addEventListener('click', () => {
            drone.muted = !drone.muted;
            if (drone.muted) {
                muteImg.src = 'icons/ion--volume-mute-sharp.svg';
            } else {
                muteImg.src = 'icons/ion--volume-high-sharp.svg';
            }
        });
    }
});