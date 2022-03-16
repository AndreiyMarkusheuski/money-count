import React, { useState } from 'react';
import Main from './main';
import { ThemeProvider } from '../../context'

export const App = () => {
    return (
        <ThemeProvider>
            <Main />
        </ThemeProvider>
    )
}