import React from 'react';
import "./Artogether.css";


class Artogether extends React.Component {

    //used to reference the size of each section
    constructor(props){
        super(props)
        this.about_ref = React.createRef();
        this.summary_ref = React.createRef();
        this.problem_ref = React.createRef();
        this.methods_ref = React.createRef();
        this.insights_ref = React.createRef();
        this.solution_ref = React.createRef();
    }

    /*boolean for each section of the project details page
      true if is the current section in view; otw false;
      used for the element in side menu: if true classify
      as selected*/
    state = {
        "selected_part" : "about",
        "about" : true,
        "summary" : false,
        "problem" : false,
        "methods" : false,
        "insights" : false,
        "solution" : false
    }

    /*initiate handlScroll eventListener once when opens page*/
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }
    /*removes when leaves component*/
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll = (e) => {
       
        //calculates the distance from top of component to the top of the section
        //offset for top part: 160; offset for space after each section: 100
        let about_height = 160 + 100 + this.about_ref.current.clientHeight;
        let summary_height = 100 + about_height + this.summary_ref.current.clientHeight;
        let problem_height = 100 + summary_height + this.problem_ref.current.clientHeight;
        let methods_height = 100 + problem_height + this.methods_ref.current.clientHeight;
        let insights_height = 100 + methods_height + this.insights_ref.current.clientHeight;

        //console.log("about", about_height, this.about_ref.current.clientHeight)
        let element = e.target
        //console.log("scrollTop", element.scrollTop)
        //scrollTop provides the distance from the top of the page to the top of the screen
        if(this.state.selected_part !== "about" && element.scrollTop > 0 && element.scrollTop <= about_height){
            console.log("!ABOUT")
            this.setState({"selected_part" : "about"})
            this.clickAbout()
        }else if(this.state.selected_part !== "summary" && element.scrollTop > about_height && element.scrollTop <= summary_height){
            console.log("!SUMMARY")
            this.setState({"selected_part" : "summary"})
            this.clickSummary()
        }else if(this.state.selected_part !== "problem" && element.scrollTop > summary_height && element.scrollTop <= problem_height){
            console.log("!PROBLEM")
            this.setState({"selected_part" : "problem"})
            this.clickProblem()
        }else if(this.state.selected_part !== "methods" && element.scrollTop > problem_height && element.scrollTop <= methods_height){
            console.log("!METHODS")
            this.setState({"selected_part" : "methods"})
            this.clickMethods()
        }else if(this.state.selected_part !== "insights" && element.scrollTop > methods_height && element.scrollTop <= insights_height){
            console.log("!INSIGHTS")
            this.setState({"selected_part" : "insights"})
            this.clickInsights()
        }else if(this.state.selected_part !== "solution" && element.scrollTop > insights_height){
            console.log("!SOLUTION")
            this.setState({"selected_part" : "solution"})
            this.clickSolution()
        }
    };

    //the click___ funcitons are used to update the states stored upon clicking
    clickAbout = () => {
        this.setState({
        "about" : true, 
        "summary" : false,
        "problem" : false,
        "methods" : false,
        "insights" : false,
        "solution" : false});
    } 

    clickSummary = () => {
        this.setState({
        "about" : false, 
        "summary" : true,
        "problem" : false,
        "methods" : false,
        "insights" : false,
        "solution" : false});
    } 

    clickProblem = () => {
        this.setState({
        "about" : false, 
        "summary" : false,
        "problem" : true,
        "methods" : false,
        "insights" : false,
        "solution" : false});
    }

    clickMethods = () => {
        this.setState({
        "about" : false, 
        "summary" : false,
        "problem" : false,
        "methods" : true,
        "insights" : false,
        "solution" : false});
    }

    clickInsights = () => {
        this.setState({
        "about" : false, 
        "summary" : false,
        "problem" : false,
        "methods" : false,
        "insights" : true,
        "solution" : false});
    }

    clickSolution = () => {
        this.setState({
        "about" : false, 
        "summary" : false,
        "problem" : false,
        "methods" : false,
        "insights" : false,
        "solution" : true});
    }

    render() {


    /*calls function defined for the class*/
    const handleScroll = (e) => {
        this.handleScroll(e);
    }


    return (
        <div >
            <div id="a__sidebar__sec" className='sidebar__sec' onScroll={handleScroll}>
                <h2 className='title' >
                    ArTogether
                </h2>
                <hr className='solid divider'></hr>
                <div className='sidebar__container'>
                    <div className='sidebar'>  
                        <div>
                            <a href="#a__about" className={this.state.about ? 'a__menu selected' : 'a__menu'}
                               onClick={this.clickAbout}>
                                About
                            </a>
                        </div>
                        <div>
                            <a href="#a__summary" className={this.state.summary ? 'a__menu selected' : 'a__menu'}
                               onClick={this.clickSummary}>
                                Summary
                            </a>
                        </div>
                        <div>
                            <a href="#a__problem" className={this.state.problem ? 'a__menu selected' : 'a__menu'}
                               onClick={this.clickProblem}>
                                The Problem
                            </a>
                        </div>
                        <div>
                            <a href="#a__methods" className={this.state.methods ? 'a__menu selected' : 'a__menu'}
                               onClick={this.clickMethods}>
                                Methods
                            </a>
                        </div>
                        <div>
                            <a href="#a__insights" className={this.state.insights ? 'a__menu selected' : 'a__menu'}
                               onClick={this.clickInsights}>
                                Insights
                            </a>
                        </div>
                        <div>
                            <a href="#a__solution" className={this.state.solution ? 'a__menu selected' : 'a_menu'}
                               onClick={this.clickSolution}>
                                Solution
                            </a>
                        </div>

                    </div>
                    
                    <div className='main__container'>
                        <div id="a__about" className='about' ref={this.about_ref}>
                            <p>This is a user research project proposing an interactive public art museum that enables a shared art experience online.</p>
                            <p><b>Duration:</b> 2 mo.</p>
                            <p><b>Tools:</b> Mural</p>
                            <p><b>Skills:</b> Contextual Inquiry, Affinity Diagramming, storyboard speed-dating, think-aloud protocol</p>
                            <p><b>My Roles:</b> meeting facilitator, interviewer</p>
                        </div> 
                        <div id="a__summary" className='summary' ref={this.summary_ref}>
                            <br/><hr/><br/><br/><br/>
                            <p>Public art is a platform for people to <b>connect with each other</b> and <b>create shared experiences together.</b> </p>
                            <p>In this unprecedented time of strained social connections, we propose <b>ArTogether, a digital, interactive public art museum.</b> In ArTogether, you and your friends can <b>tour online public art together in real-time.</b> </p>
                            <p>This platform connects people by <b>democratizing the artistic experience</b> and <b>eliminating the financial and physical barriers </b>within the realm of public art. It will help measure how public art facilitates social connections that foster a sense of community and wellbeing, and ultimately, contributes to a city’s livability. </p>
                        </div>
                        <div id="a__problem" className='problem' ref={this.problem_ref}>
                            <br/><hr/><br/><br/><br/>
                            <p>We scoped our project around the understanding that public art serves the general public by connecting the people.</p>
                            <p>Before this pandemic, when viewers visit public art together, they create shared memories and bond over art. However, the pandemic has physically limited us, cutting off art viewers' shared art experiences and connections. </p>
                            <p>In our project, we wanted to address the question of how people can experience public art together during this pandemic.</p>
                        </div>
                        <div id="a__methods" className='methods' ref={this.methods_ref}>
                            <br/><hr/><br/><br/><br/>
                            <p>From the initial problem space, we collected data through: </p>
                            <p><b>*Contextual inquiries</b>  to understand different stakeholders</p>
                            <p><b>*Affinity diagramming</b>  to converged to a narrowed scope of social connection amongst art viewers</p>
                            <p><b>*Think-aloud protocol</b> in a generative research manner to dive deeper into the scope of social connection.</p>
                            <p><b>*Storyboard speed dating</b> to validate users' needs </p>
                            <div id='a__iterative'></div>
                        </div>
                        <div id="a__insights" className='insights' ref={this.insights_ref}>
                            <br/><hr/><br/><br/><br/>
                            <p>Q1: What do people value when experiencing art with others?</p>
                            <p><b>A1: Public art serves as a platform for social interactions.</b></p>
                            <br/>
                            <p>Q2: How do people interact with others over public art?</p>
                            <p><b>A2: Users prefer interacting with familiar peers but are willing to open up to strangers with shared interests.</b></p>
                            <br/>
                            <p>Q3: How are art viewers interacting in a pandemic?</p>
                            <p><b>A3: Art viewers need a platform in which they can interact with familiar peers and experience art together.</b></p>
                        </div>
                        <div id="a__solution" className='solution' ref={this.solution_ref}>
                            <br/><hr/><br/><br/><br/>
                            <p>Our solution is to provide our users with <b>a virtual space where they can interact with other art viewers and create shared memories.</b></p>
                            <br/>
                            <p>Our solution embraces a virtual environment so that anyone can access this public museum, regardless of their physical location in this pandemic. </p>
                            <br/>
                            <p>ArTogether lets users create avatars that can tour the virtual museum space together, they will feel they are co-existing in the virtual space and experience this journey together, just as users could do in-person before this pandemic. </p>
                            <br/>
                            <p>Users can have video or audio chat and share their opinions about art not only with their friends but also meet like-minded new users. </p>
                            <br/>
                            <p>This museum enhances social connections by creating more interpersonal interactions and shared memories for art viewers who cannot view outside public art with others during the pandemic.</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
};

export default Artogether
