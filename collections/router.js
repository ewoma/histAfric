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
			events: Events.find().fetch().reverse()
		}
	}
});

Router.route('/create_profile', function(){
	this.render('profile');
},
{
	name: 'profile',

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
// Router.route('events/:_id/details')
// this.render('createEventPicture')
// },
// {
// 	name: 'viewEventDetails'
// 	data: function(){
// 		return{

// 		}
// 	}
// });

// +Router.route('/events/:_id/join', function(){
// +	this.render('bookings');
// +},
// +{
// +	name: 'bookings',
// +	
// +	data: function(){
// +		var _id = this.params._id;
// +		return {
// +			eventsid: Events.findOne(_id),
// +			bookings: Bookings.find({eventsid:_id}).fetch()
// +		}
// +	}