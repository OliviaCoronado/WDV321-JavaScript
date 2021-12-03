module.exports = {

    emailAddress: function(inEmail){
        let pattern = /([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?(\.[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?)+/;  //regular expression or email address
        if( pattern.test(inEmail) ){
            return true;
        }
        else{
            return false;
        }
        
    }, //end of emailAddress()


    zipCode: function(inValue){
        let numericPattern = /^\d{5}$/; 

        if( numericPattern.test(inValue) ){
            return true;
        }
        else{
            return false;
        }

    }, //end of zipCode()



    specialCharSwitch: function(inString){
        let string = "";

        string = inString.replace(/\/|'|<|>/g,"-");
        return string;
 

    },//end of specialCharacters()






} //end module.exports