$(document).ready( () => {

  // Grab the video embed container.
  const embed = $( '.video-embed' );

  // Find the ID for the video.
  const videoId = embed.attr( 'data-id' );
  const videoSrc = 'https://www.youtube.com/embed/' + videoId + '?autoplay=1';

  // Find the button to start the video.
  const play = $( 'button.play' );

  // Set up the YouTube iframe.
  const video = $( document.createElement( 'iframe' ) );
  video.attr( 'src', videoSrc )
       .attr( 'allow', 'autoplay' )
       .addClass( 'video' );

  play.on( 'click', ( e ) => {

    play.remove();
    embed.append( video );

  });
});
