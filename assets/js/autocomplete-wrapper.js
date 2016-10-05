$( function() {
    var availablePosts;

    /* Grab data from search.json */
    $.getJSON( "../search.json", function( data ) {
        var availablePosts = [];

        /* Map search.json into an array containing only titles and urls */
        availablePosts = $.map(data, function (k, v) {
            return k;
        })

        $( "#tags" ).autocomplete({
            source: availablePosts,
            select:function(e,ui) {
              location.href = ui.item.url;
            }
        });
    });

  } );