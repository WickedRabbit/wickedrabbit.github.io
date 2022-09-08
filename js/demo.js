/* jshint devel:true */
/* global contentLoaded */

/**
 * Start calling loading screen functions when all assets have finished loading.
 */
contentLoaded(window, function () {
    'use strict';

    /**
     * Loading screen event fixture. This contains an array of actual functions
     * called while connecting to a server with the associated time.
     *
     * @type {Array}
     */
    var fixture = [
        {"func":"GameDetails","args":["ANARCHY CELL","st.compactgamers.com/loading/garrysmod/ttt/bg-pointshop.php?steamid=76561197991989781","anarchycell_l01_escape",40,"76561197991989781","anarchycell"],"time":854},
        {"func":"DownloadingFile","args":["maps/anarchycell_l01_escape.bsp"],"time":1972},
        {"func":"SetFilesNeeded","args":[21],"time":2435},
        {"func":"SetFilesTotal","args":[73],"time":2436},
        {"func":"DownloadingFile","args":["maps/anarchycell_l01_escape.ain"],"time":9380},
        {"func":"DownloadingFile","args":["materials/actors/act_face_01.vtf"],"time":9621},
        {"func":"DownloadingFile","args":["materials/actors/act_face_02.vtf"],"time":9853},
        {"func":"DownloadingFile","args":["materials/actors/act_face_03.vtf"],"time":9980},
        {"func":"DownloadingFile","args":["materials/actors/act_face_04.vtf"],"time":10107},
        {"func":"DownloadingFile","args":["materials/actors/act_face_05.vtf"],"time":10235},
        {"func":"DownloadingFile","args":["materials/actors/act_face_06.vtf"],"time":10356},
        {"func":"DownloadingFile","args":["materials/actors/act_face_09.vtf"],"time":10484},
        {"func":"DownloadingFile","args":["materials/actors/act_face_10.vtf"],"time":10611},
        {"func":"DownloadingFile","args":["materials/actors/act_face_11.vtf"],"time":10737},
        {"func":"DownloadingFile","args":["materials/actors/act_face_12.vtf"],"time":10864},
        {"func":"DownloadingFile","args":["materials/actors/act_face_13.vtf"],"time":10987},
        {"func":"DownloadingFile","args":["materials/actors/act_face_14.vtf"],"time":11115},
        {"func":"DownloadingFile","args":["materials/actors/act_face_15.vtf"],"time":11240},
        {"func":"DownloadingFile","args":["materials/actors/act_face_16.vtf"],"time":11366},
        {"func":"DownloadingFile","args":["materials/actors/act_face_17.vtf"],"time":11496},
        {"func":"DownloadingFile","args":["materials/actors/act_face_18.vtf"],"time":11617},
        {"func":"DownloadingFile","args":["materials/actors/act_face_19.vtf"],"time":11747},
        {"func":"DownloadingFile","args":["sound/anarchycell/post_punk.mp3"],"time":11871},
        {"func":"DownloadingFile","args":["materials/actors/hat_01.vtf"],"time":12000},
        {"func":"DownloadingFile","args":["materials/actors/hat_02.vtf"],"time":15000},
        {"func":"DownloadingFile","args":["materials/actors/hat_03.vtf"],"time":17000},
        {"func":"DownloadingFile","args":["materials/actors/hat_04.vtf"],"time":18000},
        {"func":"DownloadingFile","args":["materials/actors/hat_05.vtf"],"time":20000},
        {"func":"DownloadingFile","args":["materials/actors/hat_06.vtf"],"time":22000},
        {"func":"SetStatusChanged","args":["Client info sent!"],"time":27000},
        {"func":"SetStatusChanged","args":["Lua Started!"],"time":29000},
    ];

    // Emit all loading screen events over time
    [].forEach.call(fixture, function (loadEvent) {
        var func = window[loadEvent.func];
        if (func !== undefined) {
            setTimeout(function () {
                func.apply(window, loadEvent.args);
            }, loadEvent.time);
        }
    });
});
