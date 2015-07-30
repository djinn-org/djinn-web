'use strict';

(function() {

  angular.module('djinnApp')
    .value('ChoiceValue', [

      {
        model:  'visiocall',
        icon:   'videocam',
        type:   'truefalse'
      },

      {
        model:  'octopus',
        icon:   'group_work',
        type:   'truefalse'
      },

      {
        model:  'computer',
        icon:   'computer',
        type:   'truefalse'
      },

      {
        model:  'phone',
        icon:   'phone',
        type:   'truefalse'
      },

      {
        model:  'capacity',
        icon:   'people',
        type:   'range',
        min:    0,
        max:    99
      },

      {
        model:  'date',
        icon:   'today',
        type:   'startdate'
      },

      {
        model:  'fromtime',
        icon:   'alarm',
        type:   'fromtime',
        step:   15
      },

      {
        model:  'duration',
        icon:   'schedule',
        type:   'duration',
        step:    15
      }
    ]);

})();