projectApp.controller('MainCtrl', [
  '$scope',
  '$location',
  'Project',
  'OriginalDataset',
  'ProjectData',
  function($scope, $location, Project, OriginalDataset, ProjectData)
  {
    $scope.projects = Project.available().sort();
    $scope.deadlines = OriginalDataset.deadlines.sort();
    $scope.departments = OriginalDataset.departments.sort();
    $scope.resources = OriginalDataset.resources.sort();
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
    };

    $scope.assignProject = function(){
      var proj = {
        project: $scope.assign.project,
        department: $scope.assign.department,
        deadline: $scope.assign.deadline,
        resources: $scope.assign.selectedResources
      };
      ProjectData.assign(proj);
      alert('Assigned!');

      resetAssignForm();
      updateGroupBy();
    };

    $scope.removeProject = function(project){
      if (confirm('Are you sure to remove this project?')) {
        ProjectData.remove(project);

        $scope.projects = Project.available();
        updateGroupBy();
        $location.path('/app');
      }
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
