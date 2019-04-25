import React, { Component } from 'react'
import axios from 'axios'

const BASE_URL='htp://localhost:5000'

export class ImageUpload extends Component {
    constructor(props){
        super(props);
        this.state={
            images: [],
            imageUrls:[],
            message:''
        }
    }
    selectImages = (event) =>{
        let images = []
        for (var i = 0; i < event.target.files.length; i++){
            images[i] = event.target.files.items(i);}
            images = images.filter(image => image.name.match(/\.(jpg|jpeg|png|gif)$/))
            let message = `${images.length} valid image(s) selected`
            this.setState({images,message})
    }
    upload = () => {
        const uploaders = this.state.images.map(image => {
        const data      = new FormData();
        data.append("image", image, image.name);

        return axios.post(BASE_URL + 'upload',data)
        .then(response => {
            this.setState({
                imageUrls:[response.data.imageUrls,...this.state.imageUrls]
            });
        });
        });
        axios.all(uploaders).then(() => {
            console.log('done');
            }).catch(err => alert(err.message));
    }
  render() {
    return (
      <div>
        <br/>
<div className="col-sm-12">
<h1>Image Uploader</h1><hr/>
<div className="col-sm-4">
<input className="form-control " type="file" 
onChange={this.selectImages} multiple/>
</div>
<p className="text-info">{this.state.message}</p>
<br/><br/><br/>
<div className="col-sm-4">
<button className="btn btn-primary" value="Submit" 
onClick={this.uploadImages}>Submit</button>
</div>
</div>
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><hr/><br/>
<div className="row col-lg-12">
{ 
this.state.imageUrls.map((url, i) => (
<div className="col-lg-2" key={i}>
<img src={BASE_URL + url} className="img-rounded img-responsive"
alt="not available"/><br/>
</div>
))
}
</div>
      </div>
    )
  }
}

export default ImageUpload
