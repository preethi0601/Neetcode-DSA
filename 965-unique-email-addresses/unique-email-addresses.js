/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    let uniqueEmails = new Set();
    for (let email of emails) {
        let [local, domain] = email.split('@');
        local = local.replace(/\./g, '');
        let plus = local.indexOf('+')
        if(plus !== -1) {
            local = local.substring(0,plus);
        }
        uniqueEmails.add(local + '@' + domain);
    }
    return uniqueEmails.size;
};