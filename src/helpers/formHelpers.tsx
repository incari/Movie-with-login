const getFormData = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const email = data.get("email")?.toString() || "";
  const password = data.get("password")?.toString() || "";
  const confirmPassword = data.get("confirmPassword")?.toString() || "";

  return { email, password, confirmPassword };
};

export { getFormData };
