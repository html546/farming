$('.call').click(function () {
    layer.open({
        type: 1,
        content: '<a href="javascript:;"><p>呼叫</p></a><a href="javascript:;"><p>复制</p></a><a href="javascript:;"><p>添加到手机通讯录</p></a>',
        className: 'popup_call'
    })
})