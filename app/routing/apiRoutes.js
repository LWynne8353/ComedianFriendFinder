var comedians = require("../data/comedianfriends")

module.exports =(function(app){

    app.post("/api/comedianfriends", function(req, res){
        // 6. Determine the user's most compatible friend using the following as a guide:

        // * Convert each user's results into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).
        // * With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the `totalDifference`.
        //   * Example:
        //     * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
        //     * User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
        //     * Total Difference: **2 + 1 + 2 =** **_5_**
        // * Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both `5-3` and `3-5` as `2`, and so on.
        // * The closest match will be the user with the least amount of difference.
      var bestMatch = {
          name: "",
          photo: "",
          friendDifference: Infinity
      }
      var userData = req.body
      var userScores = userData.scores
      var totalDifference;
      //for loop of comedians score 
      for (var i = 0; i< comedians.length; i++){
          var currentFriend = comedians[i]
          totalDifference = 0
          //for loop of user score
          for ( var j = 0; j< currentFriend.scores.length; j++){
              var currentFriendScore = currentFriend.scores[j];
              var currentUserScore = userScores[j];
              totalDifference += Math.abs(parseInt(currentUserScore)-parseInt(currentFriendScore));
          }
          //retreive result from the loop score difference
          if (totalDifference <= bestMatch.friendDifference){
              bestMatch.name = currentFriend.name
              bestMatch.photo = currentFriend.photo
              bestMatch.friendDifference = totalDifference
          }
      }
      //adding User
      comedians.push(userData)
        res.json(bestMatch)
    });
    app.get("/api/comedianfriends", function (req, res){
        res.json(comedians)
    });
})