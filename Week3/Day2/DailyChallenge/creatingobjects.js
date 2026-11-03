class Video {
    constructor(title, uploader, time) {
        this._title = title;
        this.uploader = uploader;
        this.time = time;
    }

    get title() {
        return this._title;
    }

    get time() {
        return this._time;
    }

    set time(value) {
        if (typeof value !== "number" ||
            !Number.isFinite(value) ||
            value <= 0) {
            throw new Error("Time must be a positive number.");
        }

        this._time = value * 60;
    }

    watch() {
        console.log(`${this.uploader} watched all ${this.time} of ${this.title}!`);
    }
}

const video1 = new Video("Some Like It Hot", "Criterion", 125);
video1.watch();

const video2 = new Video("2001: A Space Odyssey", "Warner Bros", 149);
video2.watch();

const videoData = [
    { title: "The Shining", uploader: "Warner Bros", time: 146 },
    { title: "Psycho", uploader: "Universal", time: 109 },
    { title: "Vertigo", uploader: "Paramount", time: 128 },
    { title: "Rear Window", uploader: "Universal", time: 112 },
    { title: "Dr. Strangelove", uploader: "Columbia", time: 95 }
];

const videoInstances = [];

videoData.forEach(({ title, uploader, time }) => {
    const newVideo = new Video(title, uploader, time);
    videoInstances.push(newVideo);
    newVideo.watch();
});