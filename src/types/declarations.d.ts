declare module "*.json" {
  const value: Letter[];
  export default value;
}

type Letter = {
  thai: string,
  burmese: string,
  english: string,
  meaning?: string
}

interface CardState {
  letter: Letter | null;
  category: string;
  lastKey: number;
  pronunciation: boolean;
  playing: boolean;
}

interface FlashCardProps {
  category: 'consonant' | 'vowel' | 'number'
}
