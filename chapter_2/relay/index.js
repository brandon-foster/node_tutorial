prefix = 'Relaying: '; // prefix currently is a global variable

module.exports = function (message) {
	console.log(prefix + message);
};