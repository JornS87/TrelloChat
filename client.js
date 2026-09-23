window.TrelloPowerUp.initialize({

  'board-buttons': function(t, options) {

    return [{
      text: '💬 Development Chat',

      callback: function(t) {

        return t.modal({
          url: './chat.html?v=15',
          fullscreen: false,
          title: '💬 Badfellas Development Chat',
          height: 700
        });

      }
    }];

  }

});
