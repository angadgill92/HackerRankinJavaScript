// Encryption

function encrypt(s){
    /* takes a string as an argument and returns the encrypted string */
    s = s.trim();                           // removing spaces (if any) from the ends of the input string
    var n = s.length;                       // string length
    var rootOfLength = Math.sqrt(s.length); // calculate L , i.e the square root of the length of the string
    var rows = Math.round(rootOfLength);    // rows will be the sqrt of string length
    var columns;
    
    // to ensure that rows x columns > string length
    if(rows >= rootOfLength) 
                /* if 'rows' (which is the rounded sqr root of length) >= root of length 
                (rows x columns) will be greater than or equal to the length of the string 
                therefore number of rows and columns an be the same*/
        columns = rows;
    else
                // else we add one more column 
        columns = rows + 1;
    
    var encryptedString=''; // variable to store the encrypted string
    
    for(var j = 0; j<columns ; j++){
        var word=''; // temporary variable to store the encrypted words generated
        for(var i=j; i<n;i+=columns) word = word+s[i]; // adds the [i][j]th element (where (i==j) ) to a word 
            encryptedString = encryptedString+word+' ';// adds the word to the encrypted string, along with a space at the end
    }
     encryptedString.trim(); // trim spaces (if any) from the output string
    return encryptedString;
}
