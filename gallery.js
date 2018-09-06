$('#arena-el').text('hello!');

let contents = [];
let index = 0;
let url = 'http://api.are.na/v2/channels/';

$.get(url + 'gallery001', function( data ) {
    console.log(data);
    contents = data.contents;
    runThroughContents();

    $('#art').text(data.metadata.description);
    // $('#arena-results').text(data.metadata.description);
});


// $.get( "channel", function( data ) {
//     console.log(data);
//     contents = data.contents;
//     setInterval(runThroughContents, 20000);

//     $('#art').text(data.metadata.description);
//     // $('#arena-results').text(data.metadata.description);
// });

function runThroughContents(){
	console.log(index);

	$('.art').remove();

	$('<iframe/>', {
	    // id: 'some-id',
	    src: contents[index].source.url,
	    class: 'art'
	}).appendTo('#page');

	index++;

    setInterval(runThroughContents, 20000);
}