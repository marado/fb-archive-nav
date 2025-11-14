// This file is Licensed as AGPLv3
// (c) Marcos Marado <mindboosternoori@gmail.com>, 2025
//
// The latest version of it can probably be found at
// https://github.com/marado/fb-archive-nav

// TODO: include the actual license
// TODO: tag the license as free according to GNU's LibreJS guidelines


function identity() {
	// TODO
}

function yearNav() {
	// TODO:
	// 1. check what years exist and create a navbar for them
	// 2. check if we're trying to display just one of the years (and act accordingly)
}

function order() {
	// TODO
}

function hideEmpty() {
	// There are "a few" (more than 1000) sections with only one <div class="_2pin">, and where that div is empty.
	// In those cases, we want to hide that entire section...
	const sections = document.querySelectorAll('section');
	sections.forEach(section => {
		const pinDivs = section.querySelectorAll('div._2pin');
		// TODO: validate if this is the right assumption. What if there are several pinDivs and all of them are empty?
		if (pinDivs.length === 1) {
			const pinDiv = pinDivs[0];
			const isEmpty = ((pinDiv.textContent.trim() === "") && (pinDiv.children.length === 1));
			if (isEmpty) {
				section.style.display = "none";
			}
			delete isEmpty;
			delete pinDiv;
		}
		delete pinDivs;
	});
	delete sections;
}

function fbArchiveNav() {
	// According to the README, this is this script achieves:
	// * You want to announce it as your activity, not the readers;
	identity();
	// * You want to be able to navigate by year;
	yearNav();
	// * You want to hide all those empty entries that are showed up in there;
	hideEmpty();
	// * You want the page data to be shown in chronologic order...
	order();

	// FIXME: this is quite innefecient: each of these functions will cycle
	// through everything (at least once) and we'll be doing it over and over
	// again... Once this is implemented, let's optimize it!
}
