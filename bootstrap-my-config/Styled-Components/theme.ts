import { css, keyframes } from 'styled-components';

// I just exported my SCSS library here. I'm not sure if this is best practice, so I'll reevaluate it going forward.

export const theme: any = {
    variables: {
        colors: {
            navy: '0, 031, 63',
            blue: '0, 116, 217',
            aqua: '127, 219, 255',
            teal: '57, 204, 204',
            olive: '61, 153, 112',
            green: '46, 204, 64',
            lime: '1, 255, 112',
            yellow: '255, 220, 0',
            orange: '255, 133, 27',
            red: '255, 65, 54',
            maroon: '133, 20, 75',
            fuchsia: '240, 18, 190',
            purple: '177, 13, 201',
            black: '17, 17, 17',
            gray: '170, 170, 170',
            grey: '170, 170, 170',
            silver: '221, 221, 221',
            white: '248, 248, 248'
        }
    },
    polyfills: {
        fontSmoothing: (arg: "subpixel" | "pixel") => {
            if (arg === 'pixel') {
                return `-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;`
            } else {
                return `-webkit-font-smoothing:subpixel-antialiased;-moz-osx-font-smoothing:auto;`
            }
        },
        boxShadow: (arg: string) => {
            return `-webkit-box-shadow:${arg};-moz-box-shadow:${arg};box-shadow:${arg};`;
        },
        borderRadius: (arg: string) => {
            return `-webkit-border-radius:${arg};-moz-border-radius:${arg};border-radius:${arg};`;
        },
        filter: (arg: string) => {
            return `-o-filter:${arg};-ms-filter:${arg};-webkit-filter:${arg};-moz-filter:${arg};filter:${arg};`;
        },
        opacity: (arg: string = `0.5`) => {
            return `opacity:${arg};-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity="${arg}*100")";filter:alpha(opacity=${arg}*100);-moz-opacity:${arg};-khtml-opacity:${arg};`;
        },
        transition: (arg: string = `1s`) => {
            return `-o-transition:${arg};-moz-transition:${arg};-webkit-transition:${arg};transition:${arg};`;
        },
        transform: (arg: string) => {
            return `-o-transform:${arg};-ms-transform:${arg};-webkit-transform:${arg};transform:${arg};`;
        },
        transformOrigin: (arg: string) => {
            return `-o-transform-origin:${arg};-ms-transform-origin:${arg};-webkit-transform-origin:${arg};transform-origin:${arg};`;
        },
        keyframes: (arg: string, content: string) => {
            return `@-webkit-keyframes ${arg} {${content}}@-moz-keyframes ${arg} {${content}}@-ms-keyframes ${arg} {${content}}@-o-keyframes ${arg} {${content}}@keyframes ${arg} {${content}}`;
        },
        animation: (
            animationName: any,
            animationDuration:any='0s',
            animationTimingFunction: any = "ease",
            ) => {
                // 'css' allows us to accept styled-components keyframes object
                return css`
                    -webkit-animation:${animationName} ${animationDuration} ${animationTimingFunction};
                    -moz-animation:${animationName} ${animationDuration} ${animationTimingFunction};
                    -ms-animation:${animationName} ${animationDuration} ${animationTimingFunction};
                    -o-animation:${animationName} ${animationDuration} ${animationTimingFunction};
                    animation:${animationName} ${animationDuration} ${animationTimingFunction};
                `;
        },
        animationDelay: (arg: string) => {
            return `-o-animation:${arg};-moz-animation:${arg};-webkit-animation:${arg};animation:${arg};`;
        },
        linearGradient: (angle: string, gradient1: string, gradient2: string) => {
            return `
                    filter(progid:DXImageTransform.Microsoft.gradient(GradientType=${angle},StartColorStr='#{${gradient1}}',EndColorStr='#{${gradient2}}'));
                    background-color:${gradient2};background-image:-webkit-gradient(linear,${angle},from(${gradient1}),to(${gradient2}));
                    background-image:-webkit-linear-gradient(${angle},${gradient1},${gradient2});background-image:-moz-linear-gradient(${angle},${gradient1},${gradient2});
                    background-image:-ms-linear-gradient(${angle},${gradient1},${gradient2});background-image:-o-linear-gradient(${angle},${gradient1},${gradient2});
                    background-image:linear-gradient(${angle},${gradient1},${gradient2});
            `;
        }
    },
    
    breakpoints: {
        smartphone: (content: string) => {
            return `@media (max-width: 480px) {${content}}`;
        },
        smartphoneLandscape: (content: string) => {
            return `@media (max-width: 768px) {${content}}`;
        },
        tablet: (content: string) => {
            return `@media (max-width: 991px) {${content}}`;

        },
        desktop: (content: string) => {
            return `@media (max-width: 1300px) {${content}}`;
        },
        desktopLarge: (content: string) => {
            return `@media (max-width: 1600px) {${content}}`;
        }
    },

    animations: {
        fadeInDef: keyframes`
            from { 
                opacity: 0;
                -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity="0")";
                filter:alpha(opacity=0*100);
                -moz-opacity: 0;
                -khtml-opacity: 0;
            } to { 
                opacity: 1;
                -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity="100")";
                filter:alpha(opacity=1*100);
                -moz-opacity: 1;
                -khtml-opacity: 1;
            }`
        ,
        fadeIn( 
            animationDuration:any='1s',
            animationTimingFunction: any = "ease",
            ): any {
                return css`
                           animation: ${theme.animations.fadeInDef} ${animationDuration} ${animationTimingFunction};
                           -webkit-animation: ${theme.animations.fadeInDef} ${animationDuration} ${animationTimingFunction}
                           -moz-animation: ${theme.animations.fadeInDef} ${animationDuration} ${animationTimingFunction};
                           -ms-animation: ${theme.animations.fadeInDef} ${animationDuration} ${animationTimingFunction};
                           -o-animation: ${theme.animations.fadeInDef} ${animationDuration} ${animationTimingFunction};
                          `;
        }
    },
    mixins: {
        box: (width: string, height: string = width) => {
            return `width:${width};height:${height}`;
        }
    }
}
