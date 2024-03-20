
function success(pos) {
    const crd = pos.coords;
    let htmlAnchorElement = document.createElement("a");
    htmlAnchorElement.text = 'Your position';
    htmlAnchorElement.href = `https://www.google.com/maps/search/?api=1&query=${crd.latitude},${crd.longitude}`;
    document.body.append(htmlAnchorElement);
}

function error(err) {
    alert(`ERROR(${err.code}): ${err.message}`);
}

function init() {
    navigator.geolocation.getCurrentPosition(success, error);
}

init();