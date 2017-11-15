/*global google*/
export const getAddressFromCoords = (lat, lng) => {
    const geocoder = new google.maps.Geocoder();;
    let latlng = new google.maps.LatLng(lat, lng);

    return new Promise ((resolve, reject) => geocoder.geocode({'latLng': latlng}, (results, status) =>{
        if (status === google.maps.GeocoderStatus.OK) {
            let area =null;
            if (results[1]) {
                for (let i = 0; i < results[0].address_components.length; i++) {
                    for (let b = 0; b < results[0].address_components[i].types.length; b++) {
                        if (results[0].address_components[i].types[b] == "administrative_area_level_1") {
                            area = results[0].address_components[i];
                            break;
                        }
                    }
                }
            resolve(area);
            } else {
                alert("No results found");
            }
        } else {
            alert("Geocoder failed due to: " + status);
        }
    }));
}

export const timeStampConvertTime = (timeStamp) => {
    let date = new Date(timeStamp * 1000);
    let hours = date.getHours();
    let minutes = "0" + date.getMinutes();
    let seconds = "0" + date.getSeconds();
    return `${hours}:${minutes.substr(-2)}:${seconds.substr(-2)}`
}

export const timeStampConvertToDate = (timeStamp) => {
    let date = new Date(timeStamp * 1000);
    return `${date.getDate()} ${date.getDay()}`
}