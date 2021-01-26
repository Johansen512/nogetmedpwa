if ('serviceWorker' in navigator){
navigator.serviceWorker.register ("sw.js")
.then (reg => console.log ("Serviceworker works", reg) )
.catch (err => console.log ("Doesn't work", err))

}