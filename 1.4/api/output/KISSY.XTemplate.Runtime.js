Ext.data.JsonP.KISSY_XTemplate_Runtime({"tagname":"class","name":"KISSY.XTemplate.Runtime","autodetected":{},"files":[{"filename":"runtime.js","href":"runtime.html#KISSY-XTemplate-Runtime"}],"members":[{"name":"loader","tagname":"cfg","owner":"KISSY.XTemplate.Runtime","id":"cfg-loader","meta":{}},{"name":"name","tagname":"cfg","owner":"KISSY.XTemplate.Runtime","id":"cfg-name","meta":{}},{"name":"silent","tagname":"cfg","owner":"KISSY.XTemplate.Runtime","id":"cfg-silent","meta":{}},{"name":"addCommand","tagname":"method","owner":"KISSY.XTemplate.Runtime","id":"method-addCommand","meta":{}},{"name":"removeCommand","tagname":"method","owner":"KISSY.XTemplate.Runtime","id":"method-removeCommand","meta":{}},{"name":"render","tagname":"method","owner":"KISSY.XTemplate.Runtime","id":"method-render","meta":{}},{"name":"addCommand","tagname":"method","owner":"KISSY.XTemplate.Runtime","id":"static-method-addCommand","meta":{"static":true}},{"name":"removeCommand","tagname":"method","owner":"KISSY.XTemplate.Runtime","id":"static-method-removeCommand","meta":{"static":true}}],"alternateClassNames":[],"aliases":{},"id":"class-KISSY.XTemplate.Runtime","short_doc":"XTemplate runtime. ...","component":false,"superclasses":[],"subclasses":["KISSY.XTemplate"],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Subclasses</h4><div class='dependency'><a href='#!/api/KISSY.XTemplate' rel='KISSY.XTemplate' class='docClass'>KISSY.XTemplate</a></div><h4>Files</h4><div class='dependency'><a href='source/runtime.html#KISSY-XTemplate-Runtime' target='_blank'>runtime.js</a></div></pre><div class='doc-contents'><p>XTemplate runtime. only accept tpl as function.</p>\n\n<pre class='inline-example '><code><a href=\"#!/api/KISSY-method-use\" rel=\"KISSY-method-use\" class=\"docClass\">KISSY.use</a>('xtemplate/runtime',function(S, XTemplateRunTime){\n     document.writeln(\n         new XTemplateRunTime(function(scopes){ return scopes[0].title;}).render({title:2})\n     );\n });\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-loader' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.XTemplate.Runtime'>KISSY.XTemplate.Runtime</span><br/><a href='source/runtime.html#KISSY-XTemplate-Runtime-cfg-loader' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.XTemplate.Runtime-cfg-loader' class='name expandable'>loader</a> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><span class=\"signature\"></span></div><div class='description'><div class='short'><p>tpl loader to load sub tpl by name</p>\n</div><div class='long'><p>tpl loader to load sub tpl by name</p>\n</div></div></div><div id='cfg-name' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.XTemplate.Runtime'>KISSY.XTemplate.Runtime</span><br/><a href='source/runtime.html#KISSY-XTemplate-Runtime-cfg-name' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.XTemplate.Runtime-cfg-name' class='name expandable'>name</a> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"></span></div><div class='description'><div class='short'>template file name for chrome debug ...</div><div class='long'><p>template file name for chrome debug</p>\n<p>Defaults to: <code>'unspecified'</code></p></div></div></div><div id='cfg-silent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.XTemplate.Runtime'>KISSY.XTemplate.Runtime</span><br/><a href='source/runtime.html#KISSY-XTemplate-Runtime-cfg-silent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.XTemplate.Runtime-cfg-silent' class='name expandable'>silent</a> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"></span></div><div class='description'><div class='short'>whether throw exception when template variable is not found in data\n\nor\n\ncommand is not found\n\n '{{title}}'.render({t...</div><div class='long'><p>whether throw exception when template variable is not found in data</p>\n\n<p>or</p>\n\n<p>command is not found</p>\n\n<pre><code> '{{title}}'.render({t2:0})\n</code></pre>\n<p>Defaults to: <code>true</code></p></div></div></div></div></div><div class='members-section'><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Instance methods</h3><div id='method-addCommand' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.XTemplate.Runtime'>KISSY.XTemplate.Runtime</span><br/><a href='source/runtime.html#KISSY-XTemplate-Runtime-method-addCommand' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.XTemplate.Runtime-method-addCommand' class='name expandable'>addCommand</a>( <span class='pre'>commandName, fn</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>add command definition to current template ...</div><div class='long'><p>add command definition to current template</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>commandName</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li><li><span class='pre'>fn</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>command definition</p>\n</div></li></ul></div></div></div><div id='method-removeCommand' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.XTemplate.Runtime'>KISSY.XTemplate.Runtime</span><br/><a href='source/runtime.html#KISSY-XTemplate-Runtime-method-removeCommand' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.XTemplate.Runtime-method-removeCommand' class='name expandable'>removeCommand</a>( <span class='pre'>commandName</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>remove command by name ...</div><div class='long'><p>remove command by name</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>commandName</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-render' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.XTemplate.Runtime'>KISSY.XTemplate.Runtime</span><br/><a href='source/runtime.html#KISSY-XTemplate-Runtime-method-render' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.XTemplate.Runtime-method-render' class='name expandable'>render</a>( <span class='pre'>data, [keepDataFormat]</span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"></span></div><div class='description'><div class='short'>get result by merge data with template ...</div><div class='long'><p>get result by merge data with template</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li><li><span class='pre'>keepDataFormat</span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a> (optional)<div class='sub-desc'><p>for internal use</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div></div><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static methods</h3><div id='static-method-addCommand' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.XTemplate.Runtime'>KISSY.XTemplate.Runtime</span><br/><a href='source/runtime.html#KISSY-XTemplate-Runtime-static-method-addCommand' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.XTemplate.Runtime-static-method-addCommand' class='name expandable'>addCommand</a>( <span class='pre'>commandName, fn</span> )<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>add command to all template ...</div><div class='long'><p>add command to all template</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>commandName</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'>\n</div></li><li><span class='pre'>fn</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='static-method-removeCommand' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.XTemplate.Runtime'>KISSY.XTemplate.Runtime</span><br/><a href='source/runtime.html#KISSY-XTemplate-Runtime-static-method-removeCommand' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.XTemplate.Runtime-static-method-removeCommand' class='name expandable'>removeCommand</a>( <span class='pre'>commandName</span> )<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>remove command from all template by name ...</div><div class='long'><p>remove command from all template by name</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>commandName</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});