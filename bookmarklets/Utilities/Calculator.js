javascript:(function(){function calculate(){Equation=window.prompt("Welcome to bookmark calculator by TheRandomI on Github.\nEnter your math equation",""),EquationSave=Equation,Equation=Equation.replace("^","**"),Equation=Equation.replace("x","*"),Equation=Equation.replace("X","*"),Equation=Equation.replace("%C3%B7","/"),Equation=Equation.replace("%CF%80","3.1415926"),"Sigma"==Equation?awnser=%22Your%20so%20skibidi%22:awnser=eval(Equation),window.alert(%27%22%27+EquationSave+%27%22%20equals:\n%27+awnser),again=window.prompt(%22Do%20another?%20Y/N%22,%22%22),%22y%22==again&&calculate(),%22Y%22==again&&calculate()}calculate();}());