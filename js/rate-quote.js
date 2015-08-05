function RateCtrl($scope, $http) {
  $scope.errorMessage = '';
  $scope.bottomMessage = '';
  $scope.messageSentFlag = 'show';
  $scope.showRateFlag = false;

  // 
  // this sends in a password reset request
  //
  $scope.getQuote = function() {
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
       if ($scope.loanPurpose==null)
         {$scope.bottomMessage = 'Please describe what the purpose of the loan will be so we can better calculate the rate.';
          return false;}
       else
         if ($scope.loanTerm==null)
           {$scope.bottomMessage = 'Please provide a length for the loan so that we can better calculate a rate to offer.';
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

  // calculate the rate - all field validation has been passed
  $scope.calcRate = function() {

    var baseRate = 9.99;
    var duration = Number($scope.loanTerm);
    var adjustedRate = (baseRate - (duration/12));

    $scope.bottomMessage = String(adjustedRate);

    $scope.showRateFlag = true;

  };
  //
}
