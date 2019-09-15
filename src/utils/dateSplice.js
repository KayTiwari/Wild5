export function spliceString (str, str2){
    const year = Number(str.slice(0,4))
      const month = Number(str.slice(5,7))
      const day = Number(str.slice(8,10))
      const hour = Number(str.slice(11,13))
      const minute = Number(str.slice(14,16))
      const year2 = Number(str2.slice(0,4))
      const month2 = Number(str2.slice(5,7))
      const day2 = Number(str2.slice(8,10))
      const hour2 = Number(str2.slice(11,13))
      const minute2 = Number(str2.slice(14,16))
      console.log(minute2)
      console.log(minute)
      console.log("minute" + (Math.abs(minute2 - minute)))
      console.log("hour" + (hour2 - hour))
      console.log("day" + (day2 - day))
      console.log("month" + (month2 - month))
      console.log("year" + (year2 - year))

     
      
        return [7,14,21,28,30].includes(Math.abs(day2 - day))
       
  }