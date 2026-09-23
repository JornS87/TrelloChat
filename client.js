window.TrelloPowerUp.initialize({

  'board-buttons': function(t, options) {

    return [{
      text: '💬 Chat',

      callback: function(t) {

        return t.boardBar({
          url: './chat.html?v=11',

          // Hoger dan de oude 500px,
          // zodat het meer als een echte chat voelt.
          height: 750,

          resizable: true,

          title: '💬 Badfellas Chat'
        });

      }
    }];

  }

});
