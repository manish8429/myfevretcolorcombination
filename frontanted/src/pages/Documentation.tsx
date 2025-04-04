import React, { useState } from 'react';
import { FaBook, FaCode, FaTools, FaVideo, FaQuestionCircle, FaLightbulb, FaSearch } from 'react-icons/fa';
import { MdIntegrationInstructions, MdSecurity } from 'react-icons/md';
import { RiGuideFill } from 'react-icons/ri';
import "./Documentation.css"

const Documentation = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredSections, setFilteredSections] = useState([]);

  const documentationSections = [
    {
      title: "Getting Started",
      description: "Begin your journey with our platform. Learn the basics and set up your environment.",
      icon: <RiGuideFill />,
      color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      link: "/docs/getting-started",
      type: "guide"
    },
    {
      title: "API Reference",
      description: "Comprehensive documentation for all available API endpoints and parameters.",
      icon: <FaCode />,
      color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      link: "/docs/api-reference",
      type: "technical"
    },
    {
      title: "Tutorials",
      description: "Step-by-step guides to help you accomplish specific tasks and workflows.",
      icon: <FaBook />,
      color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      link: "/docs/tutorials",
      type: "learning"
    },
    {
      title: "Integration Guides",
      description: "Learn how to integrate our services with popular platforms and frameworks.",
      icon: <MdIntegrationInstructions />,
      color: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      link: "/docs/integration",
      type: "integration"
    },
    {
      title: "Best Practices",
      description: "Recommended approaches and patterns for optimal implementation.",
      icon: <FaLightbulb />,
      color: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      link: "/docs/best-practices",
      type: "guidelines"
    },
    {
      title: "Troubleshooting",
      description: "Solutions to common issues and error messages you might encounter.",
      icon: <FaTools />,
      color: "linear-gradient(135deg, #ff758c 0%, #ff7eb3 100%)",
      link: "/docs/troubleshooting",
      type: "support"
    },
    {
      title: "Video Guides",
      description: "Visual learning resources for those who prefer video content.",
      icon: <FaVideo />,
      color: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
      link: "/docs/video-guides",
      type: "multimedia"
    },
    {
      title: "Security",
      description: "Understand our security model and how to keep your implementation secure.",
      icon: <MdSecurity />,
      color: "linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)",
      link: "/docs/security",
      type: "security"
    },
    {
      title: "FAQ",
      description: "Answers to frequently asked questions about our platform and services.",
      icon: <FaQuestionCircle />,
      color: "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)",
      link: "/docs/faq",
      type: "support"
    }
  ];

  // Button colors for each category
  const buttonColors = {
    all: "linear-gradient(90deg, #4CAF50, #0088cc)",
    guides: "linear-gradient(90deg, #667eea, #764ba2)",
    api: "linear-gradient(90deg, #f093fb, #f5576c)",
    tutorials: "linear-gradient(90deg, #4facfe, #00f2fe)",
    security: "linear-gradient(90deg, #5ee7df, #b490ca)"
  };

  const handleCategoryFilter = (category) => {
    setActiveFilter(category);
    if (category === 'all') {
      setFilteredSections([]);
    } else {
      const filtered = documentationSections.filter(section => 
        section.type === category.toLowerCase() || 
        (category === 'guides' && section.type === 'guide') ||
        (category === 'api' && section.type === 'technical')
      );
      setFilteredSections(filtered);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      setFilteredSections([]);
      return;
    }
    
    const results = documentationSections.filter(section => 
      section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      section.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    setFilteredSections(results);
  };

  const displaySections = filteredSections.length > 0 
    ? filteredSections 
    : activeFilter === 'all' 
      ? documentationSections 
      : documentationSections.filter(section => 
          section.type === activeFilter.toLowerCase() || 
          (activeFilter === 'guides' && section.type === 'guide') ||
          (activeFilter === 'api' && section.type === 'technical')
        );

  return (
    <section className="documentation-section">
      <div className="doc-header">
        <h2>Documentation Hub</h2>
        <p className="doc-subtitle">Explore our comprehensive resources to get the most out of our platform</p>
      </div>
      
      <form onSubmit={handleSearch} className="search-container">
        <input 
          type="text" 
          placeholder="Search documentation..." 
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-btn">
          <FaSearch /> Search
        </button>
      </form>
      
      <div className="doc-categories">
        <button 
          onClick={() => handleCategoryFilter('all')} 
          className={`category-btn ${activeFilter === 'all' ? 'active' : ''}`}
          style={activeFilter === 'all' ? {background: buttonColors.all} : {}}
        >
          All
        </button>
        <button 
          onClick={() => handleCategoryFilter('guides')} 
          className={`category-btn ${activeFilter === 'guides' ? 'active' : ''}`}
          style={activeFilter === 'guides' ? {background: buttonColors.guides} : {}}
        >
          Guides
        </button>
        <button 
          onClick={() => handleCategoryFilter('api')} 
          className={`category-btn ${activeFilter === 'api' ? 'active' : ''}`}
          style={activeFilter === 'api' ? {background: buttonColors.api} : {}}
        >
          API
        </button>
        <button 
          onClick={() => handleCategoryFilter('tutorials')} 
          className={`category-btn ${activeFilter === 'tutorials' ? 'active' : ''}`}
          style={activeFilter === 'tutorials' ? {background: buttonColors.tutorials} : {}}
        >
          Tutorials
        </button>
        <button 
          onClick={() => handleCategoryFilter('security')} 
          className={`category-btn ${activeFilter === 'security' ? 'active' : ''}`}
          style={activeFilter === 'security' ? {background: buttonColors.security} : {}}
        >
          Security
        </button>
      </div>
      
      <div className="doc-grid">
        {displaySections.map((section, index) => (
          <a 
            key={index} 
            href={section.link}
            className={`doc-card ${section.type}`}
            style={{ background: section.color }}
          >
            <div className="card-icon">
              {section.icon}
            </div>
            <div className="card-content">
              <h3>{section.title}</h3>
              <p>{section.description}</p>
            </div>
            <span className="card-link">
              Explore →
            </span>
          </a>
        ))}
      </div>
      
      {displaySections.length === 0 && (
        <div className="no-results">
          <p>No documentation found matching your criteria.</p>
        </div>
      )}
      
      <div className="doc-footer">
        <p>Can't find what you're looking for? <a href="/contact">Contact our support team</a></p>
      </div>
    </section>
  );
};

export default Documentation;