function checkSeason(month) {
    const seasons = ["Winter", "Spring", "Summer", "Autumn"];
    
    if (month >= 3 && month <= 5) {
        return seasons[1];  
    } else if (month >= 6 && month <= 8) {
        return seasons[2]; 
    } else if (month >= 9 && month <= 11) {
        return seasons[3]; 
    } else {
        return seasons[0]; 
    }
}