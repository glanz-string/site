var ConcertModel = Backbone.Model.extend({
  defaults: {
    post_content: null,
    post_title: null,
    image1: null,
    imamge2: null
  }    
});

var ConcertsCollection = Backbone.Collection.extend({
  model: ConcertModel,
  url: "http://glanz.s602.xrea.com/api/"
});
  
