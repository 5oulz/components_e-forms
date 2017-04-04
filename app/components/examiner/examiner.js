/*global define*/

define([
	'jquery',
	'underscore',
	'backbone',
	'templates'
], function ($, _, Backbone, JST) {
	'use strict';

	var ExaminerView = Backbone.View.extend({
		template: JST['app/components/examiner/examiner.hbs'],

		tagName: 'section',

		id: '',

		className: 'examiner-wrapper',

		events: {
		},

		initialize: function() {},

		render: function() {
			this.$el.html(this.template());
			return this;
		}
	});

	return ExaminerView;
});