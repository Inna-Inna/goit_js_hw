function checkSpam(msg){
    msg = msg.toString();
    msg = msg.toLocaleLowerCase();
    var count = 0;
    var bannedWord1 = "sex";
    var bannedWord2 = "spam";
    while(true){
        var indexOfBanned = msg.indexOf(bannedWord1, count);
        if (count == -1) break;
        alert("Spammer!!!");
        count = indexOfBanned+1;
    }
    return msg;
}
