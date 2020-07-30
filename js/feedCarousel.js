import config from '../config.js';

const key1 = config.key1;

$(function () {
    $.ajax({
        url: "https://api.flickr.com/services/rest/",
        data: {
            method: "flickr.people.getPublicPhotos",
            api_key: key1,
            user_id:"186575794@N06",
            format: "json",
            nojsoncallback: 1
        },
        success: function (response) {
            // console.log(response);
            $.each(response.photos.photo, function (index, value) {
                console.log(value);
                var url = 'https://farm' + value.farm + '.staticflickr.com/' + value.server + '/' + value.id + '_' + value.secret + '_b.jpg';
                var a = $('<a>').attr({href: url});
                var img = $('<img>').attr({src: url});

                a.append(img);
                $("#flickrGallery").append(a);
            });
            $('#flickrGallery').justifiedGallery({rowHeight:300,margins:10});
        }
    });
});
