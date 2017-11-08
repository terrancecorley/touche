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
				for (let i = 0; i < bfastItems.length; i += 1) {
					let bfastItem = bfastItems[i];
					bfastItem.style.display = 'initial';
				}
				for (let i = 0; i < lunchItems.length; i += 1) {
					let lunchItem = lunchItems[i];
					lunchItem.style.display = 'initial';
				}
				for (let i = 0; i < dinnerItems.length; i += 1) {
					let dinnerItem = dinnerItems[i];
					dinnerItem.style.display = 'initial';
				}
			}

			// when bfast btn clicked, show bfast, hide lunch & dinner items
			if (currentBtn.textContent.toUpperCase() === 'BREAKFAST') {
				for (let i = 0; i < bfastItems.length; i += 1) {
					let bfastItem = bfastItems[i];
					bfastItem.style.display = 'initial';
				}
				for (let i = 0; i < lunchItems.length; i += 1) {
					let lunchItem = lunchItems[i];
					lunchItem.style.display = 'none';
				}
				for (let i = 0; i < dinnerItems.length; i += 1) {
					let dinnerItem = dinnerItems[i];
					dinnerItem.style.display = 'none';
				}
			}

			// when lunch btn clicked, show lunch, hide bfast & dinner items
			if (currentBtn.textContent.toUpperCase() === 'LUNCH') {
				for (let i = 0; i < bfastItems.length; i += 1) {
					let bfastItem = bfastItems[i];
					bfastItem.style.display = 'none';
				}
				for (let i = 0; i < lunchItems.length; i += 1) {
					let lunchItem = lunchItems[i];
					lunchItem.style.display = 'initial';
				}
				for (let i = 0; i < dinnerItems.length; i += 1) {
					let dinnerItem = dinnerItems[i];
					dinnerItem.style.display = 'none';
				}
			}

			// when dinner btn clicked, show dinner, hide bfast & lunch items
			if (currentBtn.textContent.toUpperCase() === 'DINNER') {
				for (let i = 0; i < bfastItems.length; i += 1) {
					let bfastItem = bfastItems[i];
					bfastItem.style.display = 'none';
				}
				for (let i = 0; i < lunchItems.length; i += 1) {
					let lunchItem = lunchItems[i];
					lunchItem.style.display = 'none';
				}
				for (let i = 0; i < dinnerItems.length; i += 1) {
					let dinnerItem = dinnerItems[i];
					dinnerItem.style.display = 'initial';
				}
			} 
		}
	
	});

});

