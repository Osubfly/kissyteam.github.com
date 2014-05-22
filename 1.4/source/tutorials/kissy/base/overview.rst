Base 概述
===========================

author: `左莫 <zuomo@taobao.com>`_

Base是一个基础类，通过继承Base可以以一种统一的方式创建自己的具有新的属性、并可作为事件目的(Attribute，EventTarget的能力)的类。

如何引用
-------------------------------------

要使用Base，首先要引入KISSY的种子文件

html代码：


.. code-block:: html

    <script src="http://g.tbcdn.cn/kissy/k/1.4.3/seed.js"></script>


.. code-block:: javascript

    KISSY.use('base',function(S,Base){

    });


or


.. code-block:: javascript

    KISSY.add("brix/core/chunk", function(S, Base) {
        
    }, {
        requires: ["base"]
    });



继承Base
-------------------------------------

下面的代码定义完，Chunk就和Base有了同样的功能


.. code-block:: javascript

    KISSY.add("brix/core/chunk", function(S, Base) {
        var Chunk = Base.extend({},{});
        return Chunk;
    }, {
        requires: ["rich-base"]
    });
    


接下来会为大家介绍更多……


构造函数名
````````````````````````````````````````

我们上面定义的 Chunk 类并没有显示指定构造函数，Base内部会动态的构建一个 function 作为 Chunk 的构造函数，
并且名字是"BaseDerived",要显示的指定名称，只需要指定静态属性 name 值即可

.. code-block:: javascript

    var Chunk = Base.extend({},{
        name: 'Chunk'
    });
    

初始化函数和析构函数
````````````````````````````````````````

Base在初始化时会自动调用各级类的initializer函数，在析构时会自动调用destructor函数，
所有初始或者析构处理只需定义相应的函数就可以了，不用显式调用父类的函数。


.. code-block:: javascript

    var Chunk = Base.extend({
        initializer: function() {

        },
        destructor: function() {

        }
    },{});



ATTRS属性
````````````````````````````````````````

可以用关联矩阵(associative array)的方式定义类的属性和配置参数,具体请查看“[Base ATTRS](http://docs.kissyui.com/1.4/docs/html/api/base/base.html)”


.. code-block:: javascript

    var Chunk = Base.extend({
    },{
        ATTRS: {
            attr: {
                value:value,
                valueFn:function(){
                },
                setter:function(){
                },
                getter: function(s) {
                }
            }
    });
    

ATTRS的bind和sync
````````````````````````````````````````

Base提供了对属性值初始化的同步以及变化的事件监听。先看一下代码


.. code-block:: javascript

    var Chunk = Base.extend({
        _onSetName:function(){
        }
    },{
        ATTRS: {
            name: {
                valule:value,
                valueFn:function(){
                },
                setter:function(){
                },
                getter: function(s) {
                }
            }
    });
    
    

实例化Chunk类并设置attr属性值


.. code-block:: javascript

    var chunk = new Chunk({name:1});
    chunk.set('name',2);
    

上面的实例化和设置属性值，都会同步调用到类中定义的_onSetAttr函数。具体的调用可查看Base源码中的bindInternal和syncInternal函数。

callSuper
````````````````````````````````````````

在子类方法内部可以通过 callSuper 来调用父类同名函数，例如：


.. code-block:: javascript

    var Parent = Base.extend({
         go: function(i){
            S.log('call parent go ' +i);
         }   
    });
    
    var Child = Parent.extend({
        go: function(i){
            this.callSuper(i);
            S.log('cal child go '+ i);
        }
    });
    
    // call parent go 1
    // call child go 1
    new Child().go(1); 
    
    

Plugins
-------------------------------------

Plugins机制可以用来在类的实例（而不是类本身）上动态添加特性。Base提供了一个配置（plugins）和三个函数（plug、unplug和getPlugin）用来管理插件。

plugins
````````````````````````````````````````

plugins的类型是Array，在类实例化的时候实例化plugin，并调用plugin的pluginInitializer初始化函数。在销毁的时候调用pluginDestructor析构函数。

plug(plugin)
````````````````````````````````````````

参数plugin可以是类，也可以是实例，如果是类则无参实例化plugin。
两者都会调用plugin的pluginInitializer初始化函数

直接传实例化的示例代码：


.. code-block:: javascript

    new Editor().plug(new FontSize({
      default: '14px'
    }))
    


unplug(plugin)
````````````````````````````````````````

从plugins数组中移除plugin，并调用pluginDestructor析构函数。


getPlugin(id)
````````````````````````````````````````

通过类plugin定义的的p.get('pluginId') || p.pluginId来拿到plugin的实例。



扩展
-------------------------------------

Base的extend还提供了扩展功能，把一个主类与多个扩充类合并为一个新类。KISSY内部的很多组件都是基于这个完成的。

给个Overlay示例代码吧,具体的Overlay的实现并不仅仅如此


.. code-block:: javascript

    var Overlay = Base.extend([
            Extension.Box,
            Extension.Position,
            Loading,
            Extension.Align,
            Close,
            Mask,
            OverlayEffect
        ], {}, {
            ATTRS: {}
    });


listeners
-------------------------------------

这个配置项是用来在实例化类的时候增加事件的监听,看一下代码你就明白了。


.. code-block:: javascript

    var chunk = new Chunk({
            attr:1,
            listeners:{
                myfire:function(e){
                    
                },
                hefire :{
                    fn:function(){},
                    //上下文
                    context:{}  
               }
            }});
    chunk.fire('myfire');
    

总结
-------------------------------------

Base为我们提供了如此多的特性，采用KISSY开发模块和组件的同学，果断的用Base吧。