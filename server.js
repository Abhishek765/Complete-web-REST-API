var express = require('express');
var app = express();

var port = 8001;

app.use(express.static(__dirname + '/'));
app.listen(port);

console.log('Server listening on port' + port);

app.post('/api/login', function(req, res) {
    var results = [{
            title: "C++",
            instructor: "Saurabh shukla",
            level: "beginner",
            total_videos: 15
        },
        {
            title: "JAVA",
            instructor: "Saurabh shukla",
            level: "beginner",
            total_videos: 10
        },
        {
            title: "python",
            instructor: "Saurabh shukla",
            level: "beginner",
            total_videos: 12
        },
        {
            title: "Web development",
            instructor: "Shahid Sir",
            level: "beginner",
            total_videos: 20
        }
    ];
    res.json(results);
})