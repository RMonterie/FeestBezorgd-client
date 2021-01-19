//Function that that prefills some fields when the user has that data.
export const preFillForm = (user, setValue): void => {
  if (!user) {
    return;
  }

  setValue("name", user.name);
  setValue("email", user.email);

  if (user.phoneNumber?.trim().length) {
    setValue("phoneNr", user.phoneNumber);
  }
};
