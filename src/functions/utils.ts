// Function to check if an email is valid
export function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  // Function to generate a random string of a given length
  export function generateRandomString(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  
  // Function to check if a string is greater than a certain number of characters
  export function isStringLengthGreaterThan(str: string, minLength = 7): boolean {
    return str.length > minLength;
  }

  export const formatNumberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  export function truncateStringByWordCount(str, wordCount) {
    // Split the string by spaces to get an array of words
    const words = str.split(' ');
  
    // Check if the array length is greater than the specified word count
    if (words.length > wordCount) {
      // Return the first `wordCount` words joined by a space, followed by '...'
      return words.slice(0, wordCount).join(' ') + '...';
    }
  
    // If the array length is less than or equal to the word count, return the original string
    return str;
  }
  export function truncateStringByCharCount(str, charCount) {
    // Check if the string length is greater than the specified character count
    if (str.length > charCount) {
      // Return the first `charCount` characters followed by '...'
      return str.slice(0, charCount) + '...';
    }
  
    // If the string length is less than or equal to the character count, return the original string
    return str;
  }
  
  export const calculateTotalPrice = (addons) => {
    return addons.reduce((total, addon) => {
      return total + (parseFloat(addon.price) * addon.count);
    }, 0);
  };
  