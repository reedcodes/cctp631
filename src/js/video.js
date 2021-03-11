$(document).ready( () => {

  // Find the ID for the video.
  const videoId = $( '.video' ).attr( 'data-id' );
  const videoSrc = 'https://www.youtube.com/embed/' + videoId + '?autoplay=1';

  // Find the button to start the video.
  const play = $( 'button.play' );

  // Set up the YouTube iframe.
  const video = $( document.createElement( 'iframe' ) );
  video.attr( 'src', videoSrc )
       .attr( 'allow', 'autoplay' );

  play.on( 'click', ( e ) => {

    play.remove();
    $( '.video' ).append( video );

  });
});
