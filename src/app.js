const mainText = new Vue({
	el: '#rate',
	data: {
		icon: {
			src: '../images/icon-star.svg',
			alt: 'icon'
		},
		title: 'How did we do?',
		text:
			'Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!',
		ratings: [
			{
				id: 1,
				rating: '1'
			},
			{
				id: 2,
				rating: '2'
			},
			{
				id: 3,
				rating: '3'
			},
			{
				id: 4,
				rating: '4'
			},
			{
				id: 5,
				rating: '5'
			}
		],
		submitText: 'Submit'
	}
});

const thankYou = new Vue({
	el: '#thankYou',
	data: {
		title: 'Thank you!',
		text:
			'  We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!'
	}
});

//ratings buttons
const one = document.getElementById('1');
const two = document.getElementById('2');
const three = document.getElementById('3');
const four = document.getElementById('4');
const five = document.getElementById('5');

one.addEventListener('click', () => {
	one.classList.add('active');
	two.classList.remove('active');
	three.classList.remove('active');
	four.classList.remove('active');
	five.classList.remove('active');
});

two.addEventListener('click', () => {
	two.classList.add('active');
	one.classList.remove('active');
	three.classList.remove('active');
	four.classList.remove('active');
	five.classList.remove('active');
});

three.addEventListener('click', () => {
	three.classList.add('active');
	one.classList.remove('active');
	two.classList.remove('active');
	four.classList.remove('active');
	five.classList.remove('active');
});

four.addEventListener('click', () => {
	four.classList.add('active');
	one.classList.remove('active');
	two.classList.remove('active');
	three.classList.remove('active');
	five.classList.remove('active');
});

five.addEventListener('click', () => {
	five.classList.add('active');
	one.classList.remove('active');
	two.classList.remove('active');
	three.classList.remove('active');
	four.classList.remove('active');
});
