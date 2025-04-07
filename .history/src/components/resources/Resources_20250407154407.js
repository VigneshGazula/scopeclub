import "./Resources.css";
import ResourceCard from "./ResourceCard";
import { useState, useEffect, useRef } from "react";
import resourcesData from "../../Assets/Data/resources.json";

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Resources() {
  const [selectedTechnology, setSelectedTechnology] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const headingsRef = useRef([]);
  const [technologies, setTechnologies] = useState([]);

  useEffect(() => {
    // Initialize with data from resources.json
    if (resourcesData && resourcesData.technologies) {
      setTechnologies(resourcesData.technologies);
      setSelectedTechnology(resourcesData.technologies[0]?.name || null);
    }
  }, []);

  useEffect(() => {
    headingsRef.current.forEach((heading) => {
      if (heading) {
        let letters = Array.from(heading.childNodes);
        heading.innerHTML = '';

        letters.forEach((node) => {
          if (node.nodeType === 3) { // Text node
            node.textContent.split('').forEach((char) => {
              let span = document.createElement('span');
              if (char === ' ') {
                span.innerHTML = '&nbsp;';
              } else {
                span.textContent = char;
              }
              span.style.display = 'inline-block';
              heading.appendChild(span);
            });
          } else {
            heading.appendChild(node.cloneNode(true)); // Preserve existing elements like spans
          }
        });

        gsap.fromTo(
          heading.children,
          { opacity: 0, y: -50, rotationX: 90 },
          {
            opacity: 1,
            y: 0,
            rotationX: 0,
            duration: 1.2,
            ease: 'power3.out',
            stagger: 0.05,
            scrollTrigger: {
              trigger: heading,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    });
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const selectOption = (techName) => {
    setSelectedTechnology(techName);
    setDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownOpen]);

  // Get the selected technology data
  const selectedTechData = technologies.find(tech => tech.name === selectedTechnology);

  return (
    <div>
      <div className="resources">
        <div className="rs-top-layer">
          <div className="bottom-image"></div>
          <div className="c-circle-light"></div>
          <div className="resources-contents-container">
            <h2 ref={(el) => (headingsRef.current[0] = el)} className="rs-head"><span className="highlighted">Scope</span> Library.</h2>
            <p className="rs-caption">We transform coding passion into real-world projects, turning ideas into impactful experiences through collaboration, guidance, and hands-on learning.</p>
          </div>
        </div>

        <div className="resources-content">
          <div className="tech-select-container" ref={dropdownRef}>
            <button className="custom-dropdown-button" onClick={toggleDropdown}>
              <span className="dropdown-dot"></span>
              <span>{selectedTechnology || "Select Technology"}</span>
              <span className="dropdown-arrow"></span>
            </button>
            
            {dropdownOpen && (
              <div 
                className="custom-dropdown-menu" 
                role="listbox" 
                aria-label="Technologies" 
                tabIndex="0"
                onKeyDown={(e) => {
                  // Handle keyboard navigation
                  if (e.key === 'Escape') {
                    setDropdownOpen(false);
                  } else if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
                    e.preventDefault();
                    const items = Array.from(e.currentTarget.children);
                    const currentIndex = items.findIndex(item => 
                      item.className.includes('active')
                    );
                    let nextIndex;
                    
                    if (e.key === 'ArrowDown') {
                      nextIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
                    } else {
                      nextIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
                    }
                    
                    if (items[nextIndex]) {
                      selectOption(technologies[nextIndex].name);
                      items[nextIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                    }
                  } else if (e.key === 'Enter') {
                    setDropdownOpen(false);
                  }
                }}
              >
                {technologies.map((tech, index) => (
                  <div 
                    key={index} 
                    className={`custom-dropdown-item ${tech.name === selectedTechnology ? 'active' : ''}`}
                    onClick={() => selectOption(tech.name)}
                    role="option"
                    aria-selected={tech.name === selectedTechnology}
                    tabIndex="-1"
                  >
                    {tech.name}
                  </div>
                ))}
              </div>
            )}
          </div>

          {selectedTechData && (
            <div className="technology-resources">
              <h2 className="tech-title">{selectedTechData.name}</h2>
              
              {selectedTechData.resources.map((resourceCategory, index) => (
                <div key={index} className="resource-category">
                  <h3 className="category-title">{resourceCategory.category}</h3>
                  
                  <div className="resources-scroll-container">
                    <div className="resources-scroll">
                      {resourceCategory.items.map((item, itemIndex) => (
                        <ResourceCard 
                          key={itemIndex}
                          title={item.title}
                          link={item.link}
                          type={item.type}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Resources;
