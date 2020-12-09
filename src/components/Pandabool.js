import React, { useState } from 'react';
import "./Pandabool.css";
import "./Artogether.css";


class Pandabool extends React.Component {
    constructor(props){
        super(props)
        this.about_ref = React.createRef();
        this.walk_cycle_ref = React.createRef();
        this.storyboarding_ref = React.createRef();
        this.modeling_ref = React.createRef();
        this.animating_ref = React.createRef();

    }
    state = {
        "selected_part" : "about",
        "about" : true,
        "walk_cycle" : false,
        "storyboarding" : false,
        "modeling" : false,
        "animating" : false
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
        let walk_cycle_height = 100 + about_height + this.walk_cycle_ref.current.clientHeight;
        let storyboarding_height = 100 + walk_cycle_height + this.storyboarding_ref.current.clientHeight;
        let modeling_height = storyboarding_height + this.modeling_ref.current.clientHeight;

        //console.log("about", about_height, this.about_ref.current.clientHeight)
        let element = e.target
        //console.log("scrollTop", element.scrollTop)
        if(this.state.selected_part !== "about" && element.scrollTop > 0 && element.scrollTop <= about_height){
            console.log("!ABOUT")
            this.setState({"selected_part" : "about"})
            this.clickAbout()
        }else if(this.state.selected_part !== "walk_cycle" && element.scrollTop > about_height && element.scrollTop <= walk_cycle_height){
            console.log("!walk_cycle")
            this.setState({"selected_part" : "walk_cycle"})
            this.clickwalk_cycle()
        }else if(this.state.selected_part !== "storyboarding" && element.scrollTop > walk_cycle_height && element.scrollTop <= storyboarding_height){
            console.log("!storyboarding")
            this.setState({"selected_part" : "storyboarding"})
            this.clickstoryboarding()
        }else if(this.state.selected_part !== "modeling" && element.scrollTop > storyboarding_height && element.scrollTop <= modeling_height){
            console.log("!modeling")
            this.setState({"selected_part" : "modeling"})
            this.clickmodeling()
        }else if(this.state.selected_part !== "animating" && element.scrollTop > modeling_height){
            console.log("!animating")
            this.setState({"selected_part" : "animating"})
            this.clickanimating()
        }



    };

    clickAbout = () => {
        this.setState({
        "about" : true, 
        "walk_cycle" : false,
        "storyboarding" : false,
        "modeling" : false,
        "animating" : false,
        });

    } 

    clickwalk_cycle = () => {
        this.setState({
        "about" : false, 
        "walk_cycle" : true,
        "storyboarding" : false,
        "modeling" : false,
        "animating" : false,
        });
    } 

    clickstoryboarding = () => {
        this.setState({
        "about" : false, 
        "walk_cycle" : false,
        "storyboarding" : true,
        "modeling" : false,
        "animating" : false,
        });
    }

    clickmodeling = () => {
        this.setState({
        "about" : false, 
        "walk_cycle" : false,
        "storyboarding" : false,
        "modeling" : true,
        "animating" : false,
        });
    }

    clickanimating = () => {
        this.setState({
        "about" : false, 
        "walk_cycle" : false,
        "storyboarding" : false,
        "modeling" : false,
        "animating" : true,
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
            <div id="p__sidebar__sec" className='sidebar__sec' onScroll={handleScroll}>
                <h2 id="p__title" className='title' >
                    Pandabool
                </h2>
                <hr id="p__divider" className='solid divider'></hr>
                <div className='sidebar__container'>
                    <div id="p__sidebar" className='sidebar'>  
                        <div>
                            <a href="#b__about"  id="p__sidebar" className={this.state.about ? 'menu selected' : 'menu'}
                               onClick={this.clickAbout}>
                                About
                            </a>
                        </div>
                        <div>
                            <a href="#b__walk_cycle" id="p__sidebar" className={this.state.walk_cycle ? 'menu selected' : 'menu'}
                               onClick={this.clickwalk_cycle}>
                                Walk Cycle
                            </a>
                        </div>
                        <div>
                            <a href="#b__storyboarding" id="p__sidebar" className={this.state.storyboarding ? 'menu selected' : 'menu'}
                               onClick={this.clickstoryboarding}>
                                Storyboarding
                            </a>
                        </div>
                        <div>
                            <a href="#b__modeling" id="p__sidebar" className={this.state.modeling ? 'menu selected' : 'menu'}
                               onClick={this.clickmodeling}>
                                Modeling
                            </a>
                        </div>
                        <div>
                            <a href="#b__animating" id="p__sidebar" className={this.state.animating ? 'menu selected' : 'menu'}
                               onClick={this.clickanimating}>
                                Animating
                            </a>
                        </div>
     

                    </div>
                    
                    <div id="p__main__container" className='main__container'>
                        <div id="b__about" className='about' ref={this.about_ref}>
                            <p>This is a 3D animation project. In producing a model and an animated a walk cycle, , I experienced the whole pipeline of 3D animation production: from design and modeling to rendering and animation.</p>
                            <p><b>Duration</b>: Jan 2019 - May 2020 (4 mo.)</p>
                            <p><b>Tools</b>: Maya, zBrush, iMovie</p>
                        </div> 
                        <div id="b__walk_cycle" className='walk_cycle' ref={this.walk_cycle_ref}>
                            <p><b>Link to video</b>: https://youtu.be/3Tusxi11fxc </p>
                            <div id='p__video' className="images"></div>
                        </div>
                        <div id="b__storyboarding" className='storyboarding' ref={this.storyboarding_ref}>
                            <p>I started the project with a sketches of an initial concept and design. The character-Pandabool and his story were developed during this process. </p>
                            <div id='p__sketch' className="images"></div>
                            <p>An overview of the storyline and the major scenes were sketched out prior to modeling so that modeling can be done with the <b>specific focus to allow the desired movements and motions to be animated.</b> </p>
                            
                            <div id='p__character' className="images"></div>
                        </div>
                        <div id="b__modeling" className='modeling' ref={this.modeling_ref}>
                            <p><b>Modeling and Remeshing</b></p>
                            <div id='p__remeshing' className="images"></div>
                            <p><b>UV Mapping</b></p>
                            <div id='p__uv_mapping' className="images"></div>
                            <p><b>Texturing</b></p>
                            <div id='p__texturing' className="images"></div>
                        </div>
                        <div id="b__animating" className='animating' ref={this.animating_ref}>
                            <p>Before the animation phase,  the 3D model is rigged to give the model a mucsle and bone structure for movement to take place. From there controls are add to allow movemnt of specific parts of the model. Please see the video demo below.</p>
                            
                            <div id='p__rigging' className="images"></div>
                            <p>The lighting is adjusted through rendering. </p>
                            <p>During the animation phase, the following walk cycle is produced at 24 frames per second with movements every four frames for smooth movement for human eyes. </p>
                            <br/> 
                            <br/>
                            <br/>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}
};

export default Pandabool

/*<h1 className='artogether'>ArTogether</h1>*/
