type Letter = {
  thai: string,
  burmese: string,
  english: string
}

declare module "*.json" {
  const value: Letter[];
  export default value;
}
