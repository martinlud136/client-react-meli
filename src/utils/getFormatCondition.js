export default function getFormatCondition(state){
    switch(state){
        case "new":
            return "Nuevo"
        case "used":
            return "Usado"
        default:
            return "Nuevo"
    }
}