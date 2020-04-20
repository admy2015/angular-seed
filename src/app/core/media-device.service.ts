import { Injectable } from '@angular/core';

export type Devices = MediaDeviceInfo[];

@Injectable({providedIn: 'root'})
export class MediaDeviceService {

    deviceList = ['audioinput', 'audiooutput', 'videoinput'];

    constructor() {
    }

    async tryGetDevices(devicelist: Array<string>) {
        const mediaDevices = await navigator.mediaDevices.enumerateDevices();
        mediaDevices.forEach(mediaDevice => { console.log(mediaDevice); })

        const devices = devicelist.reduce((options, kind) => {
            console.log(options);
            console.log(kind);
            return options[kind] = mediaDevices.filter(device => device.kind === kind);
        }, [] as Devices);

        console.log(devices);
        //return devices;
    }

    categorizeDevices() {

    }
}