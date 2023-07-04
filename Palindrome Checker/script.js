function palindrome(){
    let str = document.getElementById("input").value;
    let check = str.split("").reverse().join("");
    if(str == check)
    {
        const result = document.getElementById("result");
        result.innerHTML = "This word avails with palindrome"; 
    }
    else
    {
        const result = document.getElementById("result");
        result.innerHTML = "This sentence doesn't avails with palindrome"; 
    }
}