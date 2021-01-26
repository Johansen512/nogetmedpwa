const cacheName ="shell-content-v13";
const filesToCache= [
    '/',
    '/style.css',
    '/logo192.png',
    '/script.js',
    '/index.html',
    'offline.html'
]


self.addEventListener ('install', evt => {
console.log ("Serviceworker installed!!1");
evt.waitUntil(

    caches.open (cacheName)
    .then(cache => {
        console.log ("cashing app shell")
        return cache.addAll(filesToCache)
    })

)

} );

self.addEventListener ('activate', evt => {
    console.log ("Serviceworker activated");
    evt.waitUntil(
        caches.keys()
        .then(cacheNames => { console.log (cacheNames)
    

        return Promise.all(
            cacheNames.filter(oldCache => cacheName !== oldCache )
        .map(cacheName => caches.delete(cacheName))
        
        
            )
    })
    )
    
    } );
//Cache-first
        self.addEventListener ('fetch', evt => {
        evt.respondWith(caches.match(evt.request)
        .then (response => {
        return response || fetch (evt.request)

        })
        .catch(err  => caches.match ('offline.html'))
            


        )
        
        
        
        } );