window.TrelloPowerUp.initialize({

  'board-buttons': function(t, options) {

    return [{
      text: '💬 Chat',

      callback: function(t) {

        return t.popup({
          title: '💬 Badfellas Chat',
          url: './chat.html?v=13',
          height: 650
        });

      }
    }];

  }

});
