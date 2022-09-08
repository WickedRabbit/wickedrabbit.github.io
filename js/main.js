/* jshint ignore:start */

(function () {
    'use strict';

    var LOAD = {};

    LOAD.init = function () {
        this.progress = 0.0;
        this.filesNeeded = 1;
        this.filesTotal = 1;

        this.$ = {};

        this.$.loading_progress = document.getElementById('loading_progress');
        this.$.status = document.getElementById('status');
        this.$.map_image = document.getElementById('map_image');

        this.updateProgress();
    };

    LOAD.setFilesTotal = function (numFiles) {
        this.filesTotal = Math.max(0, numFiles);
    };

    LOAD.setFilesNeeded = function (numFiles) {
        this.filesNeeded = Math.max(0, numFiles);
    };

    LOAD.setServerInfo = function (serverName, mapName, maxPlayers) {
        this.$.map_image.src = "image/maps/" + mapName + ".png";
    };

    LOAD.updateProgress = function () {
        var filesRemaining = Math.max(0, this.filesTotal - this.filesNeeded),
            progress = (this.filesTotal > 0) ?
                (filesRemaining / this.filesTotal) : 1;

        progress = Math.round(progress * 100);
        console.log(progress)

        if (progress >= 10) {
            this.$.loading_progress.src = "image/loading_progress/loading_1.png";
        }
        if (progress >= 20) {
            this.$.loading_progress.src = "image/loading_progress/loading_2.png";
        }
        if (progress >= 30) {
            this.$.loading_progress.src = "image/loading_progress/loading_3.png";
        }
        if (progress >= 40) {
            this.$.loading_progress.src = "image/loading_progress/loading_4.png";
        }
        if (progress >= 50) {
            this.$.loading_progress.src = "image/loading_progress/loading_5.png";
        }
        if (progress >= 60) {
            this.$.loading_progress.src = "image/loading_progress/loading_6.png";
        }
        if (progress >= 70) {
            this.$.loading_progress.src = "image/loading_progress/loading_7.png";
        }
        if (progress >= 80) {
            this.$.loading_progress.src = "image/loading_progress/loading_8.png";
        }
        if (progress >= 90) {
            this.$.loading_progress.src = "image/loading_progress/loading_9.png";
        }
        if (progress == 100) {
            this.$.loading_progress.src = "image/loading_progress/loading_10.png";
        }
    };

    LOAD.onFileDownloading = function (filePath) {
        this.filesNeeded = Math.max(0, this.filesNeeded - 1);  
            this.updateProgress();

        var status = 'Загрузка ' + filePath + '...';
        this.onStatusChanged(status);
    };

    LOAD.onStatusChanged = function (status) {
        console.log(status)
        if (status === 'Sending client info...') {
            this.filesNeeded = 0;
            this.updateProgress();
            status = "Отправка сведений о клиенте...";
        }

        if (status === 'Client info sent!') {
            this.filesNeeded = 0;
            this.updateProgress();
            status = "Синхронизация...";
        }

        if (status === 'Lua Started!') {
            this.filesNeeded = 0;
            this.updateProgress();
            status = "Загрузка Lua скриптов...";
        }

        this.$.status.innerText = status;
    };

    LOAD.init();
    window.LOAD = LOAD;

    /**
     * Called when the loading screen finishes loading all assets.
     *
     * @param {String} serverName Server name.
     * @param {String} serverUrl  Server loading screen URL.
     * @param {String} mapName    Map name.
     * @param {Number} maxPlayers Maximum players.
     * @param {String} steamid    64-bit Steam ID.
     * @param {String} gamemode   Gamemode folder name.
     */
    window.GameDetails = function (serverName, serverUrl, mapName, maxPlayers, steamid, gamemode) {
        LOAD.setServerInfo(serverName, mapName, maxPlayers);
    };

    /**
     * Called when a file starts downloading. The filename includes the entire
     * path of the file; for example "materials/models/bobsModels/car.mdl".
     *
     * @param {String} filePath Full file path.
     */
    window.DownloadingFile = function (filePath) {
        LOAD.onFileDownloading(filePath);
    };

    /**
     * Called when something happens. This might be "Initialising Game Data",
     * "Sending Client Info", etc.
     *
     * @param {String} status Loading status.
     */
    window.SetStatusChanged = function (status) {
        LOAD.onStatusChanged(status);
    };

    /**
     * Called at the start, tells us how many files need to be downloaded in
     * total.
     *
     * @param {String} total Total files to be downloaded.
     */
    window.SetFilesTotal = function (total) {
        LOAD.setFilesTotal(total);
    };

    /**
     * Called when the number of files to download changes.
     *
     * @param {String} needed Number of files needed to download.
     */
    window.SetFilesNeeded = function (needed) {
        LOAD.setFilesNeeded(needed);
    };
}());
