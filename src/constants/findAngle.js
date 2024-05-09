const findAngle = (hour, minute) => {
    const totalAngle = 360
    let hourAngle = 12 / 60
    let minuteAngle = totalAngle / 60
    
    const totalHourAngle = hour * hourAngle
    const totalMinuteAngle = minute * minuteAngle

    const finalAngle = totalHourAngle - totalMinuteAngle
    console.log(finalAngle)

}

findAngle(6, 0)