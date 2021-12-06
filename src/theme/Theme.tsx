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
        header: "'Baron Neue', sans-serif",
        body: "'Lato', sans-serif",
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
    },

    map: {
        street: 'mapbox://styles/mapbox/streets-v11',
        outdoor: 'mapbox://styles/mapbox/outdoors-v11',
        light: 'mapbox://styles/mapbox/light-v10',
        dark: 'mapbox://styles/mapbox/dark-v10',
        satellite: 'mapbox://styles/mapbox/satellite-v9',
        satelliteStreet: 'mapbox://styles/mapbox/satellite-streets-v11',
        navigationDay: 'mapbox://styles/mapbox/navigation-day-v1',
        navigationNight: 'mapbox://styles/mapbox/navigation-night-v1',
    }
}

type ThemeType = typeof Theme;

declare module '@emotion/react' {
    export interface Theme extends ThemeType { }
}
