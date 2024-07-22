import consonants from "../../data/thai/consonants.json";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: CardState = {
  letter: consonants[0],
  lastKey: 0,
  pronunciation : false,
  playing: false,
}

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    setLetter: (state, action: PayloadAction<Letter>) => {
      state.letter = action.payload;
    },
    setLastKey: (state, action: PayloadAction<number>) => {
      state.lastKey = action.payload;
    },
    setPronunciation: (state, action: PayloadAction<boolean>) => {
      state.pronunciation = action.payload;
    },
    setPlaying: (state, action: PayloadAction<boolean>) => {
      state.playing = action.payload;
    }
  },
})

export const {
  setLetter,
  setLastKey,
  setPronunciation,
  setPlaying
} = cardSlice.actions;

export default cardSlice.reducer;
