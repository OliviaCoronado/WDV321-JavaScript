// JavaScript Document
/*
	This file will:
	
	- Create a Javascript object including an array
	- Convert the Javascript object into a JSON object
	- Store the JSON object into local storage
	
	Goal: Provide an example of how to create JSON objects in Javascript
	Goal: Provide an example of how to consume JSON objects in Javascript

	Use the following data for your JSON object

		student_id = 332443
		student_gpa = 3.6
		student_courses = ["WDV101","WDV131","WDV105"]

		student_id = 545467
		student_gpa = 2.7
		student_courses = ["WDV101","WDV131","WDV105","WDV221","WDV205"]	
		
		student_id = 128574
		student_gpa = 3.4
		student_courses = ["WDV101","WDV131","WDV105","WDV221","WDV205","WDV341"]	

*/
//helped - https://www.youtube.com/watch?v=RxjQgIhEPWE

let student1Object = 
{
	student_id: "332443",
	student_gpa: "3.6",
	student_courses: ["WDV101", "WDV131", "WDV105"]//- Create a Javascript object including an array
};

let student2Object =
{
	student_id: "545467",
	student_gpa: "2.7",
	student_courses: ["WDV101", "WDV131", "WDV105", "WDV221", "WDV205"]
};

let student3Object =
{
	student_id: "128574",
	student_gpa: "3.4",
	student_courses: ["WDV101", "WDV131", "WDV105", "WDV221", "WDV205", "WDV341"]
}


let student1JSON = JSON.stringify(student1Object);//- Convert the Javascript object into a JSON object
localStorage.setItem("Student1Info", student1JSON);//- Store the JSON object into local storage

let student2JSON = JSON.stringify(student2Object);
localStorage.setItem("Student2Info", student2JSON);

let student3JSON = JSON.stringify(student3Object);
localStorage.setItem("Student3Info", student3JSON);