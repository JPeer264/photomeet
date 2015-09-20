angular
    .module('pages.header')
    .controller('headerController', headerController);

headerController.$inject = [
    '$scope',
    'authService'
];

function headerController($scope, authService) {
    
    // todo get all images from /uploads/weekly und /uploads/monthly
    $scope.images = [
        {
            src: 'http://www.doliwa-naturfoto.de/Bilder-Galerie/Tiere/Katzen/Katze4/wd_2101.jpg'
        },
        {
            src: 'http://cdn.instructables.com/FJ6/HL34/HG85CQD9/FJ6HL34HG85CQD9.MEDIUM.jpg'
        },
        {
            src: 'http://www.designladen.com/natur/source/image/wolken.pict3574.jpg'
        },
        {
            src: 'http://www.prophoto-online.de/images_2014/3/9245/Kister-Josef-Orang-Utan-hochformat.jpg'
        },
        {
            src: 'http://www.juergen-baur.de/wordpress/wp-content/uploads/2012/06/Menschen-hochformat-131.jpg'
        },
        {
            src: 'http://cdn.instructables.com/FJ6/HL34/HG85CQD9/FJ6HL34HG85CQD9.MEDIUM.jpg'
        },
        {
            src: 'http://cdn.instructables.com/FJ6/HL34/HG85CQD9/FJ6HL34HG85CQD9.MEDIUM.jpg'
        },
        {
            src: 'http://cdn.instructables.com/FJ6/HL34/HG85CQD9/FJ6HL34HG85CQD9.MEDIUM.jpg'
        },
        {
            src: 'http://cdn.instructables.com/FJ6/HL34/HG85CQD9/FJ6HL34HG85CQD9.MEDIUM.jpg'
        },
        {
            src: 'http://cdn.instructables.com/FJ6/HL34/HG85CQD9/FJ6HL34HG85CQD9.MEDIUM.jpg'
        },
        {
            src: 'http://cdn.instructables.com/FJ6/HL34/HG85CQD9/FJ6HL34HG85CQD9.MEDIUM.jpg'
        },
        {
            src: 'http://cdn.instructables.com/FJ6/HL34/HG85CQD9/FJ6HL34HG85CQD9.MEDIUM.jpg'
        },
        {
            src: 'http://cdn.instructables.com/FJ6/HL34/HG85CQD9/FJ6HL34HG85CQD9.MEDIUM.jpg'
        },
        {
            src: 'http://cdn.instructables.com/FJ6/HL34/HG85CQD9/FJ6HL34HG85CQD9.MEDIUM.jpg'
        }
    ];

    /**
     * Change the $scope clicked
     *
     * @param boo {Boolean}
     */
    $scope.popupLogin = function(boo) {
        $scope.clicked = boo;
    };
    $scope.clicked = false;


    (function(){
        var leftVal = parseInt($('#images').css('left'));

        leftVal = leftVal - 20;
        $('#images').css({
            'left': leftVal
        });

        setInterval(function() {
            
            leftVal = leftVal - 20;
            // console.log(leftVal);
            $('#images').css({
                'left': leftVal
            });
        }, 999);

    })();
}
