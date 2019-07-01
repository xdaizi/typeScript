// 接口
interface Labelvalue {
    label: string
}
function getValue (value: Labelvalue) {
    console.log(value.label)
}
const temp = {label: 'input', value: 1}
getValue(temp)