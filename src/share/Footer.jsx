import { InstagramLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons';
import React from 'react'
import { CiFacebook } from 'react-icons/ci';

function Footer() {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { name: 'Instagram', icon: <InstagramLogoIcon className="size-5" />, href: '#' },
        { name: 'Facebook', icon: <CiFacebook className="size-7" />, href: '#' },
        { name: 'X', icon: <TwitterLogoIcon className="size-5" />, href: '#' }, // Using Twitter icon for X logo
    ];

    const legalLinks = [
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' },
        { name: 'Cookies', href: '#' },
    ];

    return (
        <footer className="bg-[#244D3F] text-white/90 px-6 py-10 md:py-15 lg:px-8">
            <div className="max-w-7xl mx-auto flex flex-col items-center">

                <div className="text-center mb-10 md:mb-12">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">
                        <span className="text-white">Keen</span>
                        <span className="text-[#4ade80]">Keeper</span>
                    </h2>
                    <p className="text-sm md:text-base max-w-lg mx-auto leading-relaxed text-white/80">
                        Your personal shelf of meaningful connections. Browse, tend, and
                        nurture the relationships that matter most.
                    </p>
                </div>

                <div className="text-center mb-16 md:mb-20">
                    <h3 className="text-xl font-semibold mb-5 tracking-tight">Social Links</h3>
                    <div className="flex items-center gap-5 justify-center">
                        {socialLinks.map((social) => (
                            <a
                                key={social.name}
                                href={social.href}
                                aria-label={social.name}
                                className="bg-white text-[#2d4f40] size-11 rounded-full flex items-center justify-center hover:bg-white/90 transition-all hover:scale-105 shadow-sm"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="w-full border-t border-white/10 pt-8 mt-auto text-sm flex flex-col-reverse md:flex-row md:justify-between items-center gap-6 text-white/70">
                    <p className="text-center md:text-left">
                        &copy; {currentYear} KeenKeeper. All rights reserved.
                    </p>
                    <div className="flex items-center gap-x-6 gap-y-2 flex-wrap justify-center">
                        {legalLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="hover:text-white transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer