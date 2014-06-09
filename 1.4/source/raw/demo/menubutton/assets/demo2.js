KISSY.use("menubutton", function (S, MenuButton) {
    (function () {
        // 调用 Select.decorate 接口替换已有的 select 元素
        var select = MenuButton.Select.decorate('#decorateSelect', {
            width:200,
            prefixCls:"c2c-",
            // 设置对齐方式, 与普通的 Align 大体一致
            // 该配置同菜单配置项
            menu:{
                align:{
                    offset:[0, -1]
                },
                height:150,
                elStyle:{
                    overflow:"auto",
                    overflowX:"hidden"
                }
            }
        });
        select.on("click", function (e) {
            alert('当前值为: ' + select.get("value"));
        });
    })();

    (function () {
        // 调用 Select.decorate 接口替换已有的 select 元素
        var select = MenuButton.Select.decorate('#decorateSelect2', {
            //defaultCaption:"请选择",
            prefixCls:"pix-",
            width:285,
            menu:{
                align:{
                    points:['tl', 'tl'],
                    offset:[0, -1]
                },
                elStyle:{
                    "max-height":"200px",
                    overflow:"auto",
                    overflowX:"hidden"
                }
            }
        });
        select.on("click", function (e) {
            alert('当前值为: ' + select.get("value"));
        });
    })();
});
