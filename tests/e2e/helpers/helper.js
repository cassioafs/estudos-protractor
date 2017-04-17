'use strict'

const shortId  = require('shortid');
const uuid = require('node-uuid');

class Helper{
	generateRandomEmail(){
		return shortid.generate()+'@email.com';
	}

	generateRandomString(){
		return uui.v4();
	}

}

module.exports = Helper;