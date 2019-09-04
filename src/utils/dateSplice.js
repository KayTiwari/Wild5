export function spliceString (str, str2){
    const year = Number(str.slice(0,4))
      const month = Number(str.slice(5,7))
      const day = Number(str.slice(8,10))
      const year2 = Number(str2.slice(0,4))
      const month2 = Number(str2.slice(5,7))
      const day2 = Number(str2.slice(8,10))
      if(year2 - year === 0 && month2 - month === 0 && day2 - day === 0,7,14,28,30){
        return true
      }
  }