var domReady = function (callback) {
    document.readyState != 'loading' ? callback() : document.addEventListener('DOMContentLoaded', callback);
};

domReady(function () {
    var map = L.map('map').setView([45.815399, 15.966568], 16);

    L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=2WsznIWrYvLwr9HvEbIK', {
        attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
    }).addTo(map);
    var marker = L.marker([45.815399, 15.966568]).addTo(map);
});

