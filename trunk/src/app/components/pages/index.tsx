import React from 'react';
import Main from './main';
import { ThemeProvider } from '../../context';

export const App = () => <ThemeProvider><Main/></ThemeProvider>