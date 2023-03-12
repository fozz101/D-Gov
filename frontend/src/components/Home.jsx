import React from "react";

import Counter from "./Counter";
import DonationButton from "./DonationButton";
import Footer from "./Footer";

const Home= () => {
    return (
        <div className="  justify-between  mx-auto ">
            <div className=" flex mx-auto  py-4">
                <div className="" id="msg1-container">
                    <p className="font-black text-7xl">Give a little, help a lot!</p>
                    <br />
                    <p className="font-extralight text-xl">
                    At <span className="font-bold text-blue-800">Talan Foundation</span>, we believe that charitable giving should be transparent, democratic, and empowering. 
                    That's why we've created a platform that leverages the power of blockchain technology and DAO to create a new model of charitable giving.
                        
                    </p>
                    <br />
                    <DonationButton/>

                </div>
                <div id="bgImage1-container">
                    <img src={require('./assets/bg.jpg')} alt="bg" className="w-4/5" id="bgImage1"/>
                </div>
            </div>
            <div id="mission">
                <div id="bgImage2-container">
                    <img src={require('./assets/bg4.jpg')} alt="bg" className="" id="bgImage2"/>
                </div>
                <div id="msg2-container">
                    <p className="font-black text-6xl">Our Mission</p><br />
                    <p className="font-medium text-2xl text-blue-700">What Are We Doing</p>
                    <br />
                    <p className=" text-md " style={{width:"600px"}}>
                        With our platform, you can donate ether with confidence,
                         knowing that your donation is securely held in a smart contract on the blockchain. 
                         <br /><br />
                         And unlike traditional charity organizations, we don't make the decision on where your donation goes. 
                         Instead, our DAO, made up of members who share our values, votes on which charities to support. 
                         <br /><br />
                         This ensures that the decision-making process is transparent, democratic, and fair.
                        We support a range of charities across various causes, from environmental conservation to social 
                        justice to animal welfare. And if you don't see a charity you want to support on our platform, 
                        you can propose it to our DAO for consideration.
                        <br /><br />
                        Join us in our mission to make charitable giving more transparent, democratic, and empowering. 
                        Donate to one of our supported charities or propose a new one today. Together, we can make a difference.
                        </p><br/>
                </div>

            </div>
            <div className=" flex mx-auto  py-4">
                <div className="" id="msg3-container">
                    <p className="font-black text-7xl">How it works ?</p>
                    <br />
                    <p className="font-extralight text-md">
                    <span className="font-bold text-blue-800">1. Donate Ether:</span> Donate ether to our platform by clicking on the "Donate" button on our website.
                    <br /><br />
                    <span className="font-bold text-blue-800">2. Smart Contract:</span> Your donation is securely held in a smart contract on the blockchain. The smart contract ensures that the funds can only be released under specific conditions.
                    <br /><br />
                    <span className="font-bold text-blue-800">3. DAO:</span>  Our DAO, made up of members who share our values, votes on which charities to support. The DAO considers factors such as the impact of the charity, the urgency of their need, and the total amount of funds available.
                    <br /><br />
                    <span className="font-bold text-blue-800">4. Charity Selection:</span> Once the DAO decides on which charity to support, we transfer the funds to the charity's wallet address.
                    <br /><br />
                    <span className="font-bold text-blue-800">5. Impact: </span> Your donation makes a real impact on the causes you care about. You can track the progress of the charities we support on our website and see how your donations are being used. 
                    </p>
                    <br />

                </div>
                <div id="bgImage3-container">
                    <img src={require('./assets/bg2.jpg')} alt="bg" className="" id="bgImage3"/>
                </div>
            </div>
            <div id="impact-container">
                <br />
                <p id="our-impact" className="font-black text-6xl ">Our Impact</p><br />
                <div id="impact" className="my-10 py-10">
                    <div id="education-container" className="flex py-3">
                        <br />
                        <p className=" text-md " style={{width:"550px"}}>
                        <span className="font-bold text-xl text-blue-800">Education: </span><br />
                        We support charities that promote education and literacy around the world. 
                        Our donations have helped to build schools, provide scholarships, and develop educational resources for children and adults.
                        </p>
                        <img src={require('./assets/education.jpg')} className="w-56 " id="education"/>
                    </div>
                    <div id="environment-container" className="flex py-3" >
                        <br />
                        <p className=" text-md " style={{width:"550px"}}>
                        <span className="font-bold text-xl text-blue-800">Environmental Conservation: </span><br />
                        We've supported a range of environmental conservation charities, from protecting endangered species to promoting sustainable agriculture practices. 
                        Our donations have helped to plant trees, clean up beaches, and protect wildlife habitats.
                        </p>
                        <img src={require('./assets/environment.jpg')} className="w-56 h-36" id="healthcare"/>
                    </div>
                    <div id="healthcare-container" className="flex py-3" >
                        <br />
                        <p className=" text-md " style={{width:"550px"}}>
                        <span className="font-bold text-xl text-blue-800">Healthcare: </span><br />
                        We believe that everyone deserves access to quality healthcare. That's why we've supported charities that provide medical care, research, and advocacy for various health issues. 
                        Our donations have helped to fund hospitals, clinics, and research facilities.
                        </p>
                        <img src={require('./assets/healthcare.png')} className="w-56" id="healthcare"/>
                    </div>
                </div>
            </div>
            
            <div id="our-numbers">
                <div className="flex" id="counters">
                    <div id="counter-1">
                        <Counter start={0} end={100} delay={300} />
                        <h1 className="text-xl">Charities</h1>
                    </div>
                    <div id="counter-2">
                        <Counter start={0} end={10000} delay={300} />
                        <h1 className="text-xl">Donations</h1>
                    </div>
                    <div id="counter-3">
                        <Counter start={0} end={50} delay={300} />
                        <h1 className="text-2xl">Countries</h1>
                    </div>            
                    <div id="counter-4">
                        <Counter start={0} end={500} delay={300} />
                        <h1 className="text-2xl">Members</h1>
                    </div>         
                </div>

            </div>
            <div className="">
            <p id="why-d" className=" font-black text-4xl">Why Donate with Us ?</p>
            <div className="flex m-20" id="why-donate">

                <div id="transparency-container">
                    <h1 className="font-bold text-2xl text-white pt-10 px-16">Transparency</h1>
                    <p className="font-light text-sm text-white px-7 pt-10">Our platform uses blockchain technology to ensure that every donation is transparently tracked and recorded on the blockchain. You can see where your donations are going and how they're being used.</p>
                </div>


                <div id="democratic-container">
                    <h1 className="font-bold text-2xl text-white pt-10 px-20">Democracy</h1>
                    <p className="font-light text-sm text-white px-7 pt-10">Our DAO ensures that every decision on which charities to support is made democratically and transparently. You can be confident that your donations are going to charities that have been thoroughly vetted by our community.</p>
               
                </div>


                <div id="empowering-container">
                <h1 className="font-bold text-2xl text-white pt-10 px-16">Empowering</h1>
                    <p className="font-light text-sm text-white px-7 pt-10">By donating with us, you're empowering charities and causes that you care about. You're also joining a community of like-minded individuals who share your values and vision for a better world.</p>
               
                </div>
                <div id="efficient-container">
                <h1 className="font-bold text-2xl text-white pt-10 px-20">Efficiency</h1>
                    <p className="font-light text-sm text-white px-7 pt-10">Our platform is designed to be efficient and effective in distributing donations to charities. By using blockchain technology and DAO, we can eliminate the need for intermediaries, which reduces costs and speeds up the donation process.</p>
               
                </div>

            </div>
            </div>

  
            <Footer/>
        </div> 

    )
}
export default Home