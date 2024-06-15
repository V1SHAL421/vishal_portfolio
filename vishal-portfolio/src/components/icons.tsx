type IconProps = React.HTMLAttributes<SVGElement>;
interface IconPropSize {
    width: string;
    height: string;
    quality: string;
}
import Image from "next/image";

// The icons that can be used on the website
export const Icons = {
    amadeusLogoPng: (props: IconProps) => (
        <Image
            src="/amadeus_logo.png"
            alt="Amadeus Logo"
            width="100"
            height="70"
            quality="100"
            priority={true}
        />
    ),
    ibmLogoPng: (props: IconProps) => (
        <Image
            src="/ibm_logo.png"
            alt="IBM Logo"
            width="80"
            height="80"
            quality="100"
            priority={true}
        />
    ),
    vishalPng: (props: IconProps) => (
        <Image
            src="/vishal.png"
            alt="Vishal"
            width="80"
            height="80"
            quality="100"
            priority={true}
            />
    ),
    foodClubPng: (props: IconProps) => (
        <Image
            src="/foodclub_logo.png"
            alt="FoodClub Logo"
            width="100"
            height="70"
            quality="100"
            priority={true}
        />
    ),
    tenZymePng: (props: IconProps) => (
        <Image
            src="/10zyme.png"
            alt="10zyme Logo"
            width="80"
            height="80"
            quality="100"
            priority={true}
        />
    ),
    linkedInPng: (props: IconProps) => (
        <Image
            src="/linkedin_icon.png"
            alt="LinkedIn Icon"
            width="100"
            height="100"
            quality="100"
            priority={true}
        />
    ),
    denrJpg: (props: IconProps) => (
        <Image
            src="/denr_logo.jpg"
            alt="Denr Logo"
            width="100"
            height="100"
            quality="100"
            priority={true}
        />
    ),
    appenJpg: (props: IconProps) => (
        <Image
            src="/appen_logo.jpg"
            alt="Appen Logo"
            width="100"
            height="100"
            quality="100"
            priority={true}
        />
    ),
    nxtuitionsJpg: (props: IconProps) => (
        <Image
            src="/nxtuitions_logo.jpg"
            alt="NxTuitions Logo"
            width="100"
            height="100"
            quality="100"
            priority={true}
        />
    ),
    devoirJpg: (props: IconProps) => (
        <Image
            src="/devoir_logo.jpg"
            alt="Devoir Logo"
            width="80"
            height="60"
            quality="100"
            priority={true}
        />
    ),
    kclPng: (props: IconProps) => (
        <Image
            src="/kcl.png"
            alt="KCL Logo"
            width="80"
            height="60"
            quality="100"
            priority={true}
        />
    )
}