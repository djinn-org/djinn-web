'use strict';

(function() {

  angular.module('djinnApp')
    .factory('ResultFactory', ['$http', '$q', '$filter',
    function($http, $q, $filter) {

      var currentSearch   = {};
      var currentDate     = null;
      var currentDuration = null;

      var res = {

        setSearch: function(params) {
          currentSearch = params;
        },

        getRooms: function() {
          var defer = $q.defer();

          var parms = res.formatParms();

          $http({
            method:   'GET',
            url:      '/api/v1/find/rooms/' + parms
          }).success(function(data) {

            // sort data by accuracy descending
            var myData = $filter('orderBy')(data, 'accuracy', true);
            defer.resolve(myData);
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
                currentDuration = parm.value;
                searchParms += 'minutes=' + parm.value + '&';
              break;
            }

          });

          // format start date
          searchParms += 'start=' + res.formatDate(myStartDate, myStartTime) + '&';

          // format equipment list
          searchParms += stuff.length ? 'equipment=' +
                            res.formatStuff(stuff) + '&': '';

          return searchParms;
        },

        formatDate: function(myDay, myTime) {
          var myDate = new Date();
          myDate.setTime(myDay);
          myDate.setHours(myTime.hh);
          myDate.setMinutes(myTime.mm);

          currentDate = myDate.toISOString();
          return currentDate;
        },

        formatStuff: function(stuff) {
          var list = '';
          angular.forEach(stuff, function(item, ix) {
            list += item;
            list += (stuff.length - 1 !== ix) ? ',': '';
          });
          return list;
        },

        getCurrentSearch: function() {
          return {
            startdate: currentDate,
            duration:  currentDuration
          };
        }
      };

      return {
        setSearch:    res.setSearch,
        getCurrentSearch: res.getCurrentSearch,
        getRooms:     res.getRooms
      };

    }]);

})();
