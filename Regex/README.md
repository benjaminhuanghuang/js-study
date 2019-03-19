
## Reference
- https://segmentfault.com/a/1190000018489883?utm_source=weekly&utm_medium=email&utm_campaign=email_weekly
- https://segmentfault.com/a/1190000009324194

## Flags（标志符或修饰符）
Flags写在结束的/之后，可以影响整个正则表达式的匹配行为。常见的flags有：

- g：全局匹配（global）；正则表达式默认只会返回第一个匹配结果，使用标志符g则可以返回所有匹配
- i：忽略大小写（case-insensitive）；在匹配时忽略英文字母的大小写
- m：多行匹配（multiline）；将开始和结束字符（^和$）视为在多行上工作，即分别匹配每一行（由 \n 或 \r 分割）的开始和结束，而不只是只匹配整个输入字符串的最开始和最末尾处


## Character Sets
- [xyz]：匹配 "x"或"y"`"z"`
- [^xyz]：补集，匹配除 "x" "y" "z"的其他字符
- [a-z]：匹配从 "a" 到 "z" 的任意字符
- [^a-n]：补集，匹配除 "a" 到 "n" 的其他字符
- [A-Z]：匹配从 "A" 到 "Z" 的任意字符
- [0-9]：匹配从 "0" 到 "9" 的任意数字

## Quantifiers
- {n}：匹配 n 次
- {n,m}：匹配 n-m 次
- {n,}：匹配 >n 次
- ?：匹配 0 || 1 次
- *：匹配 >=0 次，等价于 {0,}
- +：匹配 >=1 次，等价于 {1,}

## Metacharacters
-\d：匹配任意数字，等价于 [0-9]
- \D：匹配任意非数字字符；\d 的补集

- \w：匹配任意基本拉丁字母表中的字母和数字，以及下划线；等价于 [A-Za-z0-9_]
- \W：匹配任意非基本拉丁字母表中的字母和数字，以及下划线；\w 的补集

- \s：匹配一个空白符，包括空格、制表符、换页符、换行符和其他Unicode空格
- \S：匹配一个非空白符；\s的补集

- \b：匹配一个零宽单词边界，如一个字母与一个空格之间；例如，/\bno/ 匹配 "at noon" 中的 "no"，/ly\b/ 匹配 "possibly yesterday." 中的 "ly"
- \B：匹配一个零宽非单词边界，如两个字母之间或两个空格之间；例如，/\Bon/ 匹配 "at noon" 中的 "on"，/ye\B/ 匹配 "possibly yesterday." 中的 "ye"

- \t：匹配一个水平制表符（tab)
- \n：匹配一个换行符（newline)
- \r：匹配一个回车符（carriage return)

## Special Characters
\：转义字符，可以将普通字符转成特殊字符。比如 \w；也可以将特殊字符转成字面意思，比如 \+ 匹配 "+"
.：匹配任意单个字符，但是换行符除外：\n, \r, \u2028 或 \u2029；在字符集中（[.]），无特殊含义，即表示 '.' 的字面意思
|：替换字符（alternate character），匹配 | 前或后的表达式。比如需要同时匹配 "bear" 和 "pear"，可以使用 /(b|p)ear/ 或者 /bear|pear/；但是不能用 /b|pear/，该表达式只能匹配 "b" 和 "pear"
^：匹配输入的开始。比如，/^A/ 不匹配 "an Apple" 中的 "A"，但匹配 "An apple" 中的 "A"
$：匹配输入的结尾。比如，/t$/ 不匹配 "eater" 中的 "t"，但匹配 "eat" 中的 "t"。^ 和 $ 在表单验证时常需要使用，因为需要验证从开始到结尾的一个完整输入，而不是匹配输入中的某一段


## Group
(xyz)：捕获分组（Capturing Group），匹配并捕获匹配项；例如，/(foo)/ 匹配且捕获 "foo bar." 中的 "foo"。被匹配的子字符串可以在结果数组的元素 [1], ..., [n] 中找到，或在被定义的 RegExp 对象的属性 $1, ..., $9 中找到
(?:xyz)：非捕获分组（Non-capturing Group），匹配但不会捕获匹配项；匹配项不能再次被访问到
\n：n 是一个正整数，表示反向引用（back reference），指向正则表达式中第n个括号（从左开始数）中匹配的子字符串；例如，/apple(,)\sorange\1/ 匹配 "apple, orange, cherry, peach." 中的 "apple,orange,"


## Assertion（断言）
x(?=y)：仅匹配被y跟随的x；例如，/bruce(?=wayne)/，如果"bruce"后面跟着wayne，则匹配之。/bruce(?=wayne|banner)/ ，如果"bruce"后面跟着"wayne"或者banner，则匹配之。但是，"wayne" 和 "banner" 都不会在匹配结果中出现
x(?!y)：仅匹配不被y跟随的x；例如，/\d+(?!\.)/ 只会匹配不被 "." 跟随的数字。

## API

### Methods on RegExp: test(), exec() and compile()
1.test()
检索字符串中指定的值。返回 true 或 false。这个是我们平时最常用的方法。

 var reg=/hello \w{3,12}/;
 alert(reg.test('hello js'));//false
 alert(reg.test('hello javascript'));//true

2.exec()
检索字符串中指定的值。匹配成功返回一个数组，匹配失败返回null。

var reg=/hello/;
console.log(reg.exec('hellojs'));//['hello']
console.log(reg.exec('javascript'));//null

3.compile()
compile() 方法用于改变 RegExp。
compile() 既可以改变检索模式，也可以添加或删除第二个参数。


var reg=/hello/;
console.log(reg.exec('hellojs'));//['hello']
reg.compile('Hello');
console.log(reg.exec('hellojs'));//null
reg.compile('Hello','i');
console.log(reg.exec('hellojs'));//['hello']


### Methods on String: match(), search(), replace(), split

- 1.match()
在字符串内检索指定的值,匹配成功返回存放匹配结果的数组，否则返回null。这里需要注意的一点事，如果没有设置全局匹配g，返回的数组只存第一个成功匹配的值。


var reg1=/javascript/i;
var reg2=/javascript/ig;
console.log('hello Javascript Javascript Javascript'.match(reg1));
//['Javascript']
console.log('hello Javascript Javascript Javascript'.match(reg2));
//['Javascript','Javascript','Javascript']

- 2.search()
在字符串内检索指定的值,匹配成功返回第一个匹配成功的字符串片段开始的位置，否则返回-1。

var reg=/javascript/i;
console.log('hello Javascript Javascript Javascript'.search(reg));//6

- 3.replace()
替换与正则表达式匹配的子串，并返回替换后的字符串。在不设置全局匹配g的时候，只替换第一个匹配成功的字符串片段。

var reg1=/javascript/i;
var reg2=/javascript/ig;
console.log('hello Javascript Javascript Javascript'.replace(reg1,'js'));
//hello js Javascript Javascript
console.log('hello Javascript Javascript Javascript'.replace(reg2,'js'));
//hello js js js

- 4.split()
把一个字符串分割成字符串数组。

var reg=/1[2,3]8/;
console.log('hello128Javascript138Javascript178Javascript'.split(reg));
//['hello','Javascript','Javascript178Javascript']


## Tools
- [Regex101] (https://regex101.com/)
- https://regexr.com/
- https://www.regexpal.com/