import { React, useRef, useState } from "react";
import { PiHandWavingFill } from "react-icons/pi";
import { gsap } from "gsap";
import { links, broad_skills } from "../../Data/data";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { TextPlugin } from "gsap/TextPlugin";
import { useGSAP } from "@gsap/react";

export const Hero = () => {
  gsap.registerPlugin(TextPlugin);
  gsap.registerPlugin(useGSAP);

  const firstNameBGLargeRef = useRef();
  const lastNameBGLargeRef = useRef();
  const nameCenterSectionRef = useRef([]);
  const handWaveIconRef = useRef(null);
  const downArrowRef = useRef();
  const socialsRef = useRef([]);
  const socialIconsRef = useRef([]);
  const typewriterRef = useRef([]);

  const refPush = (el, ref) => {
    if (el) {
      ref.current.push(el);
    }
  };

  useGSAP(() => {
    const nameSectionTimeline = gsap.timeline({});
    const typewriterCursorTimeline = gsap.timeline({
      repeat: -1,
      repeatDelay: 1,
    });
    const typewriterTimeline = gsap.timeline({ repeat: -1, repeatDelay: 1 });
    const handWaveTimeline = gsap.timeline({ repeat: 2 });

    // Social media icons
    if (socialIconsRef.current && socialIconsRef.current.length > 0) {
      // Set initial properties of the icons
      socialIconsRef.current.forEach((icon) => {
        if (icon) {
          gsap.set(icon, { opacity: 1, rotate: 0, scale: 1 });
        }
      });

      socialsRef.current.forEach((item) => {
        if (item) {
          gsap.set(item, { opacity: 0, translateY: 100 });
        }
      });

      socialsRef.current.forEach((item) => {
        if (item) {
          gsap.to(item, {
            opacity: 1,
            translateY: 0,
            duration: 1.5,
            ease: "power1.inOut",
          });
        }
      });
    }

    // Giant last name in the background
    if (firstNameBGLargeRef.current) {
      gsap.set(firstNameBGLargeRef.current, { opacity: 0, translateX: -1000 });
      gsap.to(firstNameBGLargeRef.current, {
        opacity: 0.05,
        translateX: 0,
        duration: 4,
        ease: "power1.inOut",
      });
    }

    // Giant last name in the background
    if (lastNameBGLargeRef.current) {
      gsap.set(lastNameBGLargeRef.current, { opacity: 0, translateX: 1000 });
      gsap.to(lastNameBGLargeRef.current, {
        opacity: 0.05,
        translateX: 0,
        duration: 4,
        ease: "power1.inOut",
      });
    }

    // Name in the center
    if (nameCenterSectionRef.current && nameCenterSectionRef.current.length > 0) {
      nameCenterSectionRef.current.forEach((item) => {
        if (item) {
          gsap.set(item, { opacity: 0, translateY: -30 });
        }
      });

      nameCenterSectionRef.current.forEach((item, index) => {
        if (item) {
          nameSectionTimeline.to(
            item,
            {
              opacity: 1,
              translateY: 0,
              duration: 1.5,
            },
            0.5 * index,
          );
        }
      });
    }

    // Typed text effect
    if (typewriterRef.current && typewriterRef.current.length > 0) {
      // Filter out null/undefined refs
      const validTypewriterRefs = typewriterRef.current.filter((el) => el !== null && el !== undefined);
      
      if (validTypewriterRefs.length > 0) {
        // Cycle through each skill in the loop with typing effect
        broad_skills.forEach((skill) => {
          validTypewriterRefs.forEach((el) => {
            typewriterTimeline.to(el, {
              duration: 2,
              text: skill,
              ease: "power1.inOut",
            });
          });
        });

        // Animate the blinking cursor effect
        validTypewriterRefs.forEach((el) => {
          typewriterCursorTimeline.fromTo(
            el,
            {
              borderRightColor: "#10b981",
              duration: 1,
              repeat: -1,
              ease: "steps(1)",
            },
            {
              borderRightColor: "transparent",
              duration: 1,
              repeat: -1,
              ease: "steps(1)",
            },
          );
        });
      }
    }

    // Hand icon next to "Hello, I'm"
    if (handWaveIconRef.current) {
      handWaveTimeline
        .to(handWaveIconRef.current, {
          rotate: 15,
          duration: 0.25,
          ease: "none",
        })
        .to(handWaveIconRef.current, {
          rotate: -15,
          duration: 0.5,
          ease: "none",
        })
        .to(handWaveIconRef.current, {
          rotate: 0,
          duration: 0.25,
          ease: "none",
        });
    }

    // Down arrow icon
    if (downArrowRef.current) {
      gsap.to(downArrowRef.current, {
        y: 10,
        repeat: -1,
        yoyo: true,
        duration: 1,
        ease: "power1.inOut",
      });
    }

    return () => {
      if (socialIconsRef.current) {
        socialIconsRef.current.forEach((item) => {
          if (item) {
            gsap.killTweensOf(item);
          }
        });
      }

      if (typewriterRef.current) {
        typewriterRef.current.forEach((item) => {
          if (item) {
            gsap.killTweensOf(item);
          }
        });
      }

      if (nameCenterSectionRef.current) {
        nameCenterSectionRef.current.forEach((item) => {
          if (item) {
            gsap.killTweensOf(item);
          }
        });
      }

      if (socialsRef.current) {
        socialsRef.current.forEach((item) => {
          if (item) {
            gsap.killTweensOf(item);
          }
        });
      }

      if (handWaveIconRef.current) {
        gsap.killTweensOf(handWaveIconRef.current);
      }
      if (firstNameBGLargeRef.current) {
        gsap.killTweensOf(firstNameBGLargeRef.current);
      }
      if (lastNameBGLargeRef.current) {
        gsap.killTweensOf(lastNameBGLargeRef.current);
      }
      if (downArrowRef.current) {
        gsap.killTweensOf(downArrowRef.current);
      }
    };
  }, []);

  // Mouse enter and leave effects for icons, rotates and scales the icon
  const handleIconMouseEnter = (index) => {
    if (!socialIconsRef.current[index]) return;
    const min = -20;
    const max = 20;
    const randRotation = Math.floor(Math.random() * (max - min + 1)) + min;
    gsap.to(socialIconsRef.current[index], {
      rotate: randRotation,
      duration: 0.3,
      scale: 1.2,
      ease: "power2.out",
    });
  };

  const handleIconMouseLeave = (index) => {
    if (!socialIconsRef.current[index]) return;
    gsap.to(socialIconsRef.current[index], {
      opacity: 1,
      rotate: 0,
      duration: 0.3,
      scale: 1,
      ease: "power2.in",
    });
  };

  return (
    <div className="text-primary-text">
      {/** Dotted background pattern */}
      <div className="absolute -z-10 min-h-screen min-w-screen bg-[radial-gradient(var(--color-dotted-background)_4px,var(--color-primary-background)_0px)] [background-size:64px_64px]"></div>

      <div className="relative flex min-h-screen flex-row items-center justify-center gap-8 overflow-hidden pb-24 text-center md:text-left">
        <div
          className="font-lexend pointer-events-none absolute -top-1.5 left-4 hidden min-w-screen text-left text-base/85 font-bold opacity-5 sm:block sm:text-[15rem] md:text-[23rem]"
          ref={firstNameBGLargeRef}
        >
          DANIEL
        </div>
        <div
          className="font-lexend pointer-events-none absolute bottom-0 hidden min-w-screen text-right text-base/85 font-bold opacity-5 sm:block sm:text-[15rem] md:text-[23rem]"
          ref={lastNameBGLargeRef}
        >
          CHEN
        </div>

        <div className="">
          <h1
            className="flex items-center justify-center text-3xl font-extrabold text-primary font-stretch-150% md:justify-start"
            ref={(el) => refPush(el, nameCenterSectionRef)}
          >
            {" "}
            <PiHandWavingFill className="mr-2" ref={(el) => (handWaveIconRef.current = el)} /> Hello,
            I'm{" "}
          </h1>
          <h1
            className={`font-roboto mb-4 bg-clip-text text-5xl leading-normal font-extrabold text-transparent md:text-6xl`}
            style={{
              backgroundImage: `linear-gradient(90deg, var(--color-gradient-green-1) 0%, var(--color-gradient-green-2) 10%, var(--color-gradient-green-3) 100%)`,
            }}
            ref={(el) => refPush(el, nameCenterSectionRef)}
          >
            Daniel Chen
          </h1>
          <p
            className="mb-4 text-xl font-bold text-primary"
            ref={(el) => refPush(el, nameCenterSectionRef)}
          >
            Master's Graduate in Computer Science
          </p>

          <p
            className="absolute hidden text-center text-3xl font-light md:block"
            ref={(el) => refPush(el, nameCenterSectionRef)}
          >
            Creating Solutions with{" "}
            <span
              className="border-r-2 border-primary pr-1"
              ref={(el) => {
                if (el) {
                  typewriterRef.current[0] = el;
                }
              }}
            >
              {broad_skills[broad_skills.length - 1]}
            </span>
          </p>

          <div
            className="absolute left-1 flex min-w-screen flex-col items-center gap-2 text-center text-2xl font-light md:hidden"
            ref={(el) => refPush(el, nameCenterSectionRef)}
          >
            <p> Creating Solutions with </p>
            <span
              className="border-r-2 border-primary pr-1"
              ref={(el) => {
                if (el) {
                  typewriterRef.current[1] = el;
                }
              }}
            ></span>
          </div>
        </div>
        <div
          className="absolute bottom-1/5 flex min-w-screen flex-col items-center justify-center gap-6 px-6 text-primary"
          ref={(el) => refPush(el, socialsRef)}
        >
          <h1 className="font-lexend text-2xl">
            Let's{" "}
            <span className="relative before:absolute before:-inset-1 before:skew-y-4 before:bg-primary">
              <span className="relative mr-1 text-white">Connect</span>
            </span>
          </h1>
          <div
            className="flex gap-6 text-3xl"
            ref={(el) => refPush(el, socialsRef)}
          >
            {[FiGithub, FiLinkedin, IoMailOutline].map((Icon, index) => (
              <a
                key={index}
                href={links[index]}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon
                  key={index}
                  ref={(uniqueRef) =>
                    (socialIconsRef.current[index] = uniqueRef)
                  }
                  onMouseEnter={() => handleIconMouseEnter(index)}
                  onMouseLeave={() => handleIconMouseLeave(index)}
                  className="cursor-pointer"
                />
              </a>
            ))}
          </div>
        </div>

        <IoIosArrowDown
          className="absolute bottom-10 flex justify-center text-4xl text-primary"
          ref={downArrowRef}
        />
      </div>
    </div>
  );
};
