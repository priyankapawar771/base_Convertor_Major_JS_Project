'use strict'

var input=document.getElementById('input');
var result=document.getElementById('result');
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var inputTypeValue,resultTypeValue;

//add listener
input.addEventListener('keyup',myResult);
inputType.addEventListener('change',myResult);
resultType.addEventListener('change',myResult);

inputTypeValue = inputType.value
resultTypeValue= resultType.value

function myResult(){
//result.value = input.value;
inputTypeValue = inputType.value
resultTypeValue= resultType.value

//now compare the input and resultType value and add formula

    if(inputTypeValue==='Hexadecimal'&& resultTypeValue ==='Decimal'){
       
        const hexToDecimal = hex => result.value = parseInt(hex, 16);
        hexToDecimal(input.value);
        document.getElementById('swap').addEventListener('click',()=>{
            temp = inputTypeValue
            inputTypeValue = resultTypeValue;
            resultTypeValue = temp
            
        })
    }
    else if(inputTypeValue==='Hexadecimal'&& resultTypeValue ==='Binary'){
       
        const hexToBinary = hex => result.value =(( (parseInt(hex, 16)).toString(2)).substring(-8));
        hexToBinary(input.value);
        document.getElementById('swap').addEventListener('click',()=>{
            const binTohexaDecimal = hex => result.value =parseInt(hex, 2). toString(16);
        binTohexaDecimal(input.value);
            
        })

    }
    else if(inputTypeValue==='Hexadecimal'&& resultTypeValue==='Octal'){
      
        const hexTooctal = hex => {decimal = parseInt(hex, 16)
            function decimalToOctal (num) {
                var oct = 0; var c = 0
                while (num > 0) {
                  var r = num % 8
                  oct = oct + (r * Math.pow(10, c++))
                  num = Math.floor(num / 8) // basically /= 8 without remainder if any
                }
              return  result.value=oct;
            }
            decimalToOctal(decimal); }
        hexTooctal(input.value);
        document.getElementById('swap').addEventListener('click',()=>{
            const binTohexaDecimal = hex => {decimal= parseInt(hex,8);
                binary =( Number.parseInt(decimal, 10).toString(2))
                result.value = (parseInt(binary, 2).toString(8)) } ;
            binTohexaDecimal(input.value);
            
        })
    }

//**************Decimal************ */
    if(inputTypeValue==='Decimal'&& resultTypeValue ==='Hexadecimal'){
       
        const decTohexaDecimal = hex => result.value = ("0"+(Number(hex).toString(16))).slice(-2).toUpperCase();
        decTohexaDecimal(input.value);
        document.getElementById('swap').addEventListener('click',()=>{
            const hexToDecimal = hex => result.value = parseInt(hex, 16);
        hexToDecimal(input.value);
            
        })

    }
    else if(inputTypeValue==='Decimal'&& resultTypeValue ==='Binary'){
      
        const decToBinary = hex => result.value =( Number.parseInt(hex, 10).toString(2));
        decToBinary(input.value);
        document.getElementById('swap').addEventListener('click',()=>{
            const binToDecimal = hex => result.value = parseInt(hex, 2);
        binToDecimal(input.value);
            
        })

    }
    else if(inputTypeValue==='Decimal'&& resultTypeValue ==='Octal'){
        
        function decimalToOctal (num) {
            var oct = 0; var c = 0
            while (num > 0) {
              var r = num % 8
              oct = oct + (r * Math.pow(10, c++))
              num = Math.floor(num / 8) // basically /= 8 without remainder if any
            }
            result.value=oct;
        }
        decimalToOctal(input.value);
        document.getElementById('swap').addEventListener('click',()=>{
            const octtoDecimal = hex=>result.value=parseInt(hex,8);
            octtoDecimal(input.value)
        })
    }

//*********************Binary************* */
    if(inputTypeValue==='Binary'&& resultTypeValue ==='Hexadecimal'){
       
        const binTohexaDecimal = hex => result.value =parseInt(hex, 2). toString(16);
        binTohexaDecimal(input.value);
        document.getElementById('swap').addEventListener('click',()=>{
            const hexToBinary = hex => result.value =(( (parseInt(hex, 16)).toString(2)).substring(-8));
        hexToBinary(input.value);
            
        })
    }
    else if(inputTypeValue==='Binary'&& resultTypeValue ==='Decimal'){
       
        const binToDecimal = hex => result.value = parseInt(hex, 2);
        binToDecimal(input.value);
        document.getElementById('swap').addEventListener('click',()=>{
            const decToBinary = hex => result.value =( Number.parseInt(hex, 10).toString(2));
        decToBinary(input.value);
            
        })
    }
    else if(inputTypeValue==='Binary'&& resultTypeValue ==='Octal'){
       
        const binTooctal = hex => result.value =  parseInt(hex, 2).toString(8);
        binTooctal(input.value);
        document.getElementById('swap').addEventListener('click',()=>{
            const binTooctal = hex =>{
                let i = 0;
               
                let binary = "";
                  
                while (i<hex.length) {
                      
                    let c=hex[i];
                    switch (c) {
                    case '0':
                        binary += "000";
                        break;
                    case '1':
                        binary += "001";
                        break;
                    case '2':
                        binary += "010";
                        break;
                    case '3':
                        binary += "011";
                        break;
                    case '4':
                        binary += "100";
                        break;
                    case '5':
                        binary += "101";
                        break;
                    case '6':
                        binary += "110";
                        break;
                    case '7':
                        binary += "111";
                        break;
                    default:
                        document.write( "<br>Invalid Octal Digit "+ octnum[i]);
                        break;
                    }
                    i++;
                }
               
                result.value =  binary;
            };
            binTooctal(input.value);
            
        })
    }

//***************Octal************ */
    if(inputTypeValue==='Octal'&& resultTypeValue ==='Hexadecimal'){
       const octtohexadecimal = hex=>{decimal = parseInt(hex, 8).toString(8);
        result.value = ("0"+(Number(decimal).toString(16))).slice(-2).toUpperCase()}
        octtohexadecimal(input.value);
        // const binTohexaDecimal = hex => {decimal= parseInt(hex,8);
        //     binary =( Number.parseInt(decimal, 10).toString(2))
        //     result.value = (parseInt(binary, 2).toString(8)) } ;
        // binTohexaDecimal(input.value);
        document.getElementById('swap').addEventListener('click',()=>{
            const hexTooctal = hex => {binary =(( (parseInt(hex, 16)).toString(2)).substring(-8));
                result.value = parseInt(binary, 2).toString(8);}
hexTooctal(input.value);
            
        })
    }
    else if(inputTypeValue==='Octal'&& resultTypeValue ==='Decimal'){
        
        const octtoDecimal = hex=>result.value=parseInt(hex,8);
        octtoDecimal(input.value);
        document.getElementById('swap').addEventListener('click',()=>{
            const decTooctal = hex =>{binary =( Number.parseInt(hex, 10).toString(2))
                result.value = (parseInt(binary, 2).toString(8))} ;
            decTooctal(input.value);
            
        })
    }
    else if(inputTypeValue==='Octal'&& resultTypeValue ==='Binary'){
       
        const binTooctal = hex =>{
            let i = 0;
           
            let binary = "";
              
            while (i<hex.length) {
                  
                let c=hex[i];
                switch (c) {
                case '0':
                    binary += "000";
                    break;
                case '1':
                    binary += "001";
                    break;
                case '2':
                    binary += "010";
                    break;
                case '3':
                    binary += "011";
                    break;
                case '4':
                    binary += "100";
                    break;
                case '5':
                    binary += "101";
                    break;
                case '6':
                    binary += "110";
                    break;
                case '7':
                    binary += "111";
                    break;
                default:
                    document.write( "<br>Invalid Octal Digit "+ octnum[i]);
                    break;
                }
                i++;
            }
           
            result.value =  binary;
        };
        binTooctal(input.value);
        document.getElementById('swap').addEventListener('click',()=>{
            const binTooctal = hex => result.value =  parseInt(hex, 2).toString(8);
        binTooctal(input.value);
            
        })
    }
    
    


}