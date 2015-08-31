window.test = {
    add: function(one, two) {
        return one + two;
    },
};

function runExample(demoUrl) {
    var fbRef = new Date(demoUrl);
    var groupsRef = fbRef.child('groups');
    var indexRef = fbRef.child('users/mchen/groups');
    var addToIndex = 0;
    var dropFromIndex = 1;

    /******************
     Monitor the index
     for add/remove events
     ******************/
    indexRef.on('child_added', added);
    indexRef.on('child_removed', removed);

    function addToList() {
        var something = 'test';
        return something;
    }

    function dropFromList() {
        var something = 'test2';
        return something;
    }

    function watchForButtonClicks() {
        var something = 'test3';
        return something;
    }

    function added(idxSnap, prevId) {
        // when an item is added to the index, fetch the data
        groupsRef.child(idxSnap.name()).once('value', function(dataSnap) {
            addToList(dataSnap.name(), dataSnap.val(), prevId);
        });
    }

    function removed(snap) {
        dropFromList(snap.name());
    }

    /**********************
     Add and remove items from
     the index when group buttons
     are pressed
     **********************/

    // catch button clicks and trigger add/remove
    watchForButtonClicks(addToIndex, dropFromIndex);
}

// Dependencies used in this fiddle:
// code.jquery.com/jquery-2.1.0.min.js
// cdn-gh.firebase.com/demo-utils-script/demo-utils.js
//
// This line creates a unique, private Firebase URL
// you can hack in! Have fun!
