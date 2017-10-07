$('#btn').click(function(){
    location.reload();
    $('html, body').animate({
        scrollTop: $(".second").offset().top
    }, 5000);
});



// This is called with the results from from FB.getLoginStatus().
function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
        // Logged into your app and Facebook.
        testAPI();
    } else {
        // The person is not logged into your app or we are unable to tell.
        document.getElementById('status').innerHTML = 'Please log ' +
            'into this app.';
    }
}

// This function is called when someone finishes with the Login
// Button.  See the onlogin handler attached to it in the sample
// code below.
function checkLoginState() {
    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });
}

window.fbAsyncInit = function() {
    FB.init({
        appId      : '1899569010368343',
        cookie     : true,  // enable cookies to allow the server to access
                            // the session
        xfbml      : true,  // parse social plugins on this page
        version    : 'v2.8' // use graph api version 2.8
    });

    // Now that we've initialized the JavaScript SDK, we call
    // FB.getLoginStatus().  This function gets the state of the
    // person visiting this page and can return one of three states to
    // the callback you provide.  They can be:
    //
    // 1. Logged into your app ('connected')
    // 2. Logged into Facebook, but not your app ('not_authorized')
    // 3. Not logged into Facebook and can't tell if they are logged into
    //    your app or not.
    //
    // These three cases are handled in the callback function.

    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);


        if (response.authResponse){

            var token = response.authResponse.accessToken;
            var uid = response.authResponse.userID;

            //Generic Data
            FB.api('/'+uid, 'get', { access_token: token, fields: 'id,name,link,gender,about,age_range,context,devices,' +
            'hometown,languages,email,education,security_settings,timezone,website,work,cover,birthday,currency,updated_time'}, function(response) {
                console.log(response);
                //$('#data').append(response.name);
                $('#intro').append('<img width="100%" src="'+response.cover.source+'">');

                $('#sub2').append(response.name);
                $('#details').append('<p>Age Range : '+response.age_range.min+' to '+response.age_range.max+'</p>' +
                    '<p>Gender : '+response.gender+'</p>' +
                    '<p>Email ID : '+response.email+'</p>');
                $('#details').append('<a href="'+response.link+'"><i class="fa fa-facebook-square" style="font-size:40px;" aria-hidden="true"></i></a>');
            });


            //Profile Picture
            FB.api(
                "/"+uid+"/picture",
                function (response) {
                    if (response && !response.error) {
                        /* handle the result */
                        console.log(response);
                       // $('#data').append('<img src="'+response.data.url+'">');
                        $('#sub1').append('<img class="z-depth-5 circle" height="250px"  src="'+response.data.url+'">');
                    }
                }
            );

            //Game achievements
            FB.api(
                "/"+uid+"/achievements",
                function (response) {
                    if (response && !response.error) {
                        /* handle the result */
                        console.log(response);
                    }
                }
            );

            //Ad accounts to which the user has access
            FB.api(
                "/"+uid+"/adaccounts",
                function (response) {
                    if (response && !response.error) {
                        /* handle the result */
                        console.log(response);
                    }
                }
            );

            var album1;

            //albums
            FB.api(
                "/"+uid+"/albums",'get',{ access_token: token},
                function (response) {
                    if (response && !response.error) {
                        /* handle the result */
                        console.log(response);
                        album1=response.data[0].id;

                    }
                }
            );

            FB.api(
                "/"+album1+"/photos",'get',{ access_token: token},
                function (response) {
                    if (response && !response.error) {
                        /* handle the result */
                        console.log(response);
                        $('#data').append(response);
                    }
                }
            );





            //graph.facebook.com/me/albums?fields=id&access_token=...

            //books
            FB.api(
                "/"+uid+"/books",
                function (response) {
                    if (response && !response.error) {
                        /* handle the result */
                        console.log(response);
                    }
                }
            );



            //conversations
            FB.api(
                "/"+uid+"/conversations",'get',{ access_token: token },
                function (response) {
                    if (response && !response.error) {
                        /* handle the result */
                        console.log(response);
                    }
                }
            );




            //events
            FB.api(
                "/"+uid+"/events",
                function (response) {
                    if (response && !response.error) {
                        /* handle the result */
                        console.log(response);
                    }
                }
            );

            //family
            FB.api(
                "/"+uid+"/family",
                function (response) {
                    if (response && !response.error) {
                        /* handle the result */
                        console.log(response);
                    }
                }
            );

            //custom friendlists
            FB.api(
                "/"+uid+"/friendlists",
                function (response) {
                    if (response && !response.error) {
                        /* handle the result */
                        console.log(response);
                    }
                }
            );

            //friends
            FB.api(
                "/"+uid+"/friends",
                function (response) {
                    if (response && !response.error) {
                        /* handle the result */
                        console.log(response);
                    }
                }
            );


            //games
            FB.api(
                "/"+uid+"/games",
                function (response) {
                    if (response && !response.error) {
                        /* handle the result */
                        console.log(response);
                    }
                }
            );

            //invitable friends
            FB.api(
                "/"+uid+"/invitable_friends",
                function (response) {
                    if (response && !response.error) {
                        /* handle the result */
                        console.log(response);
                    }
                }
            );

            //liked pages
            FB.api(
                "/"+uid+"/likes",
                function (response) {
                    if (response && !response.error) {
                        /* handle the result */
                        console.log(response);
                    }
                }
            );


            //music liked
            FB.api(
                "/"+uid+"/music",
                function (response) {
                    if (response && !response.error) {
                        /* handle the result */
                        console.log(response);
                    }
                }
            );

            //objects
            FB.api(
                "/"+uid+"/objects",
                function (response) {
                    if (response && !response.error) {
                        /* handle the result */
                        console.log(response);
                    }
                }
            );

            // var photo0;

            //photos
            FB.api(
                "/"+uid+"/photos",'get',{ access_token: token, fields:'images'},
                function (response) {
                    if (response && !response.error) {
                        /* handle the result */
                        console.log(response);

                        for (var i=0;i<response.data.length;i++){
                            // for (var j=0;j<response.data[i].images.length;j++)
                            //   {
                            $('#data').append('<div class="div1a"><img width="100%" src="'+response.data[i].images[0].source+'"></div>');
                            //   }
                        }
                    }
                }
            );
            // FB.api(
            //         "/"+photo0,'get',{ access_token: token, fields:'images'},
            //         function (response) {
            //             if (response && !response.error) {
            //                 /* handle the result */
            //                 console.log(response);
            //                 $('#data').append(response);
            //             }
            //         }
            // );

            // //tagged places
            // FB.api(
            //     "/"+uid+"/tagged_places",
            //     function (response) {
            //         if (response && !response.error) {
            //             /* handle the result */
            //             console.log(response);
            //         }
            //     }
            // );

            //conversation threads
            FB.api(
                "/"+uid+"/threads",
                function (response) {
                    if (response && !response.error) {
                        /* handle the result */
                        console.log(response);
                    }
                }
            );

            //liked tv shows
            FB.api(
                "/"+uid+"/television",
                function (response) {
                    if (response && !response.error) {
                        /* handle the result */
                        console.log(response);
                    }
                }
            );

            //read posts
            FB.api(
                "/"+uid+"/feed","GET",{ access_token: token},
                function (response) {
                    if (response && !response.error) {
                        /* handle the result */
                        console.log(response);
                        $('#data').append(response);
                    }
                }
            );


            //publish posts
            $('#publish').click(function(){
                var rr=$('.enter').val();
                console.log(rr);
                FB.api(
                    "/me/feed",
                    "POST",
                    {
                        "message": 'i am presenting my project'

                    },
                    function (response) {
                        if (response && !response.error) {
                            /* handle the result */
                        }
                    }
                );

            });

            //notifications
            FB.api(
                "/"+uid+"/notifications",'post',
                function (response) {
                    if (response && !response.error) {
                        /* handle the result */
                        console.log(response);

                    }
                }
            );



            // FB.login(function(response) {
            //     if (response.authResponse) {
            //         M.FB.setIsAuthorised(true);
            //         //  On success.
            //         FB.api(
            //             "/" + uid + "/albums", 'get', {access_token: token},
            //             function (response) {
            //                 if (response && !response.error) {
            //                     /* handle the result */
            //                     console.log(response);
            //                 }
            //             }
            //         );
            //     }
            // }, {
            //     scope: 'email,user_photos,publish_actions'
            // });

        }




    },
        {
            scope: 'read_stream, email,user_photos,publish_actions,user_posts,user_friends,read_insights,user_status, read_mailbox'
        }
    );




//        FB.api('/me', function(response) {
//            console.log(JSON.stringify(response));
//        });
};





// Load the SDK asynchronously
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// Here we run a very simple test of the Graph API after login is
// successful.  See statusChangeCallback() for when this call is made.
function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {
        console.log('Successful login for: ' + response.name);
        document.getElementById('status').innerHTML =
            'Thanks for logging in, ' + response.name + '!';
    });
}


