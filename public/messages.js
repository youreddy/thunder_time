var socket = io();

$('form').submit(function(){
	socket.emit('chat message', $('#m').val());
    $('#m').val('');
    return false;
});
   
socket.on('chat message', function(msg){
	$('#messages').append($('<li>').text(msg));
});

/**********************************************/

$(document).ready(function(){
    $("#login").click(function(){
        $(".landing").slideUp("slow", function(){
        	document.getElementById("login").textContent = "Logout";
        });
    });
});