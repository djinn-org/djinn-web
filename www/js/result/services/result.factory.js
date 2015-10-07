'use strict';

(function() {

  angular.module('djinnApp')
    .factory('ResultFactory', ['$http', '$q', '$filter',
    function($http, $q, $filter) {

      var currentSearch   = {};
      var currentDate     = null;
      var currentDuration = null;
      var currentStuff    = [];

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
            if (!angular.isArray(data)) {
              data = [];
            }

            // TEMP - add fake icons
            res.addFakeIcons(data);
            // END TEMP - add fake icons

            var myData = $filter('orderBy')(data, 'accuracy', true);
            defer.resolve(myData);
          });

          return defer.promise;
        },

        addFakeIcons(data) {
          var icontypes = ['visiocall', 'computer', 'duration', 'octopus', 'capacity'];
          var icons = {
            target: []
          };
          var nbIcons = 0, icStart = 0;
          angular.forEach(data, function(item) {
            nbIcons = Math.floor(Math.random() * 4) + 1;
            icStart = Math.floor(Math.random() * 4);
            icons.target = icontypes.slice(icStart, nbIcons + icStart);
            angular.extend(item, icons);
          });
        },

        formatParms: function() {
          var searchParms = '?';
          var myStartDate, myStartTime;

          currentStuff = [];

          angular.forEach(currentSearch, function(parm) {

            switch(parm.model) {
              case 'visiocall':
              case 'octopus':
              case 'computer':
              case 'phone':
                if (parm.value) {
                  currentStuff.push(parm.model);
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
          searchParms += currentStuff.length ? 'equipment=' +
                            res.formatStuff(currentStuff) + '&': '';

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
            startdate:  currentDate,
            duration:   currentDuration,
            stuff:      currentStuff
          };
        }
      };

      return {
        setSearch:        res.setSearch,
        getCurrentSearch: res.getCurrentSearch,
        getRooms:         res.getRooms
      };

    }]);

})();
