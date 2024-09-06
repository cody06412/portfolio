import { SectionContainer } from "@components/Section";
import Link from "next/link";
import { SocialLinks } from "@components/SocialLink";
import Image from 'next/image'

export const Footer = (props) => {

    const { passdata } = props;
    
    const date = new Date();
    const year = date.getFullYear();
    const socialLinks = passdata;

    return (
        <footer id="footer" className="bg-white">
            {/* Footer Credits */}
            <SectionContainer className="footer-credits relative z-10">
                <div className="wrap wrap-px flex justify-around items-center">
                    <div className="sm:w-[20%]">
                        <Link href="/">
                            <Image
                                src="/image/banner.png"
                                alt="logo"
                                className="h-10 w-auto"
                                height="25"
                                width="100"
                            />
                        </Link>
                    </div>
                    <div className="sm:w-[40%]">
                        <SocialLinks passdata={socialLinks} />
                    </div>
                    <div className="sm:w-[20%]">
                        © {year} Cody Ray.
                    </div>
                </div>
            </SectionContainer>
            <div className="footer--background"></div>
        </footer>
    );
};
