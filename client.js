window.TrelloPowerUp.initialize({

  'board-buttons': function(t, options) {

    return [{
      text: '💬 Chat',

      callback: function(t) {

        return t.boardBar({
          url: './chat.html?v=2',
          height: 500,
          resizable: true,
          title: '💬 Team Chat'
        });

      }
    }];

  }

});
