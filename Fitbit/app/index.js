import document from "document";
import HeartRateSensor from "heart-rate";
import * as messaging from "messaging";
import me from "appbit";

const label = document.getElementById("bpm");

/* attempt to keep app alive */
me.appTimeoutEnabled = false;

messaging.peerSocket.addEventListener("open", (evt) => {});

const hrm = new HeartRateSensor({
    frequency: 1
});

hrm.addEventListener("reading", () => {
    var hr = hrm.heartRate ? hrm.heartRate : 0;
  
    label.text = hr;
  
    if (messaging.peerSocket.readyState === messaging.peerSocket.OPEN) {
        messaging.peerSocket.send(hr);
    }
});

hrm.start();