export function isValidCPF(cpf: string): boolean {
    const cpfClean = cpf.replace(/\D/g, "");
  
    if (
      cpfClean.length !== 11 ||
      cpfClean === "00000000000" ||
      cpfClean === "11111111111" ||
      cpfClean === "22222222222" ||
      cpfClean === "33333333333" ||
      cpfClean === "44444444444" ||
      cpfClean === "55555555555" ||
      cpfClean === "66666666666" ||
      cpfClean === "77777777777" ||
      cpfClean === "88888888888" ||
      cpfClean === "99999999999"
    ) {
      return false;
    }
  
    let sum = 0;
    let remainder = 0;
  
    for (let i = 1; i <= 9; i++) {
      sum += parseInt(cpfClean.substring(i - 1, i)) * (11 - i);
    }
  
    remainder = (sum * 10) % 11;
  
    if (remainder === 10 || remainder === 11) {
      remainder = 0;
    }
  
    if (remainder !== parseInt(cpfClean.substring(9, 10))) {
      return false;
    }
  
    sum = 0;
    for (let i = 1; i <= 10; i++) {
      sum += parseInt(cpfClean.substring(i - 1, i)) * (12 - i);
    }
  
    remainder = (sum * 10) % 11;
  
    if (remainder === 10 || remainder === 11) {
      remainder = 0;
    }
  
    if (remainder !== parseInt(cpfClean.substring(10, 11))) {
      return false;
    }
  
    return true;
  }

  export function isValidEmail(email: string): boolean {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  }