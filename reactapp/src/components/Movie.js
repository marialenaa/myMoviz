
import React, { useState } from 'react';
import {Col} from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faHeart, 
  faStar, 
  faVideo
} from '@fortawesome/free-solid-svg-icons'
import {
    Card, 
    CardImg, 
    CardText, 
    CardBody,
    CardTitle, 
    CardSubtitle, 
    Badge,
    Button, 
    Collapse 
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
    
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

      return (
           <Col style={{marginBottom:15}} xs="12" md="6" lg="4">         
              <Card  >
                <CardImg top width="100%" src={props.movieImg} alt="RdN" />
                <CardBody style={{padding:10}}>
                  <div  style={{textAlign:'center', height:'3rem'}}>
                    <CardText><strong>{props.movieName}</strong> </CardText>
                  </div>
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
                  </CardText> 
                  <CardText> Nombre d'avis'
                  <Badge  style={{margin:'0 5px'}}> {voteNumber}</Badge>
                  </CardText> 
                  <Button color="info" onClick={toggle} style={{ marginBottom: '0.5rem' }}>Resumé</Button>
                    <Collapse isOpen={isOpen}>
                      <Card>
                        <CardBody  style={{ fontSize: '0.9rem' , padding:10}}>
                        {props.movieDesc}
                        </CardBody>
                      </Card>
                    </Collapse>
                </CardBody>
              </Card>
          </Col>
          );
    };

 