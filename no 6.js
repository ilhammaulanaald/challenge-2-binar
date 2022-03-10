function getAngkaTerbesarKedua(dataNumbers) {
    let angkaMax = 0;
    if (dataNumbers != null) {
      if (dataNumbers.length > 0) {
        for (let index = 1; index < dataNumbers.length; index++) {
          if (dataNumbers[index] > angkaMax) {
            angkaMax = dataNumbers[index];
          }       
        }
        return angkaMax;
      } 
      else if (dataNumbers == 0) {
        return 'ERROR : Data cannot be filled with 0';
        
      }
      else {
        return false;
      }
    } 
    else {
      return 'ERROR : Data cannot be empty';
    }
  }
    const dataAngka = [9,4,7,7,4,3,2,2,8]
    
    console.log(getAngkaTerbesarKedua(dataAngka))
    console.log(getAngkaTerbesarKedua(0))
    console.log(getAngkaTerbesarKedua())
