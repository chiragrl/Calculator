var input_box= document.querySelector("#inputBox");
var equation_box = document.querySelector("#equation");
function getValue(val)
{
    if(input_box.value === "0")
    {
        input_box.value = val;
    }
    else
    {
        input_box.value += val;
    }
}

function clearAll()
{
    input_box.value = "0";
    equation_box.value = "";
}

function removeLastElement()
{
    if(input_box.value != '')
    {
        if(input_box.value.length > 1)
        {
            input_box.value = input_box.value.slice(0, -1);
        }
        else
        {
            input_box.value = input_box.value.slice(0, -1);
            input_box.value = "0";
        }
    }
    else
    {
        input_box.value = "0";
    }
}

function solve()
{
    var equation = input_box.value;
    input_box.value = eval(equation);
    equation_box.value = equation + " = ";
}

function clearHistory()
{
    document.querySelector('.historyDiv').innerHTML = "";
}