function RateCtrl($scope, $http) {
  $scope.errorMessage = '';
  $scope.bottomMessage = '';
  $scope.messageSentFlag = 'show';

  // 
  // this sends in a password reset request
  //
  $scope.sendMessage = function() {
    if ($scope.checkValidEMail() && $scope.checkAllFieldsEntered())
      $scope.calcRate()
  };

  //
  $scope.checkAllFieldsEntered = function() {
    if ($scope.firstName==null || $scope.lastName==null)
      {$scope.errorMessage = 'Please provide a contact name above';
       return false;} 
    else
      {
       if ($scope.purpose==null ||
           $scope.msg==null || $scope.msg=='')
         {$scope.bottomMessage = 'Please describe what the purpose of the loan will be so we can better calculate the rate.';
          return false;}
       else
         return true
      }
  };

  //
  $scope.checkValidEMail = function() {
    if ($scope.emailAddress == null)
      $scope.errorMessage = 'Please Enter an e-mail Address'
    else
      if (/^.+@.+\.\w{2,4}$/.test($scope.emailAddress))
        {$scope.errorMessage = '';
         return true;}
      else
        $scope.errorMessage = 'E-Mail Address Invalid';
  };

  //
  $scope.calcRate = function() {
    $scope.bottomMessage = 'it works';
  };
  //
}
