export default function getFormatCurrency(currency){
    switch(currency){
        case "USD":
            return "U$S"
        case "ARS":
            return "$"
        default:
            return "$"
    }
}