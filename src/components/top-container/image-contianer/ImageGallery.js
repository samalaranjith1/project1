import React, { Component } from 'react';
import image0 from './0.jpg'
import image1 from './1.jpg'
import image2 from './2.jpg'
import image3 from './3.jpg'
import image4 from './4.jpg'
import image5 from './5.jpg'
import image6 from './6.jpg'
import image7 from './7.jpg'
import image8 from './8.jpg'
import image9 from './9.jpg'
import image11 from './11.jpg'
import image12 from './12.jpg'
import image13 from './13.jpg'
import image14 from './14.jpg'
import image15 from './15.jpg'


class ImageGallery extends Component {   


    state = {
        index: 0, 
        picList: [image1,image2,image3,image4,image5,image6,image7,image8,image9,image0,image11,image12,
            image13,image14,image15]
      }
      
      onClickNext= () => {
          if (this.state.index + 1 === this.state.picList.length ){
              this.setState({ 
                  index: 0 
                })
            } else {
                this.setState({
                    index: this.state.index + 1
                })
            }

          }
          onClickPrevious= () => {
            if (this.state.index - 1 === -1 ){
                this.setState({ 
                    index: this.state.picList.length - 1
                  })
              } else {
                  this.setState({
                      index: this.state.index - 1
                  })
              }
            }
      
      render() {
        return (
          <div>
            <img src={this.state.picList[this.state.index]} style={{"maxHeight":"40%","maxWidth":"40%"}} /> <br/>
            <button style={{"fontSize":"18px"}} onClick={this.onClickPrevious}> Previous </button>
            <button style={{"margin-left":"5px", "fontSize":"18px"}} onClick={this.onClickNext}> Next </button>
          </div>
        );
      }

}


export default ImageGallery;