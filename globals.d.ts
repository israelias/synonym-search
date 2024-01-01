// in the file where you are creating the theme (invoking the function `createTheme()`)
import { Theme } from '@mui/material/styles';

declare module '@mui/styles' {
  interface DefaultTheme extends Theme {}
}

interface Word {
  id: number;
  name: string;
  root: string;
  sense: string;
  label: string;
  uuid: string;
  value: number;
}

interface Result {
  def: {
    sseq: string[];
  };
  fl: string;
  hwi: {
    hw: string;
  }
  meta: {
    uuid: string;
    target: {
      tuuid: string;
    };
  };
  shortdef: string[];
}
