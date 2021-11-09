let chars = [];

function allCharacters(){
    fetch("http://api.disneyapi.dev/characters")
    .then(res=>res.json())
    .then(data=>data.data.forEach(c=> chars.push(c)))
}
allCharacters()

function characters(){
    chars.forEach(c=>characterRender(c))
}

function characterRender(character){
   
    let name = document.createElement('h2');
    let image = document.createElement('img');
    let btn = document.createElement('button')
    let div = document.createElement('div')

    name.innerText = character.name;
    image.src = character.imageUrl;
    image.className = 'picture'
    btn.innerText = 'Like'
    //btn.className = 'picture'
    btn.addEventListener('click', function(){
        if(btn.innerText === 'Like'){
            btn.innerText = 'Liked'
            btn.style.backgroundColor = 'red';
        }else{
            btn.innerText = 'Like'
            btn.style.backgroundColor = 'white';
        }
    })
    
    document.getElementById('character-container').appendChild(name)
    document.getElementById('character-container').appendChild(image)
    document.getElementById('character-container').appendChild(div)
    document.getElementById('character-container').appendChild(btn)
    
}

document.getElementById('search-btn').addEventListener('click', function(e) {
    e.preventDefault()
    let name = chars.filter(c=>c.name.toLowerCase() === document.getElementById('search').value.toLowerCase())
    document.getElementById('character-container').innerHTML = ''
    name.forEach(c=>characterRender(c))
    //})
})

document.getElementById('allChar-btn').addEventListener('click', function(e) {
    e.preventDefault()
    document.getElementById('character-container').innerHTML = ''
    characters()
})




