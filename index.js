const record = [
    { year: "2018", result: "L" },
    { year: "2017", result: "W" },
    { year: "2016", result: "N/A" }
]

function superbowlWin(record) {
    let winner = record.find(e => e.result === "W")
    if (winner) {
        return winner.year
    } else {
        return undefined
    }

}