/*
** IEMKA Routing
** 1.0 Init Build
** Developed by Triadi Prabowo
*/

var app = require('express').Router(),
	meta = require('./meta'),
	favicon = require('serve-favicon');

module.exports = (function() {
	'use strict';

	// Favicon
	app.use(favicon(ROOT_DIR+'/dist/img/favicon.jpg'));

	app.get('/', function(req, res, next) {
		res.render('index', {
			page: {
				title: 'Welcome to IEMKA Design & Architecture',
				description: meta.description.general,
				keywords: meta.keywords.general,
				controller: 'iemIndexCtrl',
				stylesheet: ['all.min.css'],
				scripts: {
					controller: ['/dist/js/ctrl.index.js']
				}
			}
		});
	});

	return app;
})();