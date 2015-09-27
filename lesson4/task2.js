function checkSpam(msg) {
    msg = msg.toLowerCase();
    return !!(msg.indexOf("sex") != -1 || msg.indexOf("spam") != -1);
}
