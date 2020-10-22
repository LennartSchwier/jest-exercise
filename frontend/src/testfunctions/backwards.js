export default function backwards(someString) {
    const newArray = someString.split("");
    const reversedArray = newArray.reverse();
    return reversedArray.join("");


}