refresh_sounds = () => {
	$.getJSON('/data', function(data) {
		$('.main').empty()
		data.forEach(sound => {
			$('.main').append(`
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
}

const form = document.getElementById("form");

form.addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();
    const formData = new FormData();
    const files = document.getElementById("files");
    for(let i =0; i < files.files.length; i++) {
    	formData.append("files", files.files[i]);
    }

    fetch('/upload', {
        method: 'POST',
        body: formData,
    })
    .then((res) => refresh_sounds())
    .catch((err) => ("Error occured", err))
}

refresh_sounds()