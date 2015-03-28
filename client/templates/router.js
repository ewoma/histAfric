Router.configure({
	layoutTemplate: "masterLayout",
	loadingTemplate: "loadingTemplate",
	notFoundTemplate: '404'
	
})

Router.route('/', function(){
	this.render('home');
},
{
	name: 'home'
});

Router.route('/events', function(){
	this.render('events');
},
{
	name: 'events',
	data: function(){
		return {
			createevents: Events.find().fetch().reverse()
		}
	}
});

Router.route('/create_profile', function(){
	this.render('profile');
},
{
	name: 'profile'

});
Router.route('/profile', function(){
	this.render('view_profile');
},
{
	name: 'view_profile',
	data: function(){
		return{
			profiles: Profiles.find().fetch()
		}
	}
});
Router.route('/events/:_id/view_event_pictures', function(){
	this.render('createEventPicture');
},
{
	name: 'eventPictures',
	
	data: function(){
		var _id = this.params._id;
		return {
			createevents: Events.findOne(_id),
			eventpictures: EventPictures.find({createevents:_id}).fetch()
		}
	}

});

// Router.route('/dashboard/job/applications/:_id', function(){
// 	this.render('viewapplications');
// },
// {
// 	name: 'viewapplications',
// 	waitOn: function(){
// 		var _id = this.params._id;
// 		Meteor.subscribe('applications',_id)
// 	},
// 	data: function(){
// 		var _id = this.params._id;
// 		return{ 
// 			job: Jobs.findOne(_id),
// 			applications: Applications.find({job: _id}).fetch()

// 		}
// 	}
// })