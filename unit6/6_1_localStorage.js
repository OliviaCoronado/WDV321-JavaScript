        let jsJavaBook = {
            book_title: "Java and XML",
            book_price: 39.95,
            book_publisher: "Reilly & Associates",
            book_Author: "McLaughlin, Brett"
        };

        //console.log("jsJavaBook:");
        //console.log(jsJavaBook);        //Test - Works

        //Book 2
        let jsVBBook = {
            book_title: "Professional Visual Basic 6 XML",
            book_price: 49.99,
            book_publisher: "Wrox Press",
            book_Author: "Britt, James"
        };

        //console.log("jsVBBook: ")
        //console.log(jsVBBook);      
        //console.log(jsVBBook.bookAuthors[0].author_Fname + " " + jsVBBook.bookAuthors[0].author_Lname);
        //console.log(jsVBBook.bookAuthors[1].author_Fname);

        let jsTextbooks = [jsJavaBook, jsVBBook];
        //console.log("jsTextbooks: ")
        //console.log(jsTextbooks);   //Test - works

        let textbookJSON  = JSON.stringify(jsTextbooks); //JS to JSON
        localStorage.setItem("textbooksArray", textbookJSON); //JSON stored in localStorage