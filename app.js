
var app = angular.module("collegeApp", []);

// Parent Controller
app.controller("CollegeController", function($scope) {

    $scope.collegeName = "Maharaja Institute of Technology";

});

// Child Controller
app.controller("StudentController", function($scope) {

    // Sample student names
    $scope.students = [
        "Rahul",
        "Arun",
        "Kiran"
    ];

    // Initially hide student details
    $scope.showDetails = false;

    // Function to add student
    $scope.addStudent = function() {

        if ($scope.name) {

            $scope.students.push($scope.name);

            // Clear name input
            $scope.name = "";

        }

    };

});
