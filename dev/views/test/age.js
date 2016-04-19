import _ from 'underscore';

import BaseView from 'crimson-backbone/src/views/base';

import testStyles from 'dev/styles/test.css';
import gameStyles from 'dev/styles/test/game.css';

export default class extends BaseView {

	get className() { return testStyles.step; }

	get _template() { return require('dev/templates/test/age.handlebars') }

	init() {
		this.render();
	}

	_prepareData(data = {}) {
		return _.extend(data, {
			testStyles: testStyles,
			gameStyles: gameStyles
		});
	}
}