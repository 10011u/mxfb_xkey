const genId1 = require('xicf_xid');
const genId2 = require('mzsv_xid');
const crypto = require('crypto');

function generateKey() {
	var  sha1 = crypto.createHash('sha1');
	return sha1.update(genId1() + '|Ocm4YmjSGZ|' + genId2()).digest('base64');
}


module.exports = generateKey;
