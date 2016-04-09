Yaks = new Meteor.Collection('yaks');

Comments = new Mongo.Collection("comments");

Router.route('/', {name: 'accounts'});

Router.route('/wellness', {name: 'wellness'});

Router.route('/wellnesssubmit', {name: 'wellnessSubmit'});

Router.route('/wellnesslist', {name: 'wellnessList'});

Router.route('/yakslist', {name: 'yaksList'});

Router.route('/submit', {name: 'yaksSubmit'});

Router.route('/login', {name: 'firstpage'});

Router.route('/library', {name: 'library'});

Router.route('/dorms', {name: 'dorms'});

Router.route('/banquethall', {name: '/banquetHall'});

Router.route('/spartanspot', {name: '/spartanSpot'});

Router.route('/yaks/:_id', {
	name: 'yakPage',
	data: function() {
		return Yaks.findOne(this.params._id);
	}
});