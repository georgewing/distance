    function getDistance(posObj) {
        var myPos = posObj.myPos;
        var cinemaPos = posObj.cinemaPos;

        var latitude1 = myPos.latitude;
        var longitude1 = myPos.longitude;

        var latitude2 = parseFloat(cinemaPos.latitude);
        var longitude2 = parseFloat(cinemaPos.longitude);

        var R = 6371;
        
        var deltaLatitude = toRadians(latitude1 - latitude2);
        var deltaLongitude = toRadians(longitude2 - longitude1);

        latitude1 = toRadians(latitude1);
        latitude2 = toRadians(latitude2);

        var a = Math.sin(deltaLatitude / 2) *
            Math.sin(deltaLatitude / 2) +
            Math.cos(latitude1) *
            Math.cos(latitude2) *
            Math.sin(deltaLongitude / 2) *
            Math.sin(deltaLongitude / 2);
        var c = 2 * Math.atan2(Math.sqrt(a),
                Math.sqrt(1 - a));
        var d = parseInt(R * c * 1000);

        return d;
    }

    function toRadians(degree) {
        return degree * Math.PI / 180;
    }

