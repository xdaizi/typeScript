// null 的类型保护

// --strictNullChecks标记可以解决此错误：当你声明一个变量时，它不会自动地包含 null或 undefined
// 使用了 --strictNullChecks，可选参数会被自动地加上 | undefined:






// 类型断言手动去除。 语法是添加 !后缀： identifier!从 identifier的类型里去除了 null和 undefined：


function drop(arg: string | null) {
    function getter(str: string) {
        return str! + ' '
    }
    arg = arg || 'default'
    getter(arg)
}