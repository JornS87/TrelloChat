window.TrelloPowerUp.initialize({

  'board-buttons': function(t, options) {

    return [{
      text: '💬 Chat',

      callback: function(t) {

        return t.boardBar({
          url: './chat.html',
          height: 500,
          resizable: true,
          title: '💬 Team Chat'
        });

      }
    }];

  }

});