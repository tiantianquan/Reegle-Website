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

.factory('News', function($resource) {
  return $resource('/admin/news/:id', {
    id: '@_id'
  }, {
    update: {
      method: 'PUT'
    }
  })
})

.factory('Serve', function($resource) {
  return $resource('/admin/serve/:id', {
    id: '@_id'
  }, {
    update: {
      method: 'PUT'
    }
  })
})

.factory('Solution', function($resource) {
  return $resource('/admin/solution/:id', {
    id: '@_id'
  }, {
    update: {
      method: 'PUT'
    }
  })
})

