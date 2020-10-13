// Program 1

var today = new Date();
var day = today.getDay();
var day_list = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"];
document.getElementById("day").innerHTML = "Today is : " + day_list[day] + ".";
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();
var am_pm = hour >= 12 ? " PM " : " AM ";
hour = hour >= 12 ? hour - 12 : hour;
document.getElementById("time").innerHTML = "Current Time : " + hour + am_pm + " : " + minute + " : " + second;

// Program 2

function multiply() {
    num_1 = document.getElementById("num_1").value;
    num_2 = document.getElementById("num_2").value;
    document.getElementById("result").innerHTML = num_1 * num_2;
}

function divide() {
    num_1 = document.getElementById("num_1").value;
    num_2 = document.getElementById("num_2").value;
    document.getElementById("result").innerHTML = num_1 / num_2;
}

// Program 3

function removeDuplicateCharacters(string) {
    var output = function () {
        return string
            .split("")
            .filter(function (item, pos, self) {
                return self.indexOf(item) == pos;
            })
            .join("");
    };
    document.getElementById("not_full_string").innerHTML = output();
}

// Program 4
function array_stuff() {
    var array = [];
    n = prompt("How many values in the array??");
    for (var i = 0; i < n; i++) array.push(prompt("Enter a number"));
    var s = 0,
        p = 1,
        i;
    console.log(array);
    for (i = 0; i < array.length; i += 1) {
        s += parseInt(array[i]);
        p *= parseInt(array[i]);
    }
    document.getElementById("array_ans").innerHTML = "Sum : " + s + " Product :  " + p;
}

// Program 5

function subset(){
     big_string = prompt("What's the string?")
      var subset = [];
      for (var m = 0; m < big_string.length; m++) 
      {
        for (var n = m+1; n<big_string.length+1; n++) 
        {
          subset.push(big_string.slice(m,n));
        }
      }
      document.getElementById("subset_ans").innerHTML = subset
}