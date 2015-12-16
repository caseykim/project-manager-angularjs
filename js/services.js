var projectServices = angular.module('projectServices',[]);

projectServices.factory('OriginalDataset', [function(){
  var originalDataset =
    {
      "deadlines" : [
        "April 01, 2016 12:00:00",
        "March 15, 2016 12:00:00",
        "May 01, 2016 12:00:00",
        "January 01, 2016 12:00:00",
        "July 07, 2016 12:00:00"
      ],
      "projects" :
       [
        "Show Three Lists",
        "Make Stepped List",
        "Add UI-Router Rules",
        "Create Filters",
        "Sum Up Subtotals"
       ],
      "departments" :
      [
        "App Engineering",
        "Marketing",
        "DBAdmin",
        "SysOps",
        "Embedded",
        "GroceryOps"
      ],
      "resources" :
      [
        "Kirk Middleton",
        "Spenser Estrada",
        "Kierra Buckner",
        "Hunter Luna",
        "Ahmad Justice",
        "Breana Medina",
        "Shelbie Cervantes"
      ]
    };
  return originalDataset;
}]);
