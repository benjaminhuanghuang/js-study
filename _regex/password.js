/*
https://www.bilibili.com/list/watchlater?bvid=BV1Bhy2Y5Ew2&oid=113366500709406

use  positive lookahead syntax (?=rules) to check the rules without consuming the string

*/

const digit = /^(?=.*\d).*$/    /* at least one digit */

const lowercase = /^(?=.*[a-z]).*$/    /* at least one char */
const uppercase = /^(?=.*[A-Z]).*$/    /* at least one char */
const special = /^(?=.*[$@,_.]).*$/    /* at least one special char */


/* 
    at least one digit, one lowercase, one uppercase, one special char 
    Do not allow any other special char
*/
const password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$@,_.])[\da-zA-Z$@,_.]{6, 12}$/   