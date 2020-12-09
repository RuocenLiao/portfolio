import React, { useState } from 'react';
import "./Bunbun.css";
import "./Artogether.css";


class Bunbun extends React.Component {
    constructor(props){
        super(props)
        this.about_ref = React.createRef();
        this.research_ref = React.createRef();
        this.design_ref = React.createRef();
        this.implement_ref = React.createRef();

    }
    state = {
        "selected_part" : "about",
        "about" : true,
        "research" : false,
        "design" : false,
        "implement" : false,
    }
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll = (e) => {
       
        //offset for top part 160; offset for bottom space: 100
        let about_height = 160 + this.about_ref.current.clientHeight;
        let research_height = 100 + about_height + this.research_ref.current.clientHeight;
        let design_height = 100 + research_height + this.design_ref.current.clientHeight;
        let implement_height = 100 + design_height + this.implement_ref.current.clientHeight;

        console.log("about", about_height, this.about_ref.current.clientHeight)
        let element = e.target
        console.log("scrollTop", element.scrollTop)
        if(this.state.selected_part !== "about" && element.scrollTop > 0 && element.scrollTop <= about_height){
            console.log("!ABOUT")
            this.setState({"selected_part" : "about"})
            this.clickAbout()
        }else if(this.state.selected_part !== "research" && element.scrollTop > about_height && element.scrollTop <= research_height){
            console.log("!research")
            this.setState({"selected_part" : "research"})
            this.clickresearch()
        }else if(this.state.selected_part !== "design" && element.scrollTop > research_height && element.scrollTop <= design_height){
            console.log("!design")
            this.setState({"selected_part" : "design"})
            this.clickdesign()
        }else if(this.state.selected_part !== "implement" && element.scrollTop > design_height && element.scrollTop <= implement_height){
            console.log("!implement")
            this.setState({"selected_part" : "implement"})
            this.clickimplement()
        }



    };

    clickAbout = () => {
        this.setState({
        "about" : true, 
        "research" : false,
        "design" : false,
        "implement" : false,
        });

    } 

    clickresearch = () => {
        this.setState({
        "about" : false, 
        "research" : true,
        "design" : false,
        "implement" : false,
        });
    } 

    clickdesign = () => {
        this.setState({
        "about" : false, 
        "research" : false,
        "design" : true,
        "implement" : false,
        });
    }

    clickimplement = () => {
        this.setState({
        "about" : false, 
        "research" : false,
        "design" : false,
        "implement" : true,
        });
    }


    render() {

// function Artogether() {

    /*update side menu upon scrolling
     for each section can call click(section to setstate)*/
    const handleScroll = (e) => {
        this.handleScroll(e);
    }

    // window.addEventListener("scroll", handleScroll);

    return (
        <div>
            <div id="b__sidebar__sec" className='sidebar__sec' onScroll={handleScroll}>
                <h2 id="b__title" className='title' >
                    Bun Bun Bake Shop
                </h2>
                <hr className='solid divider'></hr>
                <div className='sidebar__container'>
                    <div className='sidebar'>  
                        <div>
                            <a href="#b__about" className={this.state.about ? 'menu selected' : 'menu'}
                               onClick={this.clickAbout}>
                                About
                            </a>
                        </div>
                        <div>
                            <a href="#b__research" className={this.state.research ? 'menu selected' : 'menu'}
                               onClick={this.clickresearch}>
                                Research
                            </a>
                        </div>
                        <div>
                            <a href="#b__design" className={this.state.design ? 'menu selected' : 'menu'}
                               onClick={this.clickdesign}>
                                Design
                            </a>
                        </div>
                        <div>
                            <a href="#b__implement" className={this.state.implement ? 'menu selected' : 'menu'}
                               onClick={this.clickimplement}>
                                Implement
                            </a>
                        </div>
     

                    </div>
                    
                    <div id="b__main__container" className='main__container'>
                        <div id="b__about" className='about' ref={this.about_ref}>
                            <p>This is a website designed and implemented for a hypothetical local bakery - Bun Bun Bake Shop. The bakery targets local families with a mission to deliver happiness through delicious cinnamon rolls. </p>
                            <p><b>Duration</b>: 4 mo.</p>
                            <p><b>Tools</b>: Figma, HTML, CSS, Javascript</p>
                            <p><b>Skills</b>: low-fi and hi-fi prototyping, user testing, frontend programming</p>
                        </div> 
                        <div id="b__research" className='research' ref={this.research_ref}>
                            <p>I started with a competitive analysis. By anayzing the existing websites, I planned to build on the strengths and avoid the weaknesses.</p>
                            <p>Competitors analyzed:amazon.com, foxinthesnow.com, bunniecakes.com</p>
                            <p>Based on the competitor analysis, I compiled a list of wanted features:</p>
                            <p>*Predict user intentions to facilitate smooth workflow</p>
                            <p>*Confirm status of action (e.g. added item to cart)</p>
                            <p>*Avoid overwhelming information and suggestions</p>
                            <p>*Use pop-up windows for quick actions</p>
                            <p>*make website up-to-date</p>
                            <p>After realizing the importance of smooth user flow and user’s free access of all pages, I created a sitemap that helped me visualize the user flow before moving into prototyping.</p>
                            <div id='b__sitemap' className='images'></div>
                        </div>
                        <div id="b__design" className='design' ref={this.design_ref}>
                            <p>I created low-fi prototype on paper to test the user flow based on the sitemap. </p>
                            <p><b>User testing with think-aloud protocol</b>: Conducting three rounds of user testing with four users, I was able to identity the unintuitive selection process and test alternative options after each round. The user tests made me realize that the user experience also includes the interaction among the different pages and how users can navigate to and back to different pages. These considerations can direct the arrangement of information. </p>
                            <p><b>Target audience</b>: local families with children</p>
                            <div id='b__homescreen' className='images'></div>
                            <p><b>High-Fi prototype</b> is created in Figma based on the iterated paper prototype. Taking my expected user into consideration, I focused on building easy navigation, simple presentation and a sense of warmth and welcome. 
*Navigation is made more intuitive by following design patterns. The simplicity is emphasized through the linear workflow and the color choices. </p>
                            
                            <div id='b__productspage' className='images'></div>
                            <p>I chose a yellow and brown color scheme that both matches the color of cinnamon rolls and indicates a sense of warmth and welcome. The colors are also more natural and appetite-stimulating, appealing to the users. </p>
                            <p><b>Heuristic evaluation</b>:The site is further iterated on by a peer heuristic expert. </p>
                            <div id='b__product_details_page' className='images'></div>
                            <br />
                            <p><b>Link to Figma</b>: https://www.figma.com/file/CNCnBPULBK6QTM7v1Tpaix/Bun-Bun-Bake-Shop?node-id=0%3A1</p>
                        </div>
                        <div id="b__implement" className='implement' ref={this.implement_ref}>
                            <p>Programming Concepts Practiced:</p>
                            <p><b>Concept 1: Local storage</b> I learned and practiced using local storage to store users’ information after the page is closed or reloaded.</p>
                            <p><b>Concept 2: Constructor</b> I used a constructor to store information about the items in the cart. I can use the same method to retrieve the relevant information and feed it into the constructor to create the cart item to store in local storage. </p>
                            <p><b>Concept 3: Modularity of code</b>
I also learned the benefit of modular code. I focused on one simple page first and only created the rest when the first one is settled.</p>
                            <p><b>Concept 4: Event listener</b> I learned to use event listeners to dynamically respond to users’ input such as click event listeners. </p>
                            <p><b>Concept 5: storing information in JSON</b>
Since local storage takes in text in JSON, I learned using parse function and stringify functions to process text to store and retrieve information from local storage. </p>
                            <p><b>Link to Github Page:</b> https://ruocenliao.github.io/PUI2020/assignment6b/index.html </p>
                            <div id='b__iterative'></div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}
};

export default Bunbun

/*<h1 className='artogether'>ArTogether</h1>*/
