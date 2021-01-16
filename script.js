'use strict'

class MyArray {
	constructor() {
		this.length = 0;


		for (let i = 0; i < arguments.length; i++) {
			this.push(arguments[i]);
		}
	}

	push() {
		for (let i = 0; i < arguments.length; i++) {
			this[this.length++] = arguments[i];
		}
		return this.length;
	}

	pop() {
		if (this.length === 0) {
			return;
		}
		const lastItem = this[this.length - 1];
		delete this[--this.length];
		return lastItem;
	}

	unsift() {
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
	}

	shift() {
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
	}

	concat() {
		const arrConcat = new MyArray();
		for (let i = 0; i < this.length; i++) {
			arrConcat.push(this[i]);
		}
		for (let i = 0; i < arguments.length; i++) {
			arrConcat.push(arguments[i]);
		}
		return arrConcat;
	}

	revers() {
		const arrRevers = [];
		for (let i = this.length - 1; i >= 0; i--) {
			arrRevers.push(this[i]);
		}
		for (let i = 0; i < arrRevers.length; i++) {
			this[i] = arrRevers[i];
		}
		return this;
	}

	forEach(func) {
		for (let i = 0; i < this.length; i++) {
			func(this[i]);
		}
	}

	map(func) {
		const arrMap = new MyArray();
		for (let i = 0; i < this.length; i++) {
			arrMap.push(func(this[i], i, this));
		}
		return arrMap;
	}

	some(func) {
		for (let i = 0; i < this.length; i++) {
			if (func(this[i], i, this)) {
				return true;
			}
		}
		return false;
	}

	every(func) {
		for (let i = 0; i < this.length; i++) {
			if (!func(this[i], i, this)) {
				return false;
			}
		}
		return true;
	}

	filter(checkFunction) {
		const result = new MyArray();
		for (let i = 0; i < this.length; i++) {
			if (checkFunction(this[i], i, this)) {
				result.push(this[i]);
			}
		}
		return result;
	}

	static isMyArray(obj) {
		return obj instanceof MyArray;
	}
}
