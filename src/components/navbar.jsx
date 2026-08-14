import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState, useRef, useCallback } from "react";
import logo from "../assets/logo.png";

const noise = (n = 1) => n / 2 - Math.random() * n;

const getXY = (distance, pointIndex, totalPoints) => {
  const angle =
    ((360 + noise(8)) / totalPoints) * pointIndex * (Math.PI / 180);

  return [distance * Math.cos(angle), distance * Math.sin(angle)];
};

const createParticle = (i, t, d, r, totalPoints, colors) => {
  const rotate = noise(r / 10);

  return {
    start: getXY(d[0], totalPoints - i, totalPoints),
    end: getXY(
      d[1] + noise(7),
      totalPoints - i,
      totalPoints
    ),
    time: t,
    scale: 1 + noise(0.2),
    color: colors[Math.floor(Math.random() * colors.length)],
    rotate:
      rotate > 0
        ? (rotate + r / 20) * 10
        : (rotate - r / 20) * 10,
  };
};

function useGooeyEffect({
  animationTime = 600,
  particleCount = 15,
  particleDistances = [90, 10],
  particleR = 100,
  timeVariance = 300,
  colors = [1, 2, 3, 1, 2, 3, 1, 4],
} = {}) {
  const containerRef = useRef(null);
  const filterRef = useRef(null);

  const triggerGooey = useCallback(
    (targetElement) => {
      if (
        !containerRef.current ||
        !filterRef.current ||
        !targetElement
      )
        return;

      const containerRect =
        containerRef.current.getBoundingClientRect();

      const pos = targetElement.getBoundingClientRect();

      Object.assign(filterRef.current.style, {
        left: `${pos.x - containerRect.x}px`,
        top: `${pos.y - containerRect.y}px`,
        width: `${pos.width}px`,
        height: `${pos.height}px`,
      });

      const filterEl = filterRef.current;

      filterEl
        .querySelectorAll(".particle")
        .forEach((p) => p.remove());

      filterEl.classList.remove("active");

      const d = particleDistances;
      const r = particleR;

      for (let i = 0; i < particleCount; i++) {
        const t =
          animationTime * 2 +
          noise(timeVariance * 2);

        const p = createParticle(
          i,
          t,
          d,
          r,
          particleCount,
          colors
        );

        setTimeout(() => {
          const particle = document.createElement("span");
          const point = document.createElement("span");

          particle.className = "particle";

          particle.style.setProperty(
            "--start-x",
            `${p.start[0]}px`
          );

          particle.style.setProperty(
            "--start-y",
            `${p.start[1]}px`
          );

          particle.style.setProperty(
            "--end-x",
            `${p.end[0]}px`
          );

          particle.style.setProperty(
            "--end-y",
            `${p.end[1]}px`
          );

          particle.style.setProperty(
            "--time",
            `${p.time}ms`
          );

          particle.style.setProperty(
            "--scale",
            `${p.scale}`
          );

          particle.style.setProperty(
            "--color",
            `var(--color-${p.color}, #203684)`
          );

          particle.style.setProperty(
            "--rotate",
            `${p.rotate}deg`
          );

          point.className = "point";

          particle.appendChild(point);
          filterEl.appendChild(particle);

          requestAnimationFrame(() =>
            filterEl.classList.add("active")
          );

          setTimeout(() => {
            particle.remove();
          }, t);
        }, 30);
      }
    },
    [
      animationTime,
      particleCount,
      particleDistances,
      particleR,
      timeVariance,
      colors,
    ]
  );

  return {
    containerRef,
    filterRef,
    triggerGooey,
  };
}

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);

  const {
    containerRef,
    filterRef,
    triggerGooey,
  } = useGooeyEffect();

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const scrollToTop = () => window.scrollTo(0, 0);

  const handleNavClick = (e) => {
    scrollToTop();
    triggerGooey(e.currentTarget);
  };

  const mobileNavClass = ({ isActive }) =>
    `mb-[20px] text-[18px] transition-all duration-200 hover:text-[#203684] hover:underline hover:decoration-2 hover:underline-offset-8 ${isActive
      ? "font-semibold text-[#203684] underline decoration-2 underline-offset-8"
      : "text-[#000000]"
    }`;

  return (
    <header
      ref={containerRef}

      className="sticky top-0 z-50 h-[76px] bg-white px-6 py-0 md:mt-2 md:h-[79px] md:rounded-[15px] md:px-6 md:py-[6px]"
    >
      <style>{`
        :root {
          --color-1: #203684;
          --color-4: #ffc16a;
        }

        .gooey-effect-filter {
          position: absolute;
          pointer-events: none;
          filter: blur(6px) contrast(80);
          mix-blend-mode: multiply;
          z-index: 10;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .particle,
        .point {
          display: block;
          opacity: 0;
          width: 16px;
          height: 16px;
          border-radius: 100%;
          transform-origin: center;
        }

        .particle {
          --time: 5s;
          position: absolute;
          top: calc(50% - 8px);
          left: calc(50% - 8px);
          animation: particle calc(var(--time)) ease 1 -350ms;
        }

        .point {
          background: var(--color);
          opacity: 1;
          animation: point calc(var(--time)) ease 1 -350ms;
        }

        @keyframes particle {
          0% {
            transform: rotate(0deg) translate(var(--start-x), var(--start-y));
            opacity: 1;
            animation-timing-function: cubic-bezier(0.55, 0, 1, 0.45);
          }

          70% {
            transform: rotate(calc(var(--rotate) * 0.5)) translate(
              calc(var(--end-x) * 1.2),
              calc(var(--end-y) * 1.2)
            );
            opacity: 1;
          }

          85% {
            transform: rotate(calc(var(--rotate) * 0.66)) translate(
              var(--end-x),
              var(--end-y)
            );
            opacity: 1;
          }

          100% {
            transform: rotate(calc(var(--rotate) * 1.2)) translate(
              calc(var(--end-x) * 0.5),
              calc(var(--end-y) * 0.5)
            );
            opacity: 1;
          }
        }

        @keyframes point {
          0% {
            transform: scale(0);
            opacity: 0;
          }

          25% {
            transform: scale(calc(var(--scale) * 0.25));
          }

          38% {
            opacity: 1;
          }

          65% {
            transform: scale(var(--scale));
            opacity: 1;
          }

          85% {
            transform: scale(var(--scale));
            opacity: 1;
          }

          100% {
            transform: scale(0);
            opacity: 0;
          }
        }
      `}</style>

      <span
        className="gooey-effect-filter"
        ref={filterRef}
      />

      <div className="mx-auto flex h-[57px] w-full items-center justify-between md:h-[67px] md:max-w-[85%]">
        <Link to="/" onClick={scrollToTop}>
          <img
            src={logo}
            alt="Schoolcube"
            className="w-[164px] object-contain sm:w-[164px] md:w-[194px]"
          />
        </Link>

        <nav className="hidden items-center gap-6 text-[16px] font-medium text-black lg:flex">
          <NavLink
            end
            to="/"
            onClick={handleNavClick}
            className={({ isActive }) =>
              isActive
                ? "font-bold text-[#203684]"
                : "hover:text-[#203684]"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/features"
            onClick={handleNavClick}
            className={({ isActive }) =>
              isActive
                ? "font-bold text-[#203684]"
                : "hover:text-[#203684]"
            }
          >
            Features
          </NavLink>

          <NavLink
            to="/pricing"
            onClick={handleNavClick}
            className={({ isActive }) =>
              isActive
                ? "font-bold text-[#203684]"
                : "hover:text-[#203684]"
            }
          >
            Pricing
          </NavLink>

          <NavLink
            to="/contact"
            onClick={handleNavClick}
            className={({ isActive }) =>
              isActive
                ? "font-bold text-[#203684]"
                : "hover:text-[#203684]"
            }
          >
            Contact
          </NavLink>

          <Link
            className="whitespace-nowrap hover:text-[#203684]"
            onClick={handleNavClick}
          >
            SchoolRevs Suite
          </Link>
        </nav>

        <Link
          className="hidden rounded-[5px] bg-[#203684] px-[30px] py-[15px] text-[16px] font-semibold text-white transition-transform duration-200 active:scale-95 lg:block"

        >
          Get Started
        </Link>

        <button
          type="button"
          aria-label="Open navigation menu"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(true)}
          className="flex h-[40px] w-[40px] items-center justify-center rounded-md text-[#203684] lg:hidden"
        >
          <Menu size={24} strokeWidth={2} />
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/20"
            onClick={closeMobileMenu}
          />

          <div className="absolute right-0 top-0 max-h-dvh w-full overflow-y-auto bg-white px-[32px] py-[28px] shadow-xl">
            <div className="mb-10 flex justify-end">
              <button
                onClick={closeMobileMenu}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E5E7EB] text-[#203684]"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="flex flex-col font-normal">
              <NavLink
                end
                to="/"
                onClick={closeMobileMenu}
                className={mobileNavClass}
              >
                Home
              </NavLink>

              <NavLink
                to="/features"
                onClick={closeMobileMenu}
                className={mobileNavClass}
              >
                Features
              </NavLink>

              <NavLink
                to="/pricing"
                onClick={closeMobileMenu}
                className={mobileNavClass}
              >
                Pricing
              </NavLink>

              <NavLink
                to="/contact"
                onClick={closeMobileMenu}
                className={mobileNavClass}
              >
                Contact
              </NavLink>

              <Link
                onClick={closeMobileMenu}
                className="mb-[40px] text-[18px] text-[#000000] transition-all duration-200 hover:text-[#203684] hover:underline hover:decoration-2 hover:underline-offset-8"
              >
                SchoolRevs Suite
              </Link>

              <Link
                onClick={closeMobileMenu}
                className="flex h-[48px] w-full items-center justify-center rounded-[5px] bg-[#203684] text-[16px] font-semibold text-white"
              >
                Get Started
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
