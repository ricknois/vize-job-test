const regexEmail = /\S+@\S+\.\S+/;
const regexUser = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/;
const minChar = 6;

export const analyzer: Record<string, (input: string) => boolean> = {
  Email: (input: string) => regexEmail.test(input),
  Password: (input: string) => input.length >= minChar,
  Name: (input: string) => regexUser.test(input) && input.length >= minChar,
};
