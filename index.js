'use strict'

function MyArrayProto() {
	this.push = function push() {
		for (let i = 0; i < arguments.length; i++) {
			this[this.length++] = arguments[i];
		}
		return this.length;
	};


	this.pop = function () {
		if (this.length === 0) {
			return;
		}
		const lastItem = this[this.length - 1];
		delete this[--this.length];
		return lastItem;
	};


	this.unshift = function unsift() {
		const arrArguments = [];
		for (let i = 0; i < arguments.length; i++) {
			arrArguments.push(arguments[i]);
		}
		for (let i = 0; i < this.length; i++) {
			arrArguments.push(this[i]);
		}
		for (let i = 0; i < arrArguments.length; i++) {
			this[i] = arrArguments[i];
		}

		return this.length = arrArguments.length;
	};


	this.shift = function shift() {
		const arrArguments = [];
		const firstItem = this[0];

		if (this.length === 0) {
			return;
		}
		for (let i = 1; i < this.length; i++) {
			arrArguments.push(this[i]);
		}
		for (let i = 0; i < arrArguments.length; i++) {
			this[i] = arrArguments[i];
		}
		delete this[--this.length];
		return firstItem;
	};


	this.forEach = function forEach(func) {
		for (let i = 0; i < this.length; i++) {
			func(this[i], i, this);
		}
	};


	this.some = function some(func) {
		for (let i = 0; i < this.length; i++) {
			if (func(this[i], i, this)) {
				return true;
			}
		}
		return false;
	};


	this.every = function every(func) {
		for (let i = 0; i < this.length; i++) {
			if (!func(this[i], i, this)) {
				return false;
			}
		}
		return true;
	};


	this.filter = function filter(checkFunction) {
		const result = new MyArray();
		for (let i = 0; i < this.length; i++) {
			if (checkFunction(this[i], i, this)) {
				result.push(this[i]);
			}
		}
		return result;
	};


}


/* Объекты с данными */
function MyArray(...args) {
	this.length = 0;

	for (let i = 0; i < arguments.length; i++) {
		this.push(arguments[i]);
	}
}


/* Создаём прототип(связь между объектами). Наследование */
MyArray.prototype = new MyArrayProto();

const myArr = new MyArray(1, 2, 2, 9, 8);