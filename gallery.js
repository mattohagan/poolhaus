let contents = [];
let index = 0;
let baseUrl = 'http://api.are.na/v2/channels/';
let galleryUrl = 'poolhaus-digital';
let timerInterval = 20000;
let waitForSketchTime = 4000;
let timer;
let currentiframe = null;
let nextiframe = null;


$.get(baseUrl + galleryUrl, function( data ) {
    contents = data.contents.filter(block => block.class == 'Link');
    runThroughContents();
});

$('#next').click(function(){
  console.log($('#next').attr('disabled'));

  if($('#next').attr('disabled') == undefined){
    clearInterval(timer);
    $('#next').attr('disabled', true);

  	runThroughContents();
  }
});


function runThroughContents(){
	nextiframe = $('<iframe/>', {
	    id: index,
	    src: contents[index].source.url,
	    class: 'art'
	}).prependTo('#page');

  // first load page
  $(nextiframe[0].contentWindow).ready(function(niframe){

    // estimated wait for openProcessing.org to load sketch
    let waitTime = (index == 0 ? 0 : waitForSketchTime);
    console.log(waitTime);

    setTimeout(function(){
      console.log('in timeout')
      if(currentiframe != null){
        currentiframe.fadeOut(3000, 'linear', function(){
          $(this).remove();
        });
      }

      currentiframe = nextiframe;
      index++;
      if(index == contents.length){
        index = 0;
      }
      timer = setTimeout(runThroughContents, timerInterval);

      $('#next').attr('disabled', false);

    }, waitTime);
  });
}
