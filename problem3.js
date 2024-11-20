function rickshawVara(public) {
    if (typeof public !== 'number') {
        return 'please provid a number'
    }
    const busSeat = 50;
    const microSeat = 15;
    const rickshawVara = 20;
    const busSeatRemaning = public % busSeat;
    const microSeatRemaning = busSeatRemaning % microSeat;
    const totalRickshawVara = microSeatRemaning * rickshawVara;
    return totalRickshawVara;
}
const totalRemaningRickShawVara = rickshawVara(20);
console.log(totalRemaningRickShawVara)