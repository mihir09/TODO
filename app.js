var app = angular.module("todoApp", []);

app.controller("todoController", function($scope){
    $scope.tasks = [
        {description: 'Task1', completed: true},
        {description: 'Task2', completed: false},
        {description: 'Task3', completed: true},
        {description: 'Task4', completed: false},
    ]

    $scope.addTask = ()=>{
        $scope.tasks.unshift({description: $scope.taskDescription, completed: false})
        $scope.taskDescription='';
    }

    $scope.remainingCount = ()=>{
        let count = 0;
        angular.forEach($scope.tasks, function(task) {
            count += task.completed ? 0 : 1;
          });
        return count;
    }

    $scope.filterTasks = (prop, val)=>{
        return function(task){
          if (task[prop] == val) return true;
        };
    }

    $scope.removeTask = function(task){
        $scope.tasks.splice($scope.tasks.indexOf(task),1);
    }

    $scope.cleanUp = ()=>{
        let oldTasks = $scope.tasks;
        $scope.tasks = [];
        angular.forEach(oldTasks, function(task) {
            if (!task.completed) $scope.tasks.push(task);
        });
    }
    
});