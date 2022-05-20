const MediaElements = document.querySelectorAll('media');

MediaElements.forEach(function(media) {
    const mediaSrc = media.getAttribute('src');
    const mediaType = media.getAttribute('type');
    const mediaId = 'audio' + Math.round(Math.random() * 100000).toString();
    media.setAttribute('id', mediaId);
    if (mediaSrc) {
        if (mediaType == 'audio') {
            media.innerHTML = `<audio src="${mediaSrc}"></audio>
            <div controls>
                <span ply-pus></span>
                <div volume>
                    <span add>+</span>
                    <span remove>-</span>
                </div>
                <span time>00:00</span>
                <pgbar><bar></bar><input type="range" min="0" value="0" step="1" id="${mediaId}-range"></pgbar>
                <span remaintime>00:00</span>
            </div>`;
            const audio = document.querySelector(`#${mediaId} audio`);
            const plyPus = document.querySelector(`#${mediaId} span[ply-pus]`);
            const time = document.querySelector(`#${mediaId} span[time]`)
            const remaintime = document.querySelector(`#${mediaId} span[remaintime]`)
            const range = document.querySelector(`#${mediaId}-range`);
            const bar = document.querySelector(`#${mediaId} pgbar bar`);
            const vlmAdd = document.querySelector(`#${mediaId} div[volume] span[add]`)
            const vlmRmv = document.querySelector(`#${mediaId} div[volume] span[remove]`)
            plyPus.addEventListener('click', function() {
                musicPly();
            });
            audio.addEventListener('timeupdate', function() {
                range.max = audio.duration;
                bar.style.cssText += `--active:${audio.currentTime / (audio.duration / 100)}%`;
                if (audio.currentTime == audio.duration - 0.5) {musicPly();}
                time.innerHTML = `${Math.floor(audio.currentTime / 60)}:${Math.floor(audio.currentTime % 60)}`
                let scondsOfRemaintime = audio.duration - audio.currentTime
                remaintime.innerHTML = `${Math.floor(scondsOfRemaintime / 60)}:${Math.floor(scondsOfRemaintime % 60)}`
            });
            range.addEventListener('change', function() {
                audio.currentTime = range.value;
            });
            plyPus.innerHTML = '&#x23f5';
            function musicPly(){
                if (audio.paused) {
                    audio.play();
                    plyPus.innerHTML = '&#x23F8';
                } else {
                    audio.pause();
                    plyPus.innerHTML = '&#x23f5';
                }
            }
            vlmAdd.addEventListener('click', function() {
                audio.volume += 0.05
            });
            vlmRmv.addEventListener('click', function() {
                audio.volume -= 0.05
            });
        } else if (mediaType == 'video') {}
    }
});
