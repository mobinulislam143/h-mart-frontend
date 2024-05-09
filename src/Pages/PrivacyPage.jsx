import React from 'react';
import Layout from '../components/Layout/Layout';

function PrivacyPage(props) {
    const hStyle = {
        margin:'0', padding:'0'
    }
    return (
       <Layout>
         <div>
            <div className='container'>
                <div className='privacy-wrapper my-4'>
                    <h3 style={hStyle}>INTRODUCTION</h3>
                    <hr/>
                    <p> This policy (together with our terms of use [WEBSITE TERMS OF USE] and any other documents referred to on it) sets out the basis on which any personal data we collect from you, or that you provide to us, will be processed by us.Please read the following carefully to understand our views and practices regarding your personal data and how we will treat it. By visiting you are accepting and consenting to the practices described in this policy.</p>
                    <h3 style={hStyle}>Data we collect</h3>
                    <hr/>
                    <p>Following standard procedures of using log files, these files automatically log visits when you visit the Website, it may include information about your web browser, it may log some of the cookies that are installed on your device, IP address, ISP, time zone and time stamp, referring/exit pages, number of clicks. The purpose of this information is for analyzing trends, administering this website, tracking users' movement on this website, and gathering demographic information, and it's not linked to any information that is personally identifiable. Additionally, as you browse the Website, we may collect information about subpages you view.

We may also collect personal information about you such as your name, organization/company name, address, email address or other personal data if you provide it to us during registration, purchasing, contacting us or in other ways. We only ask for personal information when we truly need it to provide a desired service to you (for example if you make an order through the Website). We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we're collecting it and how it will be used.</p>
                    <h3 style={hStyle}>Sharing your Personal Information</h3>
                    <p>We don't share, sell, trade or rent any personally identifying information publicly or with third-parties, except when required to by law, if you violate our Terms of Use or where it helps us facilitate our Service. For example online store module may require third-party services like PayPal or other Payment Processors, we may also use stats services like Google Analytics, Facebook Pixel and more. Each of these services have their own Privacy Policy, for example:
                        <ul>
                            <li><a href="#">PayPal</a></li>
                            <li><a href="#">Google Analytics</a></li>
                        </ul>
                        In order to provide certain features we may rely on other third party services like payment and accounting providers or services, support or communication providers and other services, we reserve right to not track how you interact with any of the provided services.We may collect and use Non-Personal Information to help us improve the Service, customize your experience and analyze use of the Service. This Privacy Policy does not limit our use or disclosure of collected Non-Personal Information. We reserve the right to collect, use and disclose such Non-Personal Information to our partners, advertisers and other third parties at our sole discretion.
                    </p>
                    <h3 style={hStyle}>Cookies and Beacons</h3><hr/>
                    <p>Cookies", which are small data files placed on your device only if your browser's settings allow it and may include information like unique ID, previously visited subpages on this Website and/or other information. Types of Cookies we may use: Session Cookies, Security Cookies or Preference Cookies. You can disable or erase cookies in your browser settings.</p>
                    <h3 style={hStyle}>ACCESS TO YOUR INFORMATION AND CORRECTION</h3><hr/>
                    <p>You have the right to request a copy of the information that we hold about you. If you would like a copy of some or all of your personal data, please CONTACT US BY EMAIL or BY POST.
                    We want to make sure that your personal data is accurate and up to date. You may ask us to correct or remove information which you think is inaccurate.You have the right to ask us not to process your personal data for marketing purposes. We will usually inform you (before collecting your data) if we intend to use your data for such purposes or if we intend to disclose your information to any third party for such purposes. You can exercise your right to prevent such processing by checking certain boxes on the forms we use to collect your data. You can also exercise the right at any time by CONTACT US BY EMAIL or BY POST.</p>
                    <h3 style={hStyle}>HOW WE USE PERSONAL DATA</h3><hr/>
                    <p>We use personal data you supply to us mainly for the purposes of providing the Service, but also for the following purposes: to notify you about changes to our Service, Website or Terms and Conditions to ensure that content from our Website is presented in the most effective manner for you and for your computer, for fraud prevention for marketing purposes We also use personal data we collect from you for the following purposes:to administer our Website and for internal operations, including troubleshooting, data analysis, testing, research, statistical and survey purposes to improve our Website to ensure that content is presented in the most effective manner for you and for your computer to allow you to participate in interactive features of our Website, when you choose to do so as part of our efforts to keep our Website safe and secure to measure or understand the effectiveness of advertising we serve to you and others, and to deliver relevant advertising to you to make suggestions and recommendations to you and other users of our Website about goods or services that may interest you or them.</p>
                    <h3 style={hStyle}>COOKIES AND OTHER TRACKING TECHNOLOGIES</h3><hr/>
                    <p>Technologies such as cookies, beacons, tags and scripts are used by us and our marketing partners, affiliates, or analytics or service providers. These technologies are used in analyzing trends, administering the Website, tracking users movements around the Website and to gather demographic information about our user base as a whole. We may receive reports based on the use of these technologies by these companies on an individual as well as aggregated basis. We use cookies to remember users settings, for authentication and for enhanced user experience. Users can control the use of cookies at the individual browser level. If you reject cookies, you may still use our website, but your ability to use some features or areas of our website may be limited.</p>
                </div>
            </div>
        </div>
       </Layout>
    );
}

export default PrivacyPage;