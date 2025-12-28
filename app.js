const { useState, useEffect } = React;

const Sidebar = ({ isOpen, toggleSidebar }) => {
    const hardwareItems = [
        { icon: 'fa-laptop', name: 'MacBook Pro M1', status: 'Online • Battery 94%', active: true },
        { icon: 'fa-mobile-screen', name: 'iPhone 13 Pro', status: '', active: false },
        { icon: 'fa-tablet-screen-button', name: 'iPad Air', status: '', active: false },
        { icon: 'fa-mobile', name: 'Google Pixel 7', status: '', active: false },
    ];

    const cloudItems = [
        { icon: 'fa-cloud', name: 'Google Workspace', active: false },
        { icon: 'fa-server', name: 'AWS Production', active: false },
    ];

    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <div className="logo-container">
                <img src="IXECWEB.svg" alt="IXEC Logo" className="logo-img" />
                <div>
                    <div className="app-title">DeviceHub</div>
                    <div className="app-subtitle">ADMIN CONSOLE</div>
                </div>
            </div>

            <div className="search-bar">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input type="text" placeholder="Search devices..." />
            </div>

            <div className="nav-section">
                <div className="nav-title">My Hardware</div>
                {hardwareItems.map((item, index) => (
                    <div key={index} className={`nav-item ${item.active ? 'active' : ''}`}>
                        <i className={`fa-solid ${item.icon}`}></i>
                        <div className="user-info">
                            <div className="user-name">{item.name}</div>
                            {item.status && <div className="user-role" style={{fontSize: '0.7rem', color: item.active ? '#3b82f6' : ''}}>{item.status}</div>}
                        </div>
                    </div>
                ))}
            </div>

            <div className="nav-section">
                <div className="nav-title">Cloud Services</div>
                {cloudItems.map((item, index) => (
                    <div key={index} className={`nav-item ${item.active ? 'active' : ''}`}>
                        <i className={`fa-solid ${item.icon}`}></i>
                        <div className="user-name">{item.name}</div>
                    </div>
                ))}
            </div>

            <div className="user-profile">
                <div className="avatar">TU</div>
                <div className="user-info">
                    <div className="user-name">test_user</div>
                    <div className="user-role">SysAdmin</div>
                </div>
                <i className="fa-solid fa-gear" style={{color: '#9ca3af', cursor: 'pointer'}}></i>
            </div>
        </div>
    );
};

const Hero = () => {
    return (
        <div className="hero-card">
            <img 
                src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="MacBook Pro" 
                className="device-image" 
            />
            <div className="device-info">
                <div className="device-header">
                    <div>
                        <h1 className="device-title">MacBook Pro M1</h1>
                        <div className="device-meta">Serial: C02F3A4B5C6D • macOS Sonoma 14.2</div>
                    </div>
                    <button className="remote-btn">
                        <i className="fa-solid fa-mobile-screen"></i>
                        Remote Access
                    </button>
                </div>

                <div className="specs-grid">
                    <div className="spec-item">
                        <h4>Processor</h4>
                        <p>Apple M1 Pro</p>
                    </div>
                    <div className="spec-item">
                        <h4>Memory</h4>
                        <p>16 GB Unified</p>
                    </div>
                    <div className="spec-item">
                        <h4>Disk</h4>
                        <p>512 GB SSD</p>
                    </div>
                    <div className="spec-item">
                        <h4>Warranty</h4>
                        <div className="warranty-active">
                            Active <i className="fa-solid fa-circle-check"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState('Overview');

    return (
        <div>
            <div className="header">
                <div className="breadcrumbs">
                    <span>Hardware</span>
                    <i className="fa-solid fa-chevron-right" style={{fontSize: '0.7rem'}}></i>
                    <span>MacBook Pro M1</span>
                </div>
                <div className="status-badge">
                    <div className="status-dot"></div>
                    Status: Healthy
                    <i className="fa-regular fa-bell" style={{marginLeft: '0.5rem', color: '#9ca3af'}}></i>
                </div>
            </div>

            <Hero />

            <div className="tabs">
                {['Overview', 'Security', 'Performance', 'AI Insights'].map(tab => (
                    <button 
                        key={tab} 
                        className={`tab ${activeTab === tab ? 'active' : ''}`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab === 'Overview' && <i className="fa-solid fa-border-all"></i>}
                        {tab === 'Security' && <i className="fa-solid fa-shield-halved"></i>}
                        {tab === 'Performance' && <i className="fa-solid fa-gauge-high"></i>}
                        {tab === 'AI Insights' && <i className="fa-solid fa-wand-magic-sparkles"></i>}
                        {tab}
                    </button>
                ))}
            </div>

            <div className="dashboard-grid">
                <div className="card">
                    <div className="card-header">
                        <div className="card-icon icon-green">
                            <i className="fa-solid fa-battery-full"></i>
                        </div>
                        <span className="tag">data transfer</span>
                    </div>
                    <div>
                        <div className="card-title">Disk Health</div>
                        <div className="card-value" style={{color: '#111827'}}>
                            94% <span className="card-subvalue" style={{color: '#10b981'}}>Normal</span>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header">
                        <div className="card-icon icon-blue">
                            <i className="fa-solid fa-hard-drive"></i>
                        </div>
                        <span className="tag">512 GB Total</span>
                    </div>
                    <div>
                        <div className="card-title">Storage Used</div>
                        <div className="card-value">
                            342 GB <span className="card-subvalue">67%</span>
                        </div>
                        <div className="progress-bar">
                            <div className="progress-fill" style={{width: '67%'}}></div>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header">
                        <div className="card-icon icon-purple">
                            <i className="fa-solid fa-cloud-arrow-up"></i>
                        </div>
                        <span className="tag" style={{color: '#3b82f6', cursor: 'pointer'}}>Backup Now</span>
                    </div>
                    <div>
                        <div className="card-title">Livetime Backup Wizard</div>
                        <div className="card-value">
                            1 minute ago
                        </div>
                        <div className="card-subvalue" style={{fontSize: '0.75rem', marginTop: '0.25rem'}}>
                            Next scheduled: 14:00
                        </div>
                    </div>
                </div>
            </div>

            <div className="bottom-grid">
                <div className="system-load">
                    <div className="section-header">
                        <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '700', fontSize: '1.1rem'}}>
                            <i className="fa-solid fa-microchip" style={{color: '#6b7280'}}></i>
                            System Load
                        </div>
                        <span className="tag" style={{backgroundColor: '#d1fae5', color: '#10b981'}}>Optimal</span>
                    </div>

                    <div className="load-item">
                        <div className="load-info">
                            <span>CPU Usage</span>
                            <span>12%</span>
                        </div>
                        <div className="progress-bar">
                            <div className="progress-fill" style={{width: '12%', backgroundColor: '#3b82f6'}}></div>
                        </div>
                    </div>

                    <div className="load-item">
                        <div className="load-info">
                            <span>Memory Pressure</span>
                            <span>45%</span>
                        </div>
                        <div className="progress-bar">
                            <div className="progress-fill" style={{width: '45%', backgroundColor: '#a855f7'}}></div>
                        </div>
                    </div>

                    <div className="load-item">
                        <div className="load-info">
                            <span>Network Bandwidth</span>
                            <span>2.4 MB/s</span>
                        </div>
                        <div className="progress-bar">
                            <div className="progress-fill" style={{width: '20%', backgroundColor: '#10b981'}}></div>
                        </div>
                    </div>
                </div>

                <div className="ai-optimizer">
                    <div>
                        <div className="ai-header">
                            <i className="fa-solid fa-wand-magic-sparkles"></i>
                            AI OPTIMIZER
                        </div>
                        <div className="ai-title">
                            3 Background apps sleeping
                        </div>
                        <div className="ai-desc">
                            Our AI detected high energy usage from "Chrome Helper". Sleeping these apps can extend battery life by ~45 mins.
                        </div>
                    </div>
                    <button className="optimize-btn">
                        Optimize Now <i className="fa-solid fa-bolt"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

const App = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <React.Fragment>
            <Sidebar isOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
            
            <div className="main-content">
                <div className="menu-toggle" onClick={() => setSidebarOpen(!sidebarOpen)} style={{marginBottom: '1rem'}}>
                    <i className="fa-solid fa-bars"></i>
                </div>
                <Dashboard />
            </div>
            
            {sidebarOpen && (
                <div 
                    style={{
                        position: 'fixed', 
                        top: 0, 
                        left: 0, 
                        right: 0, 
                        bottom: 0, 
                        backgroundColor: 'rgba(0,0,0,0.5)', 
                        zIndex: 40
                    }}
                    onClick={() => setSidebarOpen(false)}
                    className="overlay"
                ></div>
            )}
        </React.Fragment>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);