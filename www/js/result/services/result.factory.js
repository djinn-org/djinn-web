'use strict';

(function() {

  angular.module('djinnApp')
    .factory('ResultFactory', ['$http', '$q',
    function($http, $q) {

      var currentSearch = {};

      var res = {

        setSearch: function(params) {
          currentSearch = params;
        },

        getRooms: function() {
          var defer = $q.defer();

          var parms = res.formatParms();

          $http({
            method:   'GET',
            //url:      'js/mocks/result.json',
            url:      '/api/v1/find/rooms/' + parms
          }).success(function(data) {

            defer.resolve(data.rows);

          });

          return defer.promise;
        },

        formatParms: function() {
          var searchParms = '?';
          var stuff = [];

          var myStartDate, myStartTime;

          angular.forEach(currentSearch, function(parm) {

            switch(parm.model) {
              case 'visiocall':
              case 'octopus':
              case 'computer':
              case 'phone':
                if (parm.value) {
                  stuff.push(parm.model);
                }
              break;

              case 'capacity':
                if (parm.value) {
                  searchParms += 'capacity=' + parm.value + '&';
                }
              break;

              case 'date':
                myStartDate = parm.value;
              break;

              case 'fromtime':
                myStartTime = parm.value;
              break;

              case 'duration':
                searchParms += 'minutes=' + parm.value + '&';
              break;
            }

          });

          searchParms += 'start=' + res.formatDate(myStartDate, myStartTime) + '&';

          if (stuff.length) {
            searchParms += 'equipment=' + res.formatStuff(stuff) + '&';
          }

          return searchParms;
        },

        formatDate: function(myDay, myTime) {
          var myDate = new Date();
          myDate.setTime(myDay);
          myDate.setHours(myTime.hh);
          myDate.setMinutes(myTime.mm);

          return myDate.toISOString();
        },

        formatStuff: function(stuff) {
          var list = '';
          angular.forEach(stuff, function(item, ix) {
            list += item;
            if (stuff.length - 1 !== ix) {
              list += ',';
            }
          });
          return list;
        }
      };

      return {
        setSearch:    res.setSearch,
        getRooms:     res.getRooms
      };

    }]);

})();
