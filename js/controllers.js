projectApp.controller('MainCtrl', [
  '$scope',
  'Project',
  'OriginalDataset',
  'ProjectData',
  function($scope, Project, OriginalDataset, ProjectData)
  {
    $scope.projects = Project.available();
    $scope.deadlines = OriginalDataset.deadlines;
    $scope.departments = OriginalDataset.departments;
    $scope.resources = OriginalDataset.resources;
    $scope.projectData = ProjectData.all();

    $scope.projectByDept = ProjectData.groupBy('department', $scope.departments);
    $scope.projectByDue = ProjectData.groupBy('deadline', $scope.deadlines);

    $scope.assign = {
      project: null,
      department: null,
      deadline: null,
      selectedResources: []
    };

    var resetAssignForm = function(){
      $scope.projects = Project.available();
      $scope.assign = {
        project: null,
        department: null,
        deadline: null,
        selectedResources: []
      };
    };

    var updateGroupBy = function(){
      $scope.projectByDept = ProjectData.groupBy('department', $scope.departments);
      $scope.projectByDue = ProjectData.groupBy('deadline', $scope.deadlines);
    };

    $scope.toggleSelection = function(resource) {
      var idx = $scope.assign.selectedResources.indexOf(resource);

      if (idx > -1) {
        $scope.assign.selectedResources.splice(idx, 1);
      }
      else {
        $scope.assign.selectedResources.push(resource);
      }
    }

    $scope.assignProject = function(){
      var proj = {
        project: $scope.assign.project,
        department: $scope.assign.department,
        deadline: $scope.assign.deadline,
        resources: $scope.assign.selectedResources
      };
      ProjectData.assignProject(proj);
      alert('Assigned!');

      resetAssignForm();
      updateGroupBy();
    };
  }
]);

projectApp.controller('ProjDetailCtrl',[
  '$scope',
  'ProjectData',
  '$stateParams',
  function($scope, ProjectData, $stateParams){
    $scope.project = ProjectData.findById($stateParams.id)[0];
  }
]);
