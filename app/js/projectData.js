projectServices.service('ProjectData', [function(){
  var retObj = {};
  var projectData = [];
  var id = 1;

  retObj.all = function(){
    return projectData;
  };

  retObj.findById = function(id){
    return $.grep(projectData, function(el){
      return el.id == id;
    });
  };

  retObj.assign = function(proj){
    var newProj = angular.copy(proj);
    newProj.id = id;
    id++;
    return projectData.push(newProj);
  };

  retObj.remove = function(proj){
    var idx = projectData.indexOf(proj);
    projectData.splice(idx, 1);
  };

  retObj.takenProjects = function() {
    return projectData.map(function(obj){
      return obj.project;
    });
  };

  retObj.groupBy = function(category, array){
    var grouped = {};
    var key;
    array.forEach(function(el){
      grouped[el] = [];
    });
    angular.forEach(projectData, function(el){
      key = el[category]
      grouped[key].push(el);
    });

    return grouped;
  };

  return retObj;
}]);
