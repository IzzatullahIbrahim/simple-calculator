var app = angular.module ('MyApp');

app.controller ('MyApp.CalculatorController',[
    '$scope','$http',

    function ($scope,$http){
        console.log('controller is working');
        var operationList = [''];
        var index = 0;

        $scope.setNumber=function(num){
            console.log('The number is: ',num);
            //Combine multiple number
            operationList [index]=operationList [index] +''+ num;
            $scope.updateDisplay();

            console.log ('operation list is: ', operationList);
        }

        $scope.setOperator = function(operator){
            console.log('The operator is: ', operator)
            index++;
            operationList[index]= operator;

            //show in the display what iperator was clicked
            $scope.updateDisplay();

            index++;
            operationList [index]='';
        }

        $scope.updateDisplay = function (display) {
            if(display){
                $scope.display = display;
            } else {
                $scope.display = operationList[index];
            }
        }

        $scope.calculate = function (){
            if(operationList.length >= 3){
                var result = 0;
                if (operationList [1] === '+'){
                    result = parseInt(operationList [0]) + parseInt(operationList [2]);
                } else if (operationList [1] === '-'){
                    result = parseInt(operationList [0]) - parseInt(operationList [2]);
                } else if (operationList [1] === 'x'){
                    result = parseInt(operationList [0]) * parseInt(operationList [2]);
                } else if (operationList [1] === '/'){
                    if (parseInt(operationList[2])===0){
                        $scope.updateDisplay('ERROR')
                        return;
                    } else {
                        result = parseInt(operationList [0]) / parseInt(operationList [2]);
                    }
                }
                $scope.updateDisplay (result);
                console.log('The result is: ', result);

                $scope.clear()
                console.log ('The operation list', operationList)
            }
            else{
                console.log('not enough numbers picked')
            }
        }

        $scope.clear = function(){
            operationList = [''];
            index = 0;
        }

        $scope.clearDisplay = function () {
            $scope.clear ();
            $scope.updateDisplay ();
        }
    }
]);
