/*global define*/

define([
	'jquery',
	'backbone',
	'../../components/examiner/examiner',
	'../../components/questionGroup/questionGroup'
], function ($, Backbone, ExaminerView, QuestionGroupView) {
	'use strict';

	var RouterRouter = Backbone.Router.extend({
		routes: {
		},

		initialize: function() {
			this.initComponents();
		},

		initComponents: function() {
			App.Components = [];
			App.MainView = $('.app-content');
			this.initExaminer();
			this.initQuestionGroup();
		},

		initExaminer: function() {
			let comp = new ExaminerView();

			App.MainView.append(comp.render().el);
			App.Components.push(comp);
		},

		initQuestionGroup: function() {
			let comp = new QuestionGroupView();

			App.MainView.append(comp.render().el);
			App.Components.push(comp);
		}
	});

	return RouterRouter;
});
