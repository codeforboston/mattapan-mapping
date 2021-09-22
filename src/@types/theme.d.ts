interface Theme {
    spacing: Spacing;

    // Mobile-first approach. Develop features thinking for mobile-use first then anything bigger than 576px falls into 'tablet' range. Anything bigger than 921px falls into 'desktop' range.
    mediaQuery: MediaQuery;

    fonts: Fonts;
}

interface Spacing {
    xs: '4px';
    s: '8px';
    m: '16px';
    l: '24px';
    xl: '32px';
    xxl: '40px';
}

interface MediaQuery {
    tablet: '576px';
    desktop: '921px';
}

interface Fonts {
    dm: string;
    fontWeight: FontWeight
    fontSize: FontSize
}

interface FontWeight {
    bold: 700;
    medium: 500;
    regular: 400;
}

interface FontSize {
    title: '40px',
    subtitle: '24px',
    regular: '16px',
    small: '12px'
}
