var navigation = document.querySelector('nav');

var navArray = [].slice.call(navigation.querySelectorAll('a'));


navArray.forEach(function(e){
	e.addEventListener('click', function(evt){
		var link;
		if(link = $(e).attr('datalink')){
			$.ajax(link).then(function(er){
				console.log(er);
				document.getElementById('content').innerHTML = er;
			});
		}
	});
});