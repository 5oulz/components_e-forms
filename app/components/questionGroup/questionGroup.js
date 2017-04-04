/*global define*/

define([
	'jquery',
	'underscore',
	'backbone',
	'templates'
], function ($, _, Backbone, JST) {
	'use strict';

	var QuestionGroupView = Backbone.View.extend({
		template: JST['app/components/questionGroup/questionGroup.hbs'],

		tagName: 'section',

		id: '',

		className: 'question-group-wrapper',

		events: {
		},

		initialize: function() {},

		render: function() {
			this.$el.html(this.template());
			return this;
		}
	});

	return QuestionGroupView;
});