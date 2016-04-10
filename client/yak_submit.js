// Template.yaksSubmit.events({
// 	'submit .yaksSubmitForm': function(event,err) {

// 		event.preventDefault();
// 		var postTitle = event.target.postTitle.value; 		// get yakTitle value
// 		var yak = event.target.yak.value; 		// get yak value

// 		// check if the value is empty
// 		if (yak == "") {
// 			alert("Post details");
// 		} else {
// 			Meteor.call('yakInsert', yak);
// 			Meteor.call('postTitleInsert', postTitle)
// 			/*post._id = Yaks.insert(post);*/
// 			Router.go('yaksList');
// 		}
		
// 	}
// });

Template.yaksSubmit.events({
	'submit form': function(e) {
	e.preventDefault();

	var post = {
		postTitle: $(e.target).find('[name=postTitle]').val(),
		yak: $(e.target).find('[name=yak]').val()
	};
		// Yak and postTitle are retrieved from the post object.  
		// Checks to make sure that postTitle and yak aren't empty
		if ((post.postTitle !== "") && (post.yak !== "")) {
			post._id = Yaks.insert(post);
			Router.go('yaksList', post);
		} else {
			alert("Your title and yak cannot be left blank...");
		}
	}
});