type Letter = {
  thai: string,
  burmese: string,
  english: string
}

declare module "*.json" {
  const value: Letter[];
  export default value;
}

interface CardState {
  letter: Letter;
  lastKey: number;
  pronunciation: boolean;
  playing: boolean;
}
