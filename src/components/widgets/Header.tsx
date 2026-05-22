'use client';

import { useEffect, useRef, useState } from 'react';
import { useOnClickOutside } from '~/hooks/useOnClickOutside';
import Link from 'next/link';
import Image from 'next/image';
import ToggleMenu from '../atoms/ToggleMenu';
import { headerData } from '~/shared/data/global.data';
import {
  IconPhoneCall,
  IconMail,
} from '@tabler/icons-react';

const Header = () => {
  const { links, actions, isSticky, position, image } = headerData;

  const ref = useRef(null);

  const [scrolled, setScrolled] = useState(false);

  const updatedIsDropdownOpen =
    links &&
    links.map(() => {
      return false;
    });

  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean[]>(updatedIsDropdownOpen as boolean[]);
  const [isDropdownOpenDesktop, setIsDropdownOpenDesktop] = useState<boolean[]>(updatedIsDropdownOpen as boolean[]);
  const [isToggleMenuOpen, setIsToggleMenuOpen] = useState<boolean>(false);

  const handleDropdownOnClick = (index: number) => {
    setIsDropdownOpen((prevValues) => {
      const newValues = [...(prevValues as boolean[])];
      newValues.forEach((value, i) => {
        if (value === true) {
          newValues[i] = false;
        } else {
          newValues[i] = i === index;
        }
      });
      return newValues;
    });
  };

  const handleCloseDropdownOnClick = (index: number) => {
    setIsDropdownOpen((prevValues) => {
      const newValues = [...(prevValues as boolean[])];
      newValues[index] = false;
      return newValues;
    });
  };

  const handleMouseEnter = (index: number) => {
    setIsDropdownOpenDesktop((prevValues) => {
      const newValues = [...(prevValues as boolean[])];
      newValues.forEach((value, i) => {
        if (value === true) {
          newValues[i] = false;
        } else {
          newValues[i] = i === index;
        }
      });
      return newValues;
    });
  }

  const handleMouseLeave = (index: number) => {
    setIsDropdownOpenDesktop((prevValues) => {
      const newValues = [...(prevValues as boolean[])];
      newValues[index] = false;
      return newValues;
    });
  };

  const handleToggleMenuOnClick = () => {
    setIsToggleMenuOpen(!isToggleMenuOpen);
  };

  useOnClickOutside(ref, () => {
    /* setIsDropdownOpen(updatedIsDropdownOpen as boolean[]); */
    setIsDropdownOpenDesktop(updatedIsDropdownOpen as boolean[]);
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0); // true if user scrolled down
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <div className="w-full bg-theme6 text-theme4 text-sm">
      {/*<div className="max-w-8xl mx-auto flex justify-between items-right px-4 py-1">*/}
      <div className="max-w-8xl mx-auto flex justify-end px-4 py-1">

        {/* RIGHT — button */}
        <a
          href="/contact"
          className="px-3 py-1 border border-white bg-theme4 rounded-md font-medium hover:bg-theme4/80 text-white transition"
        >
          Κλείστε Ραντεβού
        </a>

        {/* RIGHT — email + phone */}
        {/*<div className="flex items-center gap-4">
          <a href="mailto:mavrogonatoupsych@gmail.com" className="flex items-center gap-1 font-medium">
            <IconMail className="w-4 h-4" />
            <span className="hidden sm:inline">mavrogonatoupsych@gmail.com</span>
          </a>

          <a className="flex items-center gap-1 font-medium">
            <IconPhoneCall className="w-4 h-4" />
            6951780181
          </a>
        </div>*/}

      </div>
    </div>
    <header
      className={`top-0 z-50 mx-auto w-full flex-none bg-theme2 transition-all duration-300 ease-in md:backdrop-blur-sm ${
        isSticky ? 'sticky' : 'relative'
      } ${isToggleMenuOpen ? 'h-screen md:h-auto' : 'h-auto'} ${
        scrolled ? "border-b border-theme4" : "border-transparent"
      }`}
      id="header"
    >
      <div className="mx-auto w-full max-w-8xl md:flex md:items-center md:justify-between md:py-3 md:pl-6 lg:pr-6">
        <div
          className={`flex justify-between py-3 px-3 md:py-0 md:px-0 ${
            isToggleMenuOpen
              ? 'md:bg-transparent md:border-none bg-theme2 border-gray-200 '
              : ''
          }`}
        >
          {/*LOGO*/}
          <Link
            className="flex items-center shrink-0"
            href="/"
            onClick={() =>
              isToggleMenuOpen ? handleToggleMenuOnClick() : setIsDropdownOpen(updatedIsDropdownOpen as boolean[])
            }
          >
            {image && (
              <div className="w-[220px] md:w-[160px] lg:w-[230px]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={290}
                  height={90}
                  className="object-contain"
                  priority
                />
              </div>
            )}
          </Link>
          <div className="flex items-center md:hidden">
            <ToggleMenu handleToggleMenuOnClick={handleToggleMenuOnClick} isToggleMenuOpen={isToggleMenuOpen} />
          </div>
        </div>
        <nav
          className={`${isToggleMenuOpen ? 'block px-3' : 'hidden'} text-text h-screen md:w-full ${
            position === 'right' ? 'justify-end' : position === 'left' ? 'justify-start' : 'justify-center'
          } w-auto overflow-y-auto lg:ml-5 md:flex md:h-auto lg:items-center md:items-end md:overflow-visible`}
          aria-label="Main navigation"
        >
          <ul
            ref={ref}
            className="flex w-full flex-col mt-2 mb-36 md:m-0 text-sm md:w-auto md:flex-row md:flex-nowrap md:self-center md:pt-0 lg:gap-x-2 group"
          >
            {links &&
              links.map(({ label, href, icon: Icon, links }, index) => (
                <li key={`item-link-${index}`} className={`${links?.length ? 'dropdown' : ''} relative`}
                onMouseEnter={() => {
                    if (window.innerWidth >= 768) {
                      //desktop-only
                      handleMouseEnter(index);
                    }
                  }
                }
                onMouseLeave={() => {
                    if (window.innerWidth >= 768) {
                      //desktop-only
                      handleMouseLeave(index);
                    }
                  }
                }
                >
                  {links && links.length ? (
                    <>
                      <Link
                        className="flex items-center md:px-1 lg:px-2 xl:px-4 py-3 text-sm transition duration-150 ease-in-out hover:!text-theme5 md:group-hover:text-text/40"
                        href={href as string}
                      >
                        <span className = "relative inline-block after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
                        onClick={() => (isToggleMenuOpen ? handleToggleMenuOnClick() : handleDropdownOnClick(index))}>
                        {label}{' '}
                        </span>
                        {Icon && (
                          <Icon
                            className={`${
                              (isDropdownOpen[index] && window.innerWidth < 768) || isDropdownOpenDesktop[index] ? 'rotate-180' : ''
                            } ml-0.5 rtl:ml-0 rtl:mr-0.5 h-5 w-5 inline`}
                            onClick={() => {
                              if (window.innerWidth < 768) {
                                //mobile-only
                                handleDropdownOnClick(index);
                              }
                            }
                          }
                          />
                        )}
                      </Link>
                      <ul
                        className={`${
                          (isDropdownOpen[index] && window.innerWidth < 768) || isDropdownOpenDesktop[index] ? 'block' : 'hidden'
                        } rounded-2xl pl-4 font-medium drop-shadow-xl md:absolute md:min-w-[200px] md:bg-white/90 md:pl-0 md:backdrop-blur-md md:border md:border-gray-200`}
                      >
                        {links.map(({ label: label2, href: href2 }, index2) => (
                          <li key={`item-link-${index2}`}>
                            <Link
                              className="whitespace-no-wrap block py-2 px-5 first:rounded-t-2xl last:rounded-b-2xl md:hover:bg-gray-200"
                              href={href2 as string}
                              onClick={() =>
                                isToggleMenuOpen ? handleToggleMenuOnClick() : handleCloseDropdownOnClick(index)
                              }
                            >
                              {label2}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link
                      className="flex items-center md:px-1 lg:px-2 xl:px-4 py-3 text-sm transition duration-150 ease-in-out hover:!text-theme5 md:group-hover:text-text/40"
                      href={href as string}
                      onClick={() => (isToggleMenuOpen ? handleToggleMenuOnClick() : handleDropdownOnClick(index))}
                    >
                      <span className = "relative after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full">
                      {label}
                      </span>
                    </Link>
                  )}
                </li>
              ))}
          </ul>
        </nav>
        <div
          className={`${
            isToggleMenuOpen ? 'block' : 'hidden'
          } fixed bottom-0 left-0 w-full justify-end p-3 md:static md:mb-0 md:flex md:w-[5%] lg:w-[10%] xl:w-[15%] md:self-center md:p-0 md:bg-transparent md:border-none bg-white border-t border-gray-200`}
        >
          {<div className="flex w-full items-center justify-between md:w-[5%] lg:w-[10%] xl:w-[15%]">
            
          </div>}
        </div>
      </div>
    </header>
    </>
  );
};

export default Header;
