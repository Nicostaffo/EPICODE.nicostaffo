
function randomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
const player1: number = 70;
const player2: number = 25;
const targetNumber: number = randomNumber(1, 100);

function comparePlayers(player1: number, player2: number, targetNumber: number): string {

    if (player1 == targetNumber && player2 == targetNumber) {
        return "Entrambi i giocatori hanno azzeccato il numero casuale!";
    } else if (player1 == targetNumber) {
        return "Il giocatore 1 ha azzeccato il numero casuale!";
    } else if (player2 == targetNumber) {
        return "Il giocatore 2 ha azzeccato il numero casuale!";
    } else {
        if (Math.abs(player1 - targetNumber) < Math.abs(player2 - targetNumber)) {
            return "Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 1 si è avvicinato di più!";
        } else if (Math.abs(player2 - targetNumber) < Math.abs(player1 - targetNumber)) {
            return "Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 2 si è avvicinato di più!";
        } else {
            return "Nessuno dei due ha azzeccato il numero casuale, entrambi si sono avvicinati allo stesso modo!";
        }
    }
}
console.log("Numero casuale generato: " + targetNumber);
console.log(player1);
console.log(player2);
console.log(comparePlayers(player1, player2, targetNumber));






