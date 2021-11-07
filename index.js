function characters(){
    return fetch("http://api.disneyapi.dev/characters")
    .then(res=>res.json())
    .then(data=>console.log(data))
}
