var controller = {
  pausePlay: function() {
    var stat = player.getPlayerState();
    console.log(stat);
    switch(stat) {
      case 1:
        player.pauseVideo();
        break;
      case 2:
      case 5:
        player.playVideo();
        view.updatePlayingByIFrame();
        break;
      default:
        player.stopVideo();
        nextSong();
    }
  }
}