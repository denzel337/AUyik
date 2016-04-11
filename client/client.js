Template.yaksList.helpers({
	yaks: function() {
		return Yaks.find({}, {sort : {score: -1}});
	}
});
 Template.library.helpers({
	yaks: function() {
		return Yaks.find({}, {sort : {score: -1}});
	}
});
  Template.dorms.helpers({
	yaks: function() {
		return Yaks.find({}, {sort : {score: -1}});
	}
});
   Template.spartanSpot.helpers({
	yaks: function() {
		return Yaks.find({}, {sort : {score: -1}});
	}
});
    Template.banquetHall.helpers({
	yaks: function() {
		return Yaks.find({}, {sort : {score: -1}});
	}
});