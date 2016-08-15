

const colors = ['red','yellow','blue','green'];

function *colorGenerator () {

	for (let x=0; x<colors.length; x++) {
		yield colors[x];
	}

}

const colorManager = {};

colorManager[Symbol.iterator] = colorGenerator;


for (let color of colorManager) {
	console.log(color);
}
