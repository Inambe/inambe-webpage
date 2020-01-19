const { find } = require("lodash");

const db = require("./db");

const uses = db.uses;

class Uses {
	static all() {
		return uses;
	}
	static getById(id) {
		return find(uses, u => u.id == id);
	}
}
module.exports = Uses;
