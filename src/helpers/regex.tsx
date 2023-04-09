const formatErrorText = (errorMessage: string) => {
  const regex = /auth\/(.+?)\)/; // Get value from /auth and )
  const match = errorMessage.match(regex);
  if (match && match[1]) {
    const message = match[1].split("-").join(" ");
    const capitalizedMessage =
      message.charAt(0).toUpperCase() + message.slice(1);

    return capitalizedMessage;
  }
  return "Unknown error";
};

const isPasswordError = (str: string) => {
  const regex = /passwords/i;
  return regex.test(str);
};

function isValidEmail(email: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

export { formatErrorText, isPasswordError, isValidEmail };
