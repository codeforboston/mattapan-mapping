import '@emotion/react'

export const Theme: Theme = {
    spacing: {
        xs: '4px',
        s: '8px',
        m: '16px',
        l: '24px',
        xl: '32px',
        xxl: '40px',
    },

    mediaQuery: {
        tablet: '576px',
        desktop: '921px',
    },

    fonts: {
        dm: "'DM Sans', sans-serif",
        badscript: "'Bad Script', cursive",
        fontWeight: {
            bold: 700,
            medium: 500,
            regular: 400,
        },
        fontSize: {
            title: '40px',
            subtitle: '24px',
            regular: '16px',
            small: '12px',
        }
    },

    colors: {
        peach: '#FEC0AA',
        green: '#226653',
        teal: '#2A9D8F',
        orange: '#ED5D31',
        brown: '#4D4319',
        red: '#D32F2F',
        blue: '#B4DAF9',
        black: '#000000',
        white: '#FFFFFF',
    }
}

type ThemeType = typeof Theme;

declare module '@emotion/react' {
    export interface Theme extends ThemeType { }
}
