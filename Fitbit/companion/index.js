import * as messaging from "messaging";

messaging.peerSocket.addEventListener("open", (evt) => {});

messaging.peerSocket.addEventListener("message", (evt) => {
    fetch('http://127.0.0.1:12345', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                bpm: evt.data
            })
        })
        .then(response => {
            /*console.log(response);*/ })
        .catch(error => {
            /*console.log(error);*/ });
});