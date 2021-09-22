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
        dm:"'DM Sans', sans-serif",
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
    }
}

type ThemeType = typeof Theme;

declare module '@emotion/react' {
    export interface Theme extends ThemeType {}
}
