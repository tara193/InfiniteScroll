import React, { Component } from 'react';
import axios from 'axios';

class InfiniteScroll extends Component {
    componentDidMount() {
        
        this.refs.myscroll.addEventListener("scroll",()=>{
            if((this.refs.myscroll.scrollTop+ this.refs.myscroll.clientHeight) >= this.refs.myscroll.scrollHeight){
                this.loadMore();
            }
        });
        this.loadPerson();
    }
    state = {
        data: [],
        albumId: 1,
        loading:false,
        startingItem:0,
        endingItem:5
    }

    loadPerson = () => {
        const {startingItem, endingItem, albumId } = this.state;
        
        const url = 'https://jsonplaceholder.typicode.com/photos?albumId=' + albumId;
        axios.get(url)
            .then(response => {
                const photos = response.data.slice(startingItem, endingItem);
                this.setState({ data: this.state.data.concat(photos), loading:false });
                // console.log( response );
            })
            .catch(error => {
                console.log(error);
                // this.setState({error: true});
            });
    }
    loadMore=()=>{
        console.log('here in loadmore');
        this.setState({loading:true, startingItem:this.state.endingItem+1, endingItem:this.state.endingItem+5});
        this.loadPerson();        
    }
    render() {
        return (
            <div ref="myscroll" style={{height:'530px', overflow:'auto'}}>
                <ul>
                    {this.state.data.map(eachData => (
                        <li key={eachData.id} style={{listStyle:'none'}}>
                            <div>
                                <img src={eachData.thumbnailUrl} alt="I dont know" />
                            </div>
                            {eachData.title}
                        </li>
                    ))}
                </ul>
                {this.state.loading ? <p>Loading.. </p> : " "}
            </div>
        )
    }
}

export default InfiniteScroll;