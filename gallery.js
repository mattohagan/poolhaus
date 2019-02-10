let contents = [];
let index = 0;
let baseUrl = 'http://api.are.na/v2/channels/';
let galleryUrl = 'gallery001';
let timerInterval = 20000;
let waitForSketchTime = 5000;
let timer;
let currentiframe = null;
let nextiframe = null;


$.get(baseUrl + galleryUrl, function( data ) {
    contents = data.contents.filter(block => block.class == 'Link');
    runThroughContents();
});

$('#next').click(function(){
	clearInterval(timer);
	runThroughContents();
});


function runThroughContents(){
	nextiframe = $('<iframe/>', {
	    id: index,
	    src: contents[index].source.url,
	    class: 'art'
	}).attr('hidden', true).appendTo('#page');

  // first load page
  $(nextiframe[0].contentWindow).ready(function(niframe){
    
    // estimated wait for openProcessing.org to load sketch
    setTimeout(function(){
      if(currentiframe != null){
        currentiframe.fadeOut(3000, 'swing', function(){
          $(this).remove();
        });
      }

      nextiframe.fadeIn(3000, 'swing', function(){});

      currentiframe = nextiframe;
      index++;
      if(index == contents.length){
        index = 0;
      }
      timer = setTimeout(runThroughContents, timerInterval);

    }, waitForSketchTime);
  });
}
