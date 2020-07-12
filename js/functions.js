function toggle(){
    var sec = document.getElementById('sec')
    var nav = document.getElementById('navigation')
    sec.classList.toggle('active')
    nav.classList.toggle('active')
}

function instagramEffect(id, state){
    const icon = document.getElementById(id)

    if(state === 'enter'){
        icon.style.backgroundSize = 'contain'
        icon.style.background = 'linear-gradient(60deg, #F8D100, #F40106, #BC3389, #8941BD)';
    }
    if(state === 'out'){
        icon.style.background = 'transparent';
    }
}

function wpEffect(id, state){
    const wp = document.getElementById(id);

    if(state === 'enter'){
        wp.style.backgroundSize = 'contain'
        wp.style.background = '#3DC24F';
        wp.style.borderRadius = '20px 20px 20px 17px'
        wp.style.height = '29px'
    }
    if(state === 'out'){
        wp.style.background = 'transparent';
    }
}
