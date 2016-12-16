/**
 * These are custom helper methods that are not native
 * to the HTMLMediaElement API. Pass in the native
 * Video element, state and optional desired value to
 * set. To be primarily used in `mapVideoElToProps`.
 */
export const togglePause = (videoEl, { paused }) => {
    if (paused) {
        videoEl.play();
    } else {
        videoEl.pause();
    }
};

export const setCurrentTime = (videoEl, state, value) => {
    videoEl.currentTime = value;
};

export const setVolume = (videoEl, state, value) => {
    videoEl.muted = false;
    videoEl.volume = value;
};

export const mute = (videoEl) => {
    videoEl.muted = true;
};

export const unmute = (videoEl) => {
    videoEl.muted = false;
};

export const toggleMute = (videoEl, { volume, muted }) => {
    if (muted || volume <= 0) {
        if (volume <= 0) {
            videoEl.volume = 1;
        }
        videoEl.muted = false;
    } else {
        videoEl.muted = true;
    }
};
