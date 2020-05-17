import config from '../config.js';

const key1 = config.key1;
const key2 = config.key2;
const url = "https://www.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=" + key1 + "&user_id=186575794%40N06&format=json&nojsoncallback=1";

fetch(url)
    .then(response => response.json())
    .then(data => {
            //console.log(data);
            let n = data;
            var _s = n.photos.photo;
            let photoURLs = [];
            for (var z = 0; z < n.photos.photo.length; z++) {
                var CurrentPhotoUrl = 'https://farm' + _s[z]['farm'] + '.staticflickr.com/' + _s[z]['server'] + '/' + _s[z]['id'] + '_' + _s[z]['secret'] + '_b.jpg';
                photoURLs.push(CurrentPhotoUrl);
                //console.log(CurrentPhotoUrl);
            }

            photoURLs.forEach(addImg);

            /*       let img = document.createElement('img');
                   img.src = photoURLs[0];
                   img.className = "flickrFeed";

                   let imgDiv = document.createElement("div");
                   imgDiv.className = "item";
                   imgDiv.append(img);
                   document.getElementById("feedSrc").appendChild(imgDiv);*/
        }
    );

function addImg(URL, index) {

    let img = document.createElement('img');
    img.src = URL;
    img.className = "flickrFeed img-fluid";
    let imgDiv = document.createElement("div");
    imgDiv.className = "carousel-item";
    if (index === 0) {
        imgDiv.className = "carousel-item active";
    }
    imgDiv.append(img);

    document.getElementById("feedSrc").appendChild(imgDiv);
}

window.onload = function () {


};






