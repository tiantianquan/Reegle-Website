angular.module('admin.controllers', [])


//News
.controller('NewsCtrl', function($scope, News, $state) {
  $scope.newses = News.query()
})

.controller('NewsEditCtrl', function($scope, $stateParams, News, Upload, $timeout) {
  $scope.uploadFiles = function(file) {
    $scope.f = file;
    if (file && !file.$error) {
      file.upload = Upload.upload({
        url: '/admin/upload',
        file: file
      })

      file.upload.then(function(response) {
        $timeout(function() {
          file.result = response.data;
          $scope.path = '/images/' + file.result.filename
          $scope.news.content += '<img src="' + $scope.path + '">'
        })
      }, function(response) {
        if (response.status > 0)
          $scope.errorMsg = response.status + ': ' + response.data;
      })

      file.upload.progress(function(evt) {
        file.progress = Math.min(100, parseInt(100.0 *
          evt.loaded / evt.total));
      })
    }
  }

  $scope.news = News.get({
    id: $stateParams.id
  })

  $scope.submit = function() {
    $scope.news.$update(function() {
      console.log('success')
    }, function() {
      console.log('fail')
    })
  }
})

.controller('NewsCreateCtrl', function($scope, $stateParams, News) {
  $scope.news = new News()
  $scope.submit = function() {
    $scope.news.$save(function() {})
  }
})



//serve
.controller('ServeCtrl', function($scope, Serve, $state) {
  $scope.serves = Serve.query()
})

.controller('ServeEditCtrl', function($scope, $stateParams, Serve, Upload, $timeout) {
  $scope.serve = Serve.get({
    id: $stateParams.id
  })

  $scope.submit = function() {
    $scope.serve.$update(function() {
      console.log('success')
    }, function() {
      console.log('fail')
    })
  }
})

.controller('ServeCreateCtrl', function($scope, $stateParams, Serve) {
  $scope.serve = new Serve()
  $scope.submit = function() {
    $scope.serve.$save(function() {

    })
  }
})


//solution
.controller('SolutionCtrl', function($scope, Solution, $state) {
  $scope.solutions = Solution.query()
})

.controller('SolutionEditCtrl', function($scope, $stateParams, Solution, Upload, $timeout) {
  $scope.solution = Solution.get({
    id: $stateParams.id
  })

  $scope.submit = function() {
    $scope.solution.$update(function() {
      console.log('success')
    }, function() {
      console.log('fail')
    })
  }
})

.controller('SolutionCreateCtrl', function($scope, $stateParams, Solution) {
  $scope.solution = new Serve()
  $scope.submit = function() {
    $scope.solution.$save(function() {})
  }
})