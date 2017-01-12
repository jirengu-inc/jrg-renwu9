/**
 * Created by lenovo on 2016/12/22.
 */
function isLegalPassword(input) {
    if (/^[A-Z][A-z0-9_]{5,14}$|^[a-z][A-z0-9_]{5,14}$|^[0-9][0-9A-z_]{5,14}$|^_[0-9A-z_]{5,14}$/.test(input)) {
        return true;
    } else {
        return false;
    }
}
function hasClass(node, cls) {
    if (RegExp('\\b' + cls + '\\b').test(node.className)) {
        return true;
    } else {
        return false
    }
}
function addClass(node, cls) {
    if(!hasClass(node, cls)) {
        node.className += ' ' + cls;
    }
}
function removeClass(node, cls) {
    var s = RegExp('\\b' + cls + '\\b');
    if(s.test(node.className)) {
        node.className = node.className.replace(RegExp('\\b' + cls + '\\b', 'g'), '');
        trim(node); //str.replace()不改变原字符串
    }
}
function trim(node) {
    if(/^\s+|\s+$/.test(node.className)){
        node.className = node.className.replace(RegExp('^\\s+|\\s+$'), '');
    }
}