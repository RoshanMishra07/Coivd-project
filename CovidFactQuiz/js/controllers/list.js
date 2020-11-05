
(function(){

    angular
        .module("covidFacts")
        .controller("listCtrl", ListController);

    ListController.$inject = ['quizMetrics', 'DataService'];


    function ListController(quizMetrics, DataService){
        var vm = this;


        vm.quizMetrics = quizMetrics; // Controllers reference to the quiz data from factory
        vm.data = DataService.covidData; // Controller reference to the covid info created in the factory
        vm.activecovid = {}; // will be used in the view to hold the data of currently active covid
        vm.changeActivecovid = changeActivecovid; // reference to a named function below
        vm.activateQuiz = activateQuiz; // reference to named function below
        vm.search = ""; // will hold the search query when user uses search bar in view

        function changeActivecovid(index){

            vm.activecovid = index;
        }

        function activateQuiz(){

            quizMetrics.changeState("quiz", true);
        }
    }


})();
