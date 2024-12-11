/*
https://www.bilibili.com/list/watchlater?bvid=BV1Bhy2Y5Ew2&oid=113366500709406

Positive lookahead is a feature in regular expressions that allows you to assert that a 
specific pattern exists ahead in the string, without including that pattern in the match. 
It is useful for conditional matching based on the presence of a subsequent pattern.

use  positive lookahead syntax (?=rules) to check the rules without consuming the string
Fix the start position 
*/

const digit = /^(?=.*\d).*$/    /* at least one digit */

const lowercase = /^(?=.*[a-z]).*$/    /* at least one char */
const uppercase = /^(?=.*[A-Z]).*$/    /* at least one char */
const special = /^(?=.*[$@,_.]).*$/    /* at least one special char */


/* 
    at least one digit, one lowercase, one uppercase, one special char 
    Do not allow any other special char
    (?=.*\d) - at least one digit
    (?=.*[a-z])(?=.*[A-Z]) - at least one lowercase and one uppercase
    (?=.*[$@,_.]) - at least one special char
    [\da-zA-Z$@,_.] : use 
*/
const password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$@,_.])[\da-zA-Z$@,_.]{6, 12}$/   

/*
 Match "foo" only if followed by "bar"
*/
const regex = /foo(?=bar)/g;