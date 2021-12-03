const assert = require('chai').assert;  //Chai assertion library

//const emailAddress = require('../app/app').emailAddress;



const emailAddress = require('../app/app').emailAddress;
const zipCode = require('../app/app').zipCode;
const specialCharSwitch = require('../app/app').specialCharSwitch;

describe('Validations ', function() {
    //email Address
    describe('emailAddress()', function(){
    //True
        it('mail@mail.com should show true ', function () {
            let email ="mail@mail.com";
            assert.equal(emailAddress(email), true);
        });

        it('mail1@mail.com should show true ', function () {
            let email ="mail1@mail.com";
            assert.equal(emailAddress(email), true);
        });

        it('my.mail@mail.us  should show true ', function () {
            let email = "my.mail@mail.us";
            assert.equal(emailAddress(email), true);
        });

        it('my.mail@m.com  should show true ', function () {
            let email = "my.mail@m.com";
            assert.equal(emailAddress(email), true);
        });

        it('mail@mail.programmer  should show true ', function () {
            let email = "mail@mail.programmer";
            assert.equal(emailAddress(email), true);
        });

        it('mail_mail@mail.com  should show true ', function () {
            let email = "mail_mail@mail.com";
            assert.equal(emailAddress(email), true);
        });

        it('"1111@mail.com" should show true ', function () {
            let email ="1111@mail.com";
            assert.equal(emailAddress(email), true);    //not sure about this one
        });

        it('"1111.mail@mail.com" should show true ', function () {
            let email ="1111.mail@mail.com";
            assert.equal(emailAddress(email), true);    //not sure about this one
        });

        it('"1111mail@mail.com" should show true ', function () {
            let email ="1111mail@mail.com";
            assert.equal(emailAddress(email), true);    //not sure about this one
        });

        it('"mail!@mail.com" should show true ', function () {
            let email ="mail!@mail.com";
            assert.equal(emailAddress(email), true);
        });

        it('"mail$@mail.com" should show true ', function () {
            let email ="mail$@mail.com";
            assert.equal(emailAddress(email), true);
        });

        it('"mailmailmailmailmailmailmailmail@mail.com" (long)should show true ', function () {
            let email ="mailmailmailmailmailmailmailmail@mail.com";
            assert.equal(emailAddress(email), true);
        });
    //False
        it('mail.com should show false ', function () {
            let email ="mail.com ";
            assert.equal(emailAddress(email), false);
        });

        it(' "" (blank) should show false ', function () {
            let email ="";
            assert.equal(emailAddress(email), false);
        });
        
        it('" " (space) should show false ', function () {
            let email =" ";
            assert.equal(emailAddress(email), false);
        });

        it('"a" (single) should show false ', function () {
            let email ="a";
            assert.equal(emailAddress(email), false);
        });

        it('"aaaa" (aaaa) should show false ', function () {
            let email ="aaaa";
            assert.equal(emailAddress(email), false);
        });

        it('"1" (1) should show false ', function () {
            let email ="1";
            assert.equal(emailAddress(email), false);
        });

        it('"$" ($) should show false ', function () {
            let email ="$";
            assert.equal(emailAddress(email), false);
        });

        it('"mail.com" should show false ', function () {
            let email ="mail.com";
            assert.equal(emailAddress(email), false);
        });

        it('"mail.mail.com" should show false ', function () {
            let email ="mail.mail.com";
            assert.equal(emailAddress(email), false);
        });
        
        it('"mail.m" should show false ', function () {
            let email ="mail.m";
            assert.equal(emailAddress(email), false);
        });

        it('"mail@m" should show false ', function () {
            let email ="mail@m";
            assert.equal(emailAddress(email), false);
        });

        it('"mail.mail@.com" should show false ', function () {
            let email ="mail.mail@.com";
            assert.equal(emailAddress(email), false);
        });
    });//end of emailAddress()

    //zipCode
        describe('zipCode()', function(){

        //True
            it('12345 should show true ', function () {
                let zipNum = "12345";
                assert.equal(zipCode(zipNum), true);
            });

            it('98765 should show true ', function () {
                let zipNum = "98765";
                assert.equal(zipCode(zipNum), true);
            });

            it('90000 should show true ', function () {
                let zipNum = "90000";
                assert.equal(zipCode(zipNum), true);
            });
            

        //False
            it('"" should show false ', function () {
                let zipNum ="";
                assert.equal(zipCode(zipNum), false);
            });

            it('" " should show false ', function () {
                let zipNum =" ";
                assert.equal(zipCode(zipNum), false);
            });

            it('"mail" should show false ', function () {
                let zipNum ="mail";
                assert.equal(zipCode(zipNum), false);
            });

            it('1234 (4)should show false ', function () {
                let zipNum ="1234";
                assert.equal(zipCode(zipNum), false);
            });

            it('123456 (6)should show false ', function () {
                let zipNum ="123456";
                assert.equal(zipCode(zipNum), false);
            });

            it('1234567 (7)should show false ', function () {
                let zipNum ="1234567";
                assert.equal(zipCode(zipNum), false);
            });
            
            it('mail123 should show false ', function () {
                let zipNum ="mail123";
                assert.equal(zipCode(zipNum), false);
            });

            it('123mail123 should show false ', function () {
                let zipNum ="123mail12";
                assert.equal(zipCode(zipNum), false);
            });

            it('123-45 should show false ', function () {
                let zipNum ="123-123";
                assert.equal(zipCode(zipNum), false);
            });

            it('? should show false ', function () {
                let zipNum ="?";
                assert.equal(zipCode(zipNum), false);
            });

            it('?12345 should show false ', function () {
                let zipNum ="?12345";
                assert.equal(zipCode(zipNum), false);
            });

            it('-1234 should show false ', function () {
                let zipNum ="-1234";
                assert.equal(zipCode(zipNum), false);   
            });

            it('-12345 should show false ', function () {
                let zipNum ="-12345";
                assert.equal(zipCode(zipNum), false);   
            });

            it('$1234 should show false ', function () {
                let zipNum ="$1234";
                assert.equal(zipCode(zipNum), false);   
            });

            it('$12345 should show false ', function () {
                let zipNum ="$12345";
                assert.equal(zipCode(zipNum), false);   
            });
    });//end of zipCode

    //Special Character Switch
    describe('specialCharSwitch()', function(){

        it('> should be -', function () {
            let switchCharacter =">";
            assert.equal(specialCharSwitch(switchCharacter), "-");   
        });

        it('< should be -', function () {
            let switchCharacter ="<";
            assert.equal(specialCharSwitch(switchCharacter), "-");   
        });

        it(" ' should be -", function () {
            let switchCharacter ="'";
            assert.equal(specialCharSwitch(switchCharacter), "-");   
        });

        it('/ should be -', function () {
            let switchCharacter ="/";
            assert.equal(specialCharSwitch(switchCharacter), "-");   
        });

        it(" '' should be -", function () {
            let switchCharacter ="''";
            assert.equal(specialCharSwitch(switchCharacter), "--");   
        });

        it('>< should show -- ', function () {
            let switchCharacter ="><";
            assert.equal(specialCharSwitch(switchCharacter), "--");   
        });

        it('// should show -- ', function () {
            let switchCharacter ="//";
            assert.equal(specialCharSwitch(switchCharacter), "--");   
        });

        it('/<>/ should show ---- ', function () {
            let switchCharacter ="/<>/";
            assert.equal(specialCharSwitch(switchCharacter), "----");   
        });

        it(">'Hello'< should show --Hello-- ", function () {
            let switchCharacter =">'Hello'<";
            assert.equal(specialCharSwitch(switchCharacter), "--Hello--");   
        });

        it('>Hello< should show -Hello- ', function () {
            let switchCharacter =">Hello<";
            assert.equal(specialCharSwitch(switchCharacter), "-Hello-");   
        });
        
        it('>123< should show -123- ', function () {
            let switchCharacter =">123<";
            assert.equal(specialCharSwitch(switchCharacter), "-123-");   
        });

        it('/Hello/ should show -Hello- ', function () {
            let switchCharacter ="/Hello/";
            assert.equal(specialCharSwitch(switchCharacter), "-Hello-");   
        });
        
        it('/123/ should show -123- ', function () {
            let switchCharacter ="/123/";
            assert.equal(specialCharSwitch(switchCharacter), "-123-");   
        });

        it("Switch<,>,'and/! should show Switch-,-,-and-!", function () {
            let switchCharacter ="Switch<,>,'and/!";
            assert.equal(specialCharSwitch(switchCharacter), "Switch-,-,-and-!");   
        });

        

        

    }); //end of specialCharSwitch()









});   //end of describe()
