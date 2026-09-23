window.TrelloPowerUp.initialize({

  'board-buttons': function(t, options) {

    return [{
      text: '🧪 Test gebruiker',

      callback: function(t) {

        return t.boardBar({
          url: './test.html?v=1',
          height: 500,
          resizable: true,
          title: '🧪 Trello gebruiker test'
        });

      }
    }];

  }

});
