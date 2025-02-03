export const daydate = () =>{
    const day = new Date().toLocaleDateString('en-US', { weekday: 'long' });
    const date = new Date().toLocaleDateString('en-US', { day: 'numeric' });
    let suffix = "th";
    if (date%10 === 1) {
        suffix = "st";
    } else if (date%10 === 2) {
        suffix = "nd";
    } else if (date%10 === 3) {
        suffix = "rd";
    }
    return (day + ", "+ date + suffix)
}

export const kelvinToCelsius = (kelvin) => {
  const celsius = kelvin - 273.15;
  return celsius;
}