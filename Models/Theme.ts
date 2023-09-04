
export type ThemeData = {
    backdrop?: string,
    actionButtonText: string,
    logo: string,
    placeholderText: string,
    primary: ThemeColor,
    secondary?: ThemeColor
}

export type ThemeColor = {
    DEFAULT: string;
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
    950?: string;
    text: string,
    textMuted?: string,
}

export const THEME_COLORS:{[key:string]:ThemeData} = {
    "imxMarketplace": {
        backdrop: "#007985",
        actionButtonText: '#000000',
        placeholderText: '#8C98C0',
        logo: '#ffffffff',
        primary: {
            DEFAULT: '#2EECFF',
            '50': '#E6FDFF',
            '100': '#D1FBFF',
            '200': '#A8F7FF',
            '300': '#80F3FF',
            '400': '#57F0FF',
            '500': '#0f0',
            '600': '#00E8FF',
            '700': '#00ACBD',
            '800': '#007985',
            '900': '#00464D',
            'text': '#fff',
        },
        secondary: {
            DEFAULT: '#111D36',
            '50': '#313C9B',
            '100': '#2E3B93',
            '200': '#232A70',
            '300': '#202965',
            '400': '#1C2759',
            '500': '#162546',
            '600': '#14213E',
            '700': '#111D36',
            '800': '#0F192F',
            '900': '#0C1527',
            '950': '#0B1123',
            'text': '#D1FBFF',
        },
    },
    "ea7df14a1597407f9f755f05e25bab42": {
        backdrop: "#007985",
        placeholderText: '#C6F2F6',
        actionButtonText: '#000000',
        logo: '#ffffffff',
        primary: {
            DEFAULT: '#80E2EB',
            '50': '#FFFFFF',
            '100': '#FFFFFF',
            '200': '#EAFAFC',
            '300': '#C6F2F6',
            '400': '#A3EAF1',
            '500': '#80E2EB',
            '600': '#50D7E3',
            '700': '#22C9D9',
            '800': '#1A9CA8',
            '900': '#136F78',
            '950': '#0F5960',
            'text': '#fff',
        },
        secondary: {
            DEFAULT: '#2E5970',
            '50': '#C1D9E6',
            '100': '#B3D0E0',
            '200': '#96BFD4',
            '300': '#79ADC8',
            '400': '#5C9BBC',
            '500': '#224253',
            '600': '#0F1D27',
            '700': '#0F1D27',
            '800': '#224253',
            '900': '#162B36',
            '950': '#0E1B22',
            'text': '#D1FBFF',
        },
    },
    "light": {
        placeholderText: '#868686',
        actionButtonText: '255 255 255',
        logo: '#e23173',
        primary: {
            DEFAULT: '#E42575',
            '50': '#F8C8DC',
            '100': '#F6B6D1',
            '200': '#F192BA',
            '300': '#ED6EA3',
            '400': '#E8498C',
            '500': '#E42575',
            '600': '#A6335E',
            '700': '#881143',
            '800': '#930863',
            '900': '#c499af',
            'text': '17, 17, 17',
            'textMuted': '#56617B',
        },
        secondary: {
            DEFAULT: '#EFEFEF',
            '50': '#313C9B',
            '100': '#2E3B93',
            '200': '#868686',
            '300': '#8b8b8b',
            '400': '#b1b1b1',
            '500': '227, 227, 227',
            '600': '#dfdfdf',
            '700': '240, 240, 240',
            '800': '243, 244, 246',
            '900': '#faf8f8',
            '950': '#fff',
            'text': '108, 108, 108',
        },
    },
    "default": {
        backdrop: "#3e1240",
        placeholderText: '#8C98C0',
        actionButtonText: '255 255 255',
        logo: '#e23173',
        primary: {
            DEFAULT: '#E42575',
            '50': '#F8C8DC',
            '100': '#F6B6D1',
            '200': '#F192BA',
            '300': '#ED6EA3',
            '400': '#E8498C',
            '500': '#E42575',
            '600': '#A6335E',
            '700': '#881143',
            '800': '#930863',
            '900': '#6e0040',
            'text': '255, 255, 255',
            'textMuted': '#56617B',
        },
        secondary: {
            DEFAULT: '#111D36',
            '50': '#313C9B',
            '100': '#2E3B93',
            '200': '#868686',
            '300': '#232A70',
            '400': '#1C2759',
            '500': '22, 37, 70',
            '600': '#14213E',
            '700': '17, 29, 54',
            '800': '15, 25, 47',
            '900': '#0C1527',
            '950': '#0B1123',
            'text': '171, 181, 209',
        },
    },
    "evmos": {
        placeholderText: '#806E6B',
        actionButtonText: '255 255 255',
        logo: '#e23173',
        primary: {
            DEFAULT: '#ED4E33',
            '50': '#F8C8DC',
            '100': '#F6B6D1',
            '200': '#F192BA',
            '300': '#ED6EA3',
            '400': '#E8498C',
            '500': '#DBD3D1',
            '600': '#A6335E',
            '700': '#881143',
            '800': '#930863',
            '900': '#ED4E33',
            'text': '#4a3d3b',
            'textMuted': '#56617B',
        },
        secondary: {
            DEFAULT: '#EFEFEF',
            '50': '#313C9B',
            '100': '#2E3B93',
            '200': '#868686',
            '300': '#8b8b8b',
            '400': '#b1b1b1',
            '500': '227, 227, 227',
            '600': '#dfdfdf',
            '700': '244, 243, 242',
            '800': '248, 247, 247',
            '900': '#faf8f8',
            '950': '#fff',
            'text': '122, 91, 91',
        },
    },
}