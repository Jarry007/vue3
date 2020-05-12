// const mySql = require('mysql')
// const connect_ = mySql.createConnection({
//    host:process.env.VUE_APP_HOST,
//    user     : process.env.VUE_APP_USER,
//    password : process.env.VUE_APP_PASS,
//    database : process.env.VUE_APP_DATABASE
// })
// connect_.connect();
// // const sql = 'SELECT * FROM role1'
// const sql = "SELECT * FROM article1"
// connect_.query(sql, (err,res)=>{
//    if(err) return err
//    console.log('res',res)
//    const data = Array.from(res,({tittle})=>tittle)
//    console.log(data)
//    return data
// });
// connect_.end();
const result_ = '<h2>第一步：修改 wxParse</h2>\r\n\r\n<p><strong>1. 修改代码换行问题</strong></p>\r\n\r\n<p>wxParse 默认是替换掉所有的换行，包括&ldquo;\\n&rdquo;和&ldquo;\\r\\n&rdquo;，因此，对 wxParse 替换掉换行的代码进行修改（下面的代码在 wxDiscode.js 文件的 strMoreDiscode 函数中）：</p>\r\n\r\n<pre>\r\n<code class="language-javascript">\r\nfunction strMoreDiscode(str){\r\n    //str = str.replace(/\\r\\n/g,"");  \r\n    str = str.replace(/([^\\r])\\n/g,\'$1\');\r\n\r\n    //str = str.replace(/code/g,"wxxxcode-style");\r\n    return str;\r\n}\r\n</code></pre>\r\n\r\n<p>经过上面的修改，在进行替换时，会将&ldquo;\\n&rdquo;替换掉而&ldquo;\\r\\n&rdquo;并不会，这样就保留了代码段中的换行。</p>\r\n\r\n<p><strong>2. 修改 HTML 转义字符</strong></p>\r\n\r\n<p>先将 wxDiscode.js 中的</p>\r\n\r\n<pre>\r\n<code>\r\nstr = str.replace(/&lt;/g, \'&lt;\');\r\nstr = str.replace(/&gt;/g, \'&gt;\');\r\nstr = str.replace(/&amp;/g, \'&amp;\');\r\n</code></pre>\r\n\r\n<p>注释掉，然后在 html2json.js 中的 transEmojiStr() 函数中添加这三个字符的替换：</p>\r\n\r\n<pre>\r\n<code class="language-javascript">\r\nfunction transEmojiStr(str){\r\n  // var eReg = new RegExp("["+__reg+\' \'+"]");\r\n  //修复 &lt; &gt; 的显示问题\r\n  str = str.replace(/&lt;/g, \'&lt;\');\r\n  str = str.replace(/&gt;/g, \'&gt;\');\r\n  str = str.replace(/&amp;/g, \'&amp;\');\r\n\r\n</code></pre>\r\n\r\n<p><strong>3. /* */注释不显示问题</strong></p>\r\n\r\n<p>如果文章内容中含有&ldquo;/* */&rdquo; 的注释，wxParse 在解析时会替换掉，解决的办法就是在 html2json.js 中注释掉这个替换语句：</p>\r\n\r\n<pre>\r\n<code class="language-java">\r\nfunction trimHtml(html) {\r\n  return html\r\n        //.replace(/\\n+/g, \'\')\r\n        .replace(//ig, \'\')\r\n        // 替换掉 /* */\r\n        //.replace(/\\/\\*.*?\\*\\//ig, \'\')\r\n        .replace(/[ ]+</code></pre>\r\n\r\n<p><code><strong>4. 修改获取文章内容数据</strong></code></p>\r\n\r\n<p><code>在获取文章内容函数方式里，把请求的数据内容替换标签，如：</code></p>\r\n\r\n<pre>\r\n<code><code>\r\n//替换代码标签\r\nvar contents = response.data.content.rendered.replace(/&lt;pre[^&gt;]*&gt;&lt;code class=\\&quot;([^\\s]*)\\&quot;&gt;/g, &quot;&lt;pre class=\\&quot;pure-highlightjs $1\\&quot;&gt;&quot;).replace(/&lt;\\/code&gt;&lt;\\/pre&gt;/g, &quot;&lt;/pre&gt;&quot;);\r\n\r\n//替换标签后内容返回\r\nWxParse.wxParse(&#39;article&#39;, &#39;html&#39;, contents, self, 5);</code></code></pre>\r\n'

export const result = result_.replace(/\r\n/g,"<br>")
