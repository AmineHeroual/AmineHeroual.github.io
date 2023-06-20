import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import useMediaQuery from '../hooks/useMediaQuery';

const Link = ({ page, selectedPage, setSelectedPage }) => {
    const lowerCasePage = page.toLowerCase();
    return (
        <AnchorLink
            className={`${
                selectedPage === lowerCasePage ? 'text-green' : ''
            } hover:text-green transition  duration-500 `}
            href={`#${lowerCasePage}`}
            onClick={() => setSelectedPage(lowerCasePage)}
        >
            {page}
        </AnchorLink>
    );
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isAboveSmallScreens = useMediaQuery('(min-width: 768px)');
    const navBarBackground = isTopOfPage ? '' : 'bg-teal';
    return (
        <nav className={`${navBarBackground} z-40 w-full fixed top-0 py-6`}>
            <div className="flex items-center justify-between mx-auto w-5/6">
                <h4 className="font-playfair text-2xl font-bold border-1 border-green  bg-green rounded-full">
                    AH
                </h4>

                {isAboveSmallScreens ? (
                    <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
                        <Link
                            page="Home"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Skills"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Projects"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        {/* <Link
                            page="Testimonials"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        /> */}
                        <Link
                            page="Contact"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                    </div>
                ) : (
                    <button
                        className="rounded-full bg-teal p-2"
                        onClick={() => setIsMenuToggled(!isMenuToggled)}
                    >
                        <img src="../assets/menu-icon.svg" alt="menu-icon" />
                    </button>
                )}

                {/* Mobile Menu */}

                {!isAboveSmallScreens && isMenuToggled && (
                    <div className="fixed right-0 bottom-0 h-full bg-blue w-[300px]">
                        <div className="flex justify-end p-12">
                            <button
                                onClick={() => setIsMenuToggled(!isMenuToggled)}
                            >
                                <img
                                    src="../assets/close-icon.svg"
                                    alt="menu-icon"
                                />
                            </button>
                        </div>

                        {/* Menu Items */}
                        <div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue">
                            <Link
                                page="Home"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page="Skills"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page="Projects"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            {/* <Link
                                page="Testimonials"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            /> */}
                            <Link
                                page="Contact"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
