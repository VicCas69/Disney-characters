function characters(){
    return fetch("http://api.disneyapi.dev/characters")
    .then(res=>res.json())
    .then(data=>data.data.forEach(c=>{
        if(c.name.toLowerCase() === document.getElementById('search').value.toLowerCase()){
            characterRender(c)
        }
    }))
}

function allCharacters(){
    return fetch("http://api.disneyapi.dev/characters")
    .then(res=>res.json())
    .then(data=>data.data.forEach(c=>characterRender(c))
)}

function characterRender(character){
   
    let name = document.createElement('div');
    let image = document.createElement('img');
    let btn = document.createElement('button')
    let div = document.createElement('div')

    name.innerText = character.name;
    image.src = character.imageUrl;
    btn.innerText = 'Like'
    btn.addEventListener('click', function(){
        if(btn.innerText === 'Like'){
            btn.innerText = 'Liked'
        }else{
            btn.innerText = 'Like'
        }
    })
    
    document.getElementById('character-container').appendChild(name)
    document.getElementById('character-container').appendChild(image)
    document.getElementById('character-container').appendChild(div)
    document.getElementById('character-container').appendChild(btn)
    
}

document.getElementById('search-btn').addEventListener('click', function(e) {
    e.preventDefault()
    //let cont = document.getElementById('character-container')
    while (document.getElementById('character-container').firstChild) {
        document.getElementById('character-container').removeChild(document.getElementById('character-container').firstChild)}
    characters()
})
document.getElementById('allChar-btn').addEventListener('click', function(e) {
    e.preventDefault()
    while(document.getElementById('character-container').firstChild){
        document.getElementById('character-container').removeChild(document.getElementById('character-container').firstChild) 
    }
    allCharacters()
})




