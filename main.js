document.addEventListener('DOMContentLoaded', () => {

	const galleryBtns = document.querySelector('.gallery-buttons');
	const bfastItems = document.getElementsByClassName('bfast-item');
	const lunchItems = document.getElementsByClassName('lunch-item');
	const dinnerItems = document.getElementsByClassName('dinner-item');
	
	galleryBtns.addEventListener('click', (e) => {
		// when target btn is clicked add .selected-btn & remove from sibs
		if (e.target.tagName === 'BUTTON') {
			const currentBtn = e.target;
			const siblingBtns = currentBtn.parentElement.children;
			for (let i = 0; i < siblingBtns.length; i += 1) {
				let currentSibBtn = siblingBtns[i];
				currentSibBtn.className = 'gallery-btn';
			}
			currentBtn.className = 'gallery-btn selected-btn';
			
			// when all btn clicked, show all food items
			if (currentBtn.textContent.toUpperCase() === 'ALL') {
				bfastItems.style.display = 'initial';
				lunchItems.style.display = 'initial';
				dinnerItems.style.display = 'initial';
			}

			// when bfast btn clicked, show bfast, hide lunch & dinner items
			if (currentBtn.textContent.toUpperCase() === 'BREAKFAST') {
				bfastItems.style.display = 'initial';
				lunchItems.style.display = 'none';
				dinnerItems.style.display = 'none';
			}

			// when lunch btn clicked, show lunch, hide bfast & dinner items
			if (currentBtn.textContent.toUpperCase() === 'BREAKFAST') {
				bfastItems.style.display = 'none';
				lunchItems.style.display = 'initial';
				dinnerItems.style.display = 'none';
			}

			// when dinner btn clicked, show dinner, hide bfast & lunch items
			if (currentBtn.textContent.toUpperCase() === 'BREAKFAST') {
				bfastItems.style.display = 'none';
				lunchItems.style.display = 'none';
				dinnerItems.style.display = 'initial';
			} 
		}
	
	});

});

