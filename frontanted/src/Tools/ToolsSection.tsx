import { useState, useMemo } from 'react';


// Define types
type ToolCategory = 'AI Write' | 'Image Tools' | 'Pdf Tools' | 'Video Tools';

interface Tool {
  id: string;
  title: string;
  description: string;
  url: string;
  category: ToolCategory;
}

const ToolsSection = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Function to assign icon based on title and category
  const getToolIcon = (title: string, category: ToolCategory): string => {
    const lowerTitle = title.toLowerCase();
    
    if (category === 'AI Write') {
      if (lowerTitle.includes('essay') || lowerTitle.includes('writer')) return '✍️';
      if (lowerTitle.includes('grammar')) return '🔠';
      if (lowerTitle.includes('summar')) return '📝';
      if (lowerTitle.includes('translate')) return '🌐';
      if (lowerTitle.includes('blog')) return '📰';
      if (lowerTitle.includes('script')) return '🎭';
      if (lowerTitle.includes('social')) return '📱';
      if (lowerTitle.includes('email')) return '✉️';
      if (lowerTitle.includes('legal')) return '⚖️';
      if (lowerTitle.includes('business')) return '💼';
      return '🧠'; // Default AI icon
    }
    
    if (category === 'Image Tools') {
      if (lowerTitle.includes('background')) return '🏞️';
      if (lowerTitle.includes('remove')) return '🧹';
      if (lowerTitle.includes('compress')) return '📏';
      if (lowerTitle.includes('convert')) return '🔄';
      if (lowerTitle.includes('text')) return '🔤';
      return '📷'; // Default image icon
    }
    
    if (category === 'Pdf Tools') {
      if (lowerTitle.includes('merge')) return '🧩';
      if (lowerTitle.includes('split')) return '✂️';
      if (lowerTitle.includes('convert')) return '🔄';
      if (lowerTitle.includes('edit')) return '✏️';
      return '📄'; // Default PDF icon
    }
    
    if (category === 'Video Tools') {
      if (lowerTitle.includes('trim')) return '✂️';
      if (lowerTitle.includes('compress')) return '🗜️';
      if (lowerTitle.includes('audio')) return '🎵';
      return '🎥'; // Default video icon
    }
    
    return '🛠️'; // Fallback icon
  };

  // Sample tools data
 const tools = [
  { title: "Listicle Writer", description: "Listicle Writer", category: "AI Write", url: "/listicle-writer" },
    { title: "Poll Generator", description: "AI Generated Polls", category: "AI Write", url: "/poll-generator" },
    { title: "Landing Page Copy Generator", description: "Generate landing page copy", category: "AI Write", url: "/landing-page-copy-generator" },
    { title: "AI Detector", description: "AI Content Detector", category: "AI Write", url: "/ai-detector" },
    { title: "Automation Wizard", description: "Answer a few questions and we'll take it from there", category: "AI Write", url: "/automation-wizard" },
    { title: "Programmatic", description: "See how it works like a wizard, abracadabra!", category: "AI Write", url: "/programmatic" },
    { title: "Bulk Generator", description: "See how it works like a wizard, abracadabra!", category: "AI Write", url: "/bulk-generator" },
    
 ]
  
  
  .map(tool => ({
    ...tool,
    icon: getToolIcon(tool.title, tool.category)
  }));

  // Filter tools based on search query
  const filteredTools = useMemo(() => {
    return tools.filter(tool =>
      tool.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  // Get category color
  const getCategoryColor = (category: ToolCategory): string => {
    switch (category) {
      case 'AI Write': return 'ai-gradient';
      case 'Image Tools': return 'image-gradient';
      case 'Pdf Tools': return 'pdf-gradient';
      case 'Video Tools': return 'video-gradient';
      default: return 'default-gradient';
    }
  };

  return (
    <div className="tools-container">
      {/* Header */}
      <div className="tools-header">
        <h1>Our <span>Tools</span></h1>
        <p>Explore our collection of powerful tools</p>
      </div>

      {/* Search Bar */}
      <div className="search-container">
        <div className="search-bar">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search tools..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button onClick={() => setSearchQuery('')} className="clear-search">
              ×
            </button>
          )}
        </div>
      </div>

      {/* Tools Grid */}
      <div className="tools-grid">
        {filteredTools.map(tool => (
          <div key={tool.id} className={`tool-card ${getCategoryColor(tool.category)}`}>
            <div className="card-content">
              <div className="card-header">
                <span className="card-icon">{tool.icon}</span>
                <span className="card-category">{tool.category}</span>
              </div>
              <h3>{tool.title}</h3>
              <p>{tool.description}</p>
              <a href={tool.url} className="card-button">
                Use Tool →
              </a>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .tools-container {
          min-height: 100vh;
          background: linear-gradient(#111827, #0d1421);
          padding: 3rem 1rem;
          font-family: 'Inter', sans-serif;
        }
        
        .tools-header {
          text-align: center;
          margin-bottom: 2rem;
          max-width: 1200px;
          margin: 0 auto 2rem;
        }
        
        .tools-header h1 {
          font-size: 2.5rem;
          font-weight: 700;
          color: white;
          padding: 1rem 0;
        }
        
        .tools-header h1 span {
          font-weight: 800;
          background: linear-gradient(90deg, #8b5cf6, #6366f1);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        
        .tools-header p {
          color: #9ca3af;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.5;
        }
        
        /* Search bar styles */
        .search-container {
          margin-bottom: 3rem;
          max-width: 600px;
          margin: 0 auto 3rem;
        }
        
        .search-bar {
          position: relative;
          display: flex;
          align-items: center;
        }
        
        .search-icon {
          position: absolute;
          left: 1rem;
          font-size: 1.2rem;
        }
        
        .search-bar input {
          width: 600px;
          padding: 1rem 1rem 1rem 3rem;
          border: 1px solid #374151;
          border-radius: 0.75rem;
          background: #1f2937;
          color: white;
          font-size: 1rem;
        }
        
        .clear-search {
          position: absolute;
          right: 1rem;
          background: none;
          border: none;
          color: #9ca3af;
          font-size: 1.5rem;
          cursor: pointer;
        }
        
        /* Tools grid */
        .tools-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1.5rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .tool-card {
          position: relative;
          border-radius: 0.75rem;
          overflow: hidden;
          transition: transform 0.3s ease;
        }
        
        .tool-card:hover {
          transform: translateY(-5px);
        }
        
        /* Category gradients */
        .ai-gradient {
          background: linear-gradient(135deg, #8b5cf6, #6366f1);
        }
        
        .image-gradient {
          background: linear-gradient(135deg, #ec4899, #f43f5e);
        }
        
        .pdf-gradient {
          background: linear-gradient(135deg, #f59e0b, #f97316);
        }
        
        .video-gradient {
          background: linear-gradient(135deg, #10b981, #0d9488);
        }
        
        .default-gradient {
          background: linear-gradient(135deg, #6b7280, #4b5563);
        }
        
        .card-content {
          background: #1f2937;
          border: 1px solid #374151;
          border-radius: 0.75rem;
          padding: 1.25rem;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        
        .card-header {
          display: flex;
          align-items: center;
          margin-bottom: 0.75rem;
        }
        
        .card-icon {
          font-size: 1.5rem;
          margin-right: 0.5rem;
        }
        
        .card-category {
          font-size: 0.75rem;
          font-weight: 600;
          padding: 0.25rem 0.5rem;
          border-radius: 9999px;
          background: rgba(0, 0, 0, 0.2);
          color: white;
        }
        
        .card-content h3 {
          font-size: 1.25rem;
          font-weight: 700;
          color: white;
          margin-bottom: 0.5rem;
        }
        
        .card-content p {
          color: #9ca3af;
          font-size: 0.875rem;
          line-height: 1.5;
          margin-bottom: 1rem;
          flex-grow: 1;
        }
        
        .card-button {
          display: inline-flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.5rem 1rem;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(8px);
          border-radius: 0.5rem;
          color: white;
          text-decoration: none;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }
        
        .card-button:hover {
          background: rgba(255, 255, 255, 0.2);
          border-color: rgba(255, 255, 255, 0.2);
        }
        
        @media (max-width: 768px) {
          .tools-grid {
            grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          }
          
          .tools-header h1 {
            font-size: 2rem;
          }
        }
        
        @media (max-width: 480px) {
          .tools-grid {
            grid-template-columns: 1fr;
          }
          
          .tools-header h1 {
            font-size: 1.75rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ToolsSection;