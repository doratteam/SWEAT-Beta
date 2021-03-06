angular.module('starter.controllers')
.controller('signupGenderCtrl', ['$scope', '$state', '$stateParams', function($scope, $state, $stateParams) {

	$scope.$on('$ionicView.beforeEnter', function() {
		$scope.userModel = $stateParams.userModel;
	});

	$scope.genderList = [
        { text: "Male", value: "male" },
        { text: "Female", value: "female" }
    ];

    $scope.updateGender = function(gender) {
        $scope.userModel.gender = gender.value;
    }

    $scope.signup_next = function() {
        $state.go('signup-expertise', {userModel:$scope.userModel});
    }

    $scope.signup_prev = function() {
        $state.go('signup-basicInfo', {userModel:$scope.userModel});
    }
}])