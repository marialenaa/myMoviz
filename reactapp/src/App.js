import React, {useState, useEffect} from 'react';
import { NavLink, Nav, NavItem, Button,Row, Container,UncontrolledPopover,PopoverHeader,PopoverBody,Card, CardTitle,CardImg} from 'reactstrap';
import Movie from "./components/Movie"
import './App.css';


function App() {

const [moviesData, setMoviesData] = useState([]) 

 useEffect( () => {
  async function getMoviesData(){
    const rawResponse = await fetch('/newmovies');
    const response = await rawResponse.json()
    setMoviesData(response.movies)
    console.log(response, "yeeeah")
  }
  getMoviesData()
},[])

useEffect( () => {
  return () => {console.log('App is detruit')}
},[])

// var moviesData = [
//   {name:"Star Wars : L'ascension de Skywalker", desc:"La conclusion de la saga Skywalker. De nouvelles légendes vont naître dans cette ...", img:"/starwars.jpg", note:6.7, vote:5},
//   {name:"Maléfique : Le pouvoir du mal", desc: "Plusieurs années après avoir découvert pourquoi la plus célèbre méchante Disney avait un cœur ...", img:"/maleficent.jpg", note:8.2, vote:3},
//   {name:"Jumanji: The Next Level", desc: "L’équipe est de retour, mais le jeu a changé. Alors qu’ils retournent dans Jumanji pour secourir ...", img:"/jumanji.jpg", note:4, vote:5},
//   {name:"Once Upon a Time... in Hollywood", desc: "En 1969, Rick Dalton – star déclinante d'une série télévisée de western – et Cliff Booth ...", img:"/once_upon.jpg", note:5.6, vote:7},
//   {name:"La Reine des neiges 2", desc: "Elsa, Anna, Kristoff, Olaf et Sven voyagent bien au-delà des portes d’Arendelle à la recherche de réponses ...", img:"/frozen.jpg", note:4.6, vote:3},
//   {name:"Terminator: Dark Fate", desc: "De nos jours à Mexico. Dani Ramos, 21 ans, travaille sur une chaîne de montage dans une usine automobile...", img:"/terminator.jpg", note:6.1, vote:1},
// ]

const [moviesCount , setMoviesCount  ] = useState(0)
const [popoverOpen, setPopoverOpen] = useState(false);
const [moviesWishList, setMoviesWishList] = useState([])

const toggle = () => setPopoverOpen(!popoverOpen);

const handleClickAddMovie = (nameFromFront, imgFromFront) => {
    setMoviesWishList([...moviesWishList,{name:nameFromFront, img:imgFromFront}])
    setMoviesCount(moviesCount+1)
  }

const handleClickDeleteMovie = (name) => {
    setMoviesWishList(moviesWishList.filter(e => e.name !== name))
    setMoviesCount(moviesCount-1)
      }

      return (
    <div style={{height: "auto",backgroundColor:"#3b4754"}}>
      <Container >
      <Nav pills style={{padding:15}}>
          <NavItem>
          <img style={{heigth:"100%"}} src='/img/logo.png' alt="logo"></img>
            </NavItem>
            <NavItem>
            <NavLink style={{listStyle: "none"}}>Last Releases</NavLink>
            </NavItem>
            <NavItem>
              <Button id="Popover1" type="button">
              {moviesCount} Films
              </Button>

              <UncontrolledPopover trigger="legacy" placement="bottom" isOpen={popoverOpen} target="Popover1" toggle={toggle}>
                <PopoverHeader>WishList</PopoverHeader>
                <PopoverBody style={{ backgroundColor: '#333', borderColor: '#333', color:"white" }}>
                {moviesWishList.length === 0 ? 'Liste vide':'' }

                {moviesWishList.map((wishMovi, i)=>{
                  return(
                    <Card body key={i} >
                    <CardImg top width="20%" src={`/img${wishMovi.img}`} alt="Card image cap" />
                      <CardTitle style={{color:'black'}} >{wishMovi.name}</CardTitle>
                      <Button onClick={()=>handleClickDeleteMovie(wishMovi.name)} >Delete</Button>
                    </Card>)
                })}
                    
                </PopoverBody>
              </UncontrolledPopover >
            </NavItem>
        </Nav>
        <Row >
       {moviesData.map((movie, i)=>{
        let result = moviesWishList.find(e => e.name === movie.name)
        let isAlreadyLiked = false
        if(result !== undefined){
          isAlreadyLiked = true
        }
          return (<Movie key={i} handleClickDeleteMovieParent={handleClickDeleteMovie} isAlreadyLiked={isAlreadyLiked} handleClickAddMovieParent={handleClickAddMovie } movieName={movie.name} movieDesc={movie.desc} movieImg={movie.img} globalRating={movie.note} globalCountRating={movie.vote} />
          )
          })}
         
        </Row>
    </Container >
    </div>
    
  );
}

export default App;
