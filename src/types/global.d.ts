declare module "*.css" {
    const styles: { [className: string]: string };
    export default styles;
}

declare module "*.svg" {
    import React from "react";
    const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}
