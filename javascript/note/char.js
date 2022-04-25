{
  //char to ASCII
  const str = "ABC";
  console.log(str.charCodeAt(0));
  console.log(str.charCodeAt(0) - "A".charCodeAt(0));

  //ASCII to char
  console.log(String.fromCharCode(65, 66, 67));
}
