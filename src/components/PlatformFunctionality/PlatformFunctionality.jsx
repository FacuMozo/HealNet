import React from 'react';
import './PlatformFunctionality.scss';

const PlatformFunctionality = () => {
    return (
        <section className="platform-functionality">
            <div className="container">
                <h2>Platform Functionality</h2>
                <div className="features">
                    <div className="feature-card">
                        <div className="icon">Icon1</div>
                        <h3>Feature 1</h3>
                        <p>Description of feature 1</p>
                    </div>
                    <div className="feature-card">
                        <div className="icon">Icon2</div>
                        <h3>Feature 2</h3>
                        <p>Description of feature 2</p>
                    </div>
                    <div className="feature-card">
                        <div className="icon">Icon3</div>
                        <h3>Feature 3</h3>
                        <p>Description of feature 3</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PlatformFunctionality;
