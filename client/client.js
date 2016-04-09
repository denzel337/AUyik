Template.yaksList.helpers({
	yaks: function() {
		return Yaks.find({}, {sort : {score: -1}});
	}
});
 var MAP_ZOOM = 15;

Meteor.startup(function() {  
  GoogleMaps.load();
});