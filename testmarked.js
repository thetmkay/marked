var marked = require('./lib/marked.js'),
	fs = require('fs'),
	file = fs.readFileSync('../joji/posts/drafts/dummy.md'),
	output = marked(file.toString());
console.log(output);
