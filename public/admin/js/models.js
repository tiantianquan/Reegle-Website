angular.module('admin.models', [])

// .factory('Common', function($http) {
//   var common = {}
//   var list = ['get', 'put', 'delete', 'post']

//   common.get = function(url, callback) {
//     $http.get(url).then(function(res) {
//       callback(res.data)
//     })
//   }

//   common.create = function(url, data, callback) {
//     $http.post(url, data).then(function(res) {
//       callback(res.data)
//     })
//   }

//   common.update = function(url, data, callback) {
//     $http.put(url, data).then(function(res) {
//       callback(res.data)
//     })
//   }

//   common.delete = function(url, callback) {
//     $http.delete(url).then(function(res) {
//       callback(res.data)
//     })
//   }

//   return common
// })

// .factory('News', function($http, Common) {
//   var url = '/admin/news';
//   return {
//     getAll: function(callback) {
//       Common.get(url, callback)
//     },
//     get: function(id, callback) {
//       Common.get(url + '/' + id, callback)
//     },
//     update: function(id, data, callback) {
//       Common.update(url + '/' + id, data, callback)
//     },
//     delete: function(id, callback) {
//       Common.delete(url + '/' + id, callback)
//     },
//     create: function(data, callback) {
//       Common.create(url, data, callback)
//     }
//   }
// })

.factory('ModelUtil', function() {
  return {
    commonParam: {
      {
        id: '@_id'
      }, {
        update: {
          method: 'PUT'
        }
      }
    },
    // successCallback: function(value, responseHeaders) {

    // },
    // failCallback: function(httpResponse) {
    // }
  }
})

.factory('News', function($resource, ModelUtil) {
  var News = $resource('/admin/news/:id', ModelUtil.commonParam)
  return News
})

.factory('Serve', function($resource, ModelUtil) {
  return $resource('/admin/serve/:id', ModelUtil.commonParam)
})

.factory('Solution', function($resource, ModelUtil) {
  return $resource('/admin/solution/:id', ModelUtil.commonParam)
})