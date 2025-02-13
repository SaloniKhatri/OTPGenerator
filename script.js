
const OTP = document.getElementById('otp');
const Button = document.getElementById('otpbtn');

function generateOTP (length){
    let otp = '';
    for ( let i =0; i < length; i++){
        otp+= Math.floor(Math.random()*3);
    }
    return otp;
};
// console.log(generateOTP(4));
// document.getElementById("demo").addEventListener("click", myFunction);
Button.addEventListener("click", ()=> {
    OTP.innerHTML = generateOTP(4);

});
