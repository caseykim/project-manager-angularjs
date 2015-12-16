projectServices.service('Project', [
  'OriginalDataset',
  'ProjectData',
  function(OriginalDataset, ProjectData){
  var retObj = {};
  var projects = OriginalDataset.projects;

  retObj.all = function(){
    return projects;
  };

  retObj.available = function(){
    var available = [];
    $.grep(projects, function(el){
      if (ProjectData.takenProjects().indexOf(el) == -1) {
        available.push(el);
      };
    });
    return available;
  };

  return retObj;
}]);
