function video(){
    let trailer = document.querySelector('.trailer')
    let video = document.querySelector('.trailer video')
    if(video){
        video.play()
    }
    trailer.classList.toggle('active')
}

function changeBg(bg, title){
    let banner = document.querySelector('.banner');
    let content = document.querySelector('.content');
    banner.style.background = `url("./Images/full/${bg}")`
    banner.style.backgroundSize = 'cover';
    banner.style.backgroundPosistion = 'center'

    content.forEach(contentItem => {
        contentItem.classList.remove('active');
        if(contentItem.classList.contains(title)){
            contentItem.classList.add('active');
        }
    })
}