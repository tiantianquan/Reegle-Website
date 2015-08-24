angular.module('admin.controllers', [])

.controller('NewsCtrl', function($scope, News, $state) {
  News.getAll(function(data) {
    $scope.data = data
  })
})

.controller('NewsDetailCtrl', function($scope, $stateParams, News, Upload, $timeout) {
  $scope.uploadFiles = function(file) {
    $scope.f = file;
    if (file && !file.$error) {
      file.upload = Upload.upload({
        url: '/admin/upload',
        file: file
      });

      file.upload.then(function(response) {
        $timeout(function() {
          file.result = response.data;
          $scope.path = '/images/' + file.result.filename
        });
      }, function(response) {
        if (response.status > 0)
          $scope.errorMsg = response.status + ': ' + response.data;
      });

      file.upload.progress(function(evt) {
        file.progress = Math.min(100, parseInt(100.0 *
          evt.loaded / evt.total));
      });
    }
  }

  News.get($stateParams.id, function(data) {
    $scope.news = data
  })

  $scope.submit = function() {
    News.update($scope.news._id, $scope.news)
  }
})

.controller('NewsCreateCtrl', function($scope, $stateParams, News) {
  $scope.submit = function() {
    News.create($scope.news)
  }
})