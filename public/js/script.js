$.getJSON('/data', function(data) {
	data.forEach(sound => {
		$('.container').append(`
			<div class="row">
				<div class="twelve column button" onclick="document.getElementById('sound_${sound}').play()">
					${sound}
	            	<audio id="sound_${sound}">
	            		<source src="${'sounds/' + sound}" type="audio/mpeg">
	            	</audio>
	        	</div>
			</div>
		`)
	})
})
