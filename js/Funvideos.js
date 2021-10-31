const videos = [
  {
    videoLink: "https://youtu.be/uTns3HT9Luo",
    subtitle: "ADHD Fox",
  },
  {
    videoLink: "https://youtu.be/yebJpfZn1H8",
    subtitle: "where did he come from?!",
  },
  {
    videoLink: "https://youtu.be/qDa0vf_5aE8",
    subtitle: "hand_shadow_girls",
  },
  {
    videoLink: "https://youtu.be/70eIa_SEFtA",
    subtitle: "30 MUSIC MEMES in 2 MINUTES",
  },
  {
    videoLink: "https://youtu.be/JzPFeGjPEhE",
    subtitle: "Did She Just Play an IMPOSSIBLE Bassline??",
  },
];

const videolink = document.querySelector("#fun_videos a");
const subtitle = document.querySelector("#fun_videos span");

const toDayVideo = videos[Math.floor(Math.random() * videos.length)];

videolink.href = toDayVideo.videoLink;
videolink.innerText = toDayVideo.videoLink;
subtitle.innerText = toDayVideo.subtitle;
