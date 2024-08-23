import React, { useState } from 'react';
import './Tabs.css'; // Import the CSS file
import FAQs from "./FQA/FAQs";

const CustomTabs = () => {
    const [activeTab, setActiveTab] = useState('Overview');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="custom-tabs-container">
            <div className="custom-tabs">
                <div
                    className={`custom-tab ${activeTab === 'Overview' ? 'custom-active' : ''}`}
                    onClick={() => handleTabClick('Overview')}
                >
                    Overview
                </div>
                <div
                    className={`custom-tab ${activeTab === 'FAQs' ? 'custom-active' : ''}`}
                    onClick={() => handleTabClick('FAQs')}
                >
                    FAQs
                </div>
            </div>
            <div className="custom-tab-indicator">
                <div className={`custom-indicator ${activeTab === 'Overview' ? 'custom-overview' : 'custom-faqs'}`}></div>
            </div>
            <div className="custom-tab-content">
                {activeTab === 'Overview' && (
                    <div>
                        <img src="/img/RegisteredAgent4.jpg" alt="" className='Overview_tab_image' />
                        <h2 >Registered Agent Fundamentals: Here's What You Need to Know</h2>
                        <p>
                            So you've made the decision to form a corporation or LLC? Congratulations! One of the first things you'll need in the formation process is a registered agent.
                        </p>
                        <h2 >What is a registered agent?</h2>
                        <p>
                            A registered agent, or agent for service of process, helps to ensure your business maintains compliance. It is the state's way of communicating with a corporation or LLC. This agent also receives legal and tax documents on behalf of a business or corporation, such as notifications from the Secretary of State, government notices, tax forms, notifications of lawsuits, and other materials.
                        </p>
                        <h2 >What is a registered agent?</h2>
                        <ul>
                            <li><b>It gives you freedom.</b>With a registered agent, if you are located in the state where your business is registered, you won't need to worry about updating the state if you move. Plus, this agent must be available during normal business hours. If your company doesn't follow the traditional 9-to-5 work day, an agent can fill the time for you.</li>
                            <li><b>It's the law.</b>If you are incorporated in one state (for example, Delaware), but physically located in another state, you need a registered agent. Why? Each state requires corporations and LLCs formed within their borders to have an agent with a physical address located in that state where legal documents can be delivered during business hours. And P.O. boxes are not acceptable addresses.</li>
                            <li><b>It's your right.</b>A corporation or LLC has certain legal rights, including the right to due process. And a key component of due process is the right to be given state compliance notices in a timely fashion. An agent ensures your ability to receive information, such as wage garnishments, subpoenas, and court summons.</li>
                            <li><b>You'll stay informed and on time. </b>You'll never miss an important notification. Third-party registered agent services will receive all communications on your behalf, so you don't have to worry about tax forms, legal notices, and other business compliance documents getting lost in the shuffle.</li>
                        </ul>
                        <h2 >How should you choose a registered agent?</h2>
                        <p>
                            Individuals can act as a registered agent, but we recommend using an experienced service provider–like incorporate.com. Why? We're in the business of business compliance, and we're in all 50 states and the District of Columbia. Plus, incorporate.com offers CSCNavigator®, a state-of-the-art online online tool that provides you with alerts when filings are due, a calendar of required filings, order status and related documents, the ability to view and pay invoices, current business standing with the state, and more.
                        </p>
                        <img src="/img/RegisteredAgent2.jpg" alt="" className='Overview_tab_image' />
                        <h2>
                            A third-party registered agent also offers:
                        </h2>
                        <ul>
                            <li><b>Reliability.</b>We'll remind you of important deadlines and complete the paperwork for you. And we're available during all business hours, so you're free to attend meetings, travel for work, go on vacation, or even just eat lunch outside of your office.</li>
                            <li><b>Economy.</b>When you partner with incorporate.com, you eliminate the need to pay an employee just to wait for documents from the state. With us, you will be covered 24/7. And our rates are competitive compared to other established registered agents.</li>

                            <li><b>Discretion.</b>When you use incorporate.com for your registered agent services, you'll never run the risk of your customers, vendors, or neighbors seeing a process server deliver legal documents to your place of business or home.</li>

                        </ul>
                        <p>
                            The bottom line? Using an experienced third party, like incorporate.com, to serve as your agent will give you peace of mind. And that's priceless.
                        </p>
                        <div className="youtube-embed-container">
                            <div className="youtube-embed">
                                <iframe
                                    src="https://www.youtube.com/embed/n3VqYhy7YcY"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    title="YouTube video player"
                                />
                            </div>
                        </div>
                        <h2>
                            Ready to sign up for our Registered Agent Services?
                        </h2>
                        <button className="Tabs_overview_button_full_left">Get Started</button>


                    </div>
                )}
                {activeTab === 'FAQs' && (
                    <FAQs/>
                )}
            </div>
        </div>
    );
};

export default CustomTabs;
