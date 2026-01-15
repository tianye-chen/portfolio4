import { useState, useRef, useLayoutEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const itemRefs = useRef({});
  const [itemPositions, setItemPositions] = useState({});
  const location = useLocation();
  const navigate = useNavigate();

  const navItemsRaw = [
    { name: "Home", path: "/", id: "home" },
    { name: "About", path: "about", id: "about" },
    { name: "Skills", path: "skills", id: "skills" },
    { name: "Projects", path: "projects", id: "projects" },
    { name: "Blog", path: "/blog", id: "blog" },
  ];

  // Automatically determine if item is a route or section
  const navItems = navItemsRaw.map((item) => ({
    ...item,
    isRoute: item.path.startsWith("/"),
  }));

  const buttonWidth = 48; // 12 * 4 = 48px (w-12 = 3rem = 48px)
  const gap = 12; // 12px gap between items

  useLayoutEffect(() => {
    // Calculate positions based on actual widths
    const calculatePositions = () => {
      const positions = {};
      let cumulativeWidth = buttonWidth + gap;

      navItems.forEach((item) => {
        const element = itemRefs.current[item.id];
        if (element) {
          // Find the clickable element (Link or button)
          const clickableElement =
            element.querySelector("a") || element.querySelector("button");
          if (clickableElement) {
            // Use the clickable element's width for accurate measurement
            const width =
              clickableElement.offsetWidth ||
              clickableElement.scrollWidth ||
              element.offsetWidth;
            if (width > 0) {
              positions[item.id] = cumulativeWidth;
              cumulativeWidth += width + gap;
            }
          } else {
            // Fallback to container width
            const width = element.offsetWidth || element.scrollWidth;
            if (width > 0) {
              positions[item.id] = cumulativeWidth;
              cumulativeWidth += width + gap;
            }
          }
        }
      });

      if (Object.keys(positions).length > 0) {
        setItemPositions(positions);
      }
    };

    // Calculate positions
    const rafId = requestAnimationFrame(() => {
      requestAnimationFrame(calculatePositions);
    });

    return () => cancelAnimationFrame(rafId);
  }, [navItems]);

  const handleItemClick = (item, e) => {
    setIsOpen(false);

    // Special handling for Home button
    if (item.path === "/") {
      const isOnHomePage = location.pathname === "/";

      if (isOnHomePage) {
        // If already on home page, smooth scroll to top
        e?.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }

      return;
    }

    if (item.isRoute) {
      return;
    } else {
      // For in-page sections, handle scrolling
      const isOnHomePage = location.pathname === "/";
      const timeout = isOnHomePage ? 0 : 100;

      e.preventDefault();

      if (!isOnHomePage) {
        navigate("/");
      }

      setTimeout(() => {
        const element = document.getElementById(item.path);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, timeout);
    }
  };

  return (
    <nav className="fixed top-4 right-4 z-50">
      {/* Hamburger/Close Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg transition-all duration-300 hover:scale-110"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? (
          <HiX className="h-6 w-6 text-gray-800" />
        ) : (
          <HiMenu className="h-6 w-6 text-gray-800" />
        )}
      </button>

      {/* Navigation Items */}
      <div className="absolute top-0 right-0 flex h-12 items-center">
        {navItems.map((item, index) => {
          const position = itemPositions[item.id] || 0;

          return (
            <div
              key={item.id}
              ref={(el) => {
                if (el) itemRefs.current[item.id] = el;
              }}
              className="absolute right-0 transition-all duration-500 ease-in-out"
              style={{
                transform: isOpen
                  ? `translateX(-${position}px)`
                  : "translateX(0px)",
                opacity: isOpen ? 1 : 0,
                visibility: isOpen ? "visible" : "hidden",
                pointerEvents: isOpen ? "auto" : "none",
                transitionDelay: isOpen
                  ? `${index * 50}ms`
                  : `${(navItems.length - index - 1) * 50}ms`,
              }}
            >
              {item.isRoute ? (
                <Link
                  to={item.path}
                  onClick={(e) => handleItemClick(item, e)}
                  className="block rounded-full bg-white px-4 py-2 font-medium whitespace-nowrap text-gray-800 shadow-lg transition-colors duration-200 hover:bg-gray-100"
                >
                  {item.name}
                </Link>
              ) : (
                <button
                  onClick={(e) => handleItemClick(item, e)}
                  className="block w-full rounded-full bg-white px-4 py-2 text-left font-medium whitespace-nowrap text-gray-800 shadow-lg transition-colors duration-200 hover:bg-gray-100"
                >
                  {item.name}
                </button>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
};
