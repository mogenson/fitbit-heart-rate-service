# Fitbit Heart Rate Service

A pair of apps: one for a Fitbit smart watch, and one for an Android phone, that create a mock Bluetooth heart rate monitor.

This let's you share real time heart rate data from the Fitbit watch with exercise equipment like Peloton, Strava, or Zwift.

![Apps](./apps.jpg)

Currently, the Fitbit smart watches measure heart rate, but do not advertise as generic heart rate monitors and can only maintain one Bluetooth Low Energy connection with the Fibit phone app. As a work around, we'll send heart rate data from the watch to the phone. Then, we'll run an Android app that appears as a Bluetooth Low Energy peripheral and advertises as a generic heart rate monitor. Finally, we'll push heart rate data from the Fitbit Android app to our HR Service Android app.

## Requirements

A Fitbit Sense or Versa 3 smart watch and an Android phone running Android greater or equal to 8.1.

Import the Fitbit app into [Fitbit Studio](https://studio.fitbit.com), start the developer bridge on your watch, and transfer the app.

Build the Android Studio project, or download and install the APK from the [releases](https://github.com/mogenson/fitbit-heart-rate-service/releases) page.

## To Use

Start the HR Service app on the Fitbit watch. Start the HR Service app on the Android phone. You should see the BPM value update and the heart icon toggle with each new received value. On your exercise equipment, search for a Bluetooth heart rate monitor. The mock heart rate monitor will have the same name as the Android phone.

### Disclaimer

No implied warranty or guarantee of functionality. The names Fitbit, Android, and Bluetooth are trademarks of their respective owners.
