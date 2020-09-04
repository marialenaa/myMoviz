
import React, { useState } from 'react';
import {Col} from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faStar, faVideo} from '@fortawesome/free-solid-svg-icons'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Badge
  } from 'reactstrap';
  

  export default function Movie(props){
    
    const noteGlobal = []
    const voteTab = []
    const monAvisTab = []

    const [watchMovie, setWatchMovie] = useState(false)
    const [countWatchMovie, setCcountWatchMovie] = useState(0)
    const [myRatingMovie, setMyRatingMovie]= useState(0)
    const [isVoted, setIsVoted] = useState(0)
   
    const toggleLike = (nameFromFront, imgFromFront) =>{
      if(props.isAlreadyLiked){
        props.handleClickDeleteMovieParent(nameFromFront)
        }
      else{
        props.handleClickAddMovieParent(nameFromFront,imgFromFront)
      }}

    let colorLiked = ''
      if(props.isAlreadyLiked){
        console.log('color')
        colorLiked = '#e74c3c'
      }
    
    const fontIconStyle = {
      margin:'0 5px', 
      cursor:'pointer',
      color: `${colorLiked}`
    }

    let vu = ''
    const handleClickWatchVideo = ()=>{
      setWatchMovie(true)
      setCcountWatchMovie(countWatchMovie+1)
    }
    if(watchMovie){
      vu='#e74c3c'
    }
    
    const note = Math.floor(props.globalRating)
    const moyenne = myRatingMovie? (myRatingMovie + note) / 2 :note
    for(var i = 0; i< 10 ;i++ ){
      if(i < moyenne){
        noteGlobal.push(<FontAwesomeIcon icon={faStar} size="sm" color={"#efc300"}/> )
      }else{
        noteGlobal.push(<FontAwesomeIcon icon={faStar} size="sm"/>)
      }
    }

    for(var j=0; j<10; j++){
      var colorStar = ""
      if(j < myRatingMovie){
        colorStar = "#efc300"
      }
      let count = j+1
      monAvisTab.push(<FontAwesomeIcon onClick={()=>setCountAndRating(count)} size="sm" icon={faStar} color={`${colorStar}`} />)
    }
    const countPlus = () =>{
      setIsVoted(1)
      if(myRatingMovie < 10){
      setMyRatingMovie(myRatingMovie+1)
      }else{setMyRatingMovie(10)
      }
    }
    const countMoins = () =>{
      setIsVoted(1)
      if(myRatingMovie > 0){
      setMyRatingMovie(myRatingMovie-1)
      }else{ setMyRatingMovie(0)}
    }
    const setCountAndRating = (count)=>{
      setMyRatingMovie(count)
      setIsVoted(1)
    }
    const voteNumber = props.globalCountRating + isVoted
    
    

      return (
           <Col style={{marginBottom:5}} xs="12" md="8" lg="4">         
              <Card  >
                <CardImg top width="100%" src={`/img${props.movieImg}`} alt="RdN" />
                <CardBody style={{padding:10}}>
                  <CardTitle onClick={()=>toggleLike(props.movieName, props.movieImg)} >Like
                    <FontAwesomeIcon  style={fontIconStyle} icon={faHeart} />
                    </CardTitle> 
                  <CardSubtitle> Nombre de vues  
                    <FontAwesomeIcon onClick={()=>handleClickWatchVideo()} style={{margin:'0 5px', cursor:'pointer',color:`${vu}`}} icon={faVideo} />
                    <Badge >{countWatchMovie}</Badge>
                    </CardSubtitle>
                  <CardText> Mon avis :  
                    <Badge onClick={countMoins} style={{cursor:'pointer' }} size="sm">-</Badge> 
                      {monAvisTab}
                    <Badge onClick={countPlus} style={{cursor:'pointer' }} size="sm">+</Badge>
                  </CardText>
                  <CardText> Moyenne {voteTab} 
                  </CardText>
                  <CardText> Global avis {noteGlobal}  
                  <Badge>{voteNumber}</Badge>
                  </CardText> 
                  <CardText> {props.movieName}</CardText>
                  <CardText> {props.desc} </CardText>

                </CardBody>
              </Card>
          
          </Col>
          );
    };

 