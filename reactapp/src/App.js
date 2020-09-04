import React, {useState, useEffect} from 'react';
import { NavLink, Nav, NavItem, Button,Row, Container,Popover,PopoverHeader,PopoverBody,Card, CardTitle,CardImg} from 'reactstrap';
import Movie from "./components/Movie"
import './App.css';


function App() {

const [moviesData, setMoviesData] = useState([]) 
const [moviesCount , setMoviesCount  ] = useState(0)
const [popoverOpen, setPopoverOpen] = useState(false);
const [moviesWishList, setMoviesWishList] = useState([])
const toggle = () => setPopoverOpen(!popoverOpen);

 useEffect( () => {
  async function getMoviesData(){
    const rawResponse = await fetch('/newmovies');
    const response = await rawResponse.json()
    setMoviesData(response.movies)
  }
  getMoviesData()
},[])

const handleClickAddMovie = async (nameFromFront, imgFromFront) => {
  setMoviesWishList([...moviesWishList,{name:nameFromFront, img:imgFromFront}])
    setMoviesCount(moviesCount+1)
  
  await fetch('/addmovie', {
    method: 'POST',
    headers: {'Content-Type':'application/x-www-form-urlencoded'},
    body: `nameFromFront=${nameFromFront}&imgFromFront=${imgFromFront}`
    }
  )
    }

const handleClickDeleteMovie = async (name) => {
  if(moviesWishList.length <= 1){
    console.log('fermé')
    setPopoverOpen(!popoverOpen)    
  }
    setMoviesWishList(moviesWishList.filter(e => e.name !== name))
    setMoviesCount(moviesCount-1)
    await fetch(`/deletemovie/${name}`,{
      method:'DELETE',
    })
      }

      return (
    <div style={{height: "auto", width:"100%",backgroundColor:"#3b4754"}}>
      <Container >
      <Nav pills style={{padding:15}}>
          <NavItem>
          <img style={{heigth:"100%"}} src='/img/logo.png' alt="logo"></img>
            </NavItem>
            <NavItem>
            <NavLink style={{listStyle: "none", cursor:"pointer"}}>Last Releases</NavLink>
            </NavItem>
            <NavItem>
              <Button id="PopoverLegacy" type="button">
              {moviesCount} Films
              </Button>

              <Popover trigger="legacy" placement="right" isOpen={popoverOpen} target="PopoverLegacy" toggle={toggle}>
                <PopoverHeader>WishList</PopoverHeader>
                <PopoverBody style={{ backgroundColor: '#333', borderColor: '#333', color:"white" }}>
                {moviesWishList.length === 0 ? 'Vide':'' }

                {moviesWishList.map((wishMovi, i)=>{
                  return(
                    <Card body key={i} >
                    <CardImg top width="20%" src={`${wishMovi.img}`} alt="Card image cap" />
                      <CardTitle style={{color:'black'}} >{wishMovi.name}</CardTitle>
                      <Button onClick={()=>handleClickDeleteMovie(wishMovi.name)} >Delete</Button>
                    </Card>)
                })}
                    
                </PopoverBody>
              </Popover >
            </NavItem>
        </Nav>
        <Row >
       {moviesData.map((movie, i)=>{
        let result = moviesWishList.find(e => e.name === movie.original_title)
        let img = "generique.jpg"
        if(movie.backdrop_path){
          img = `https://image.tmdb.org/t/p/w500/`+movie.backdrop_path
        }
        let isAlreadyLiked = false
        if(result !== undefined){
          isAlreadyLiked = true
        }
          return (<Movie key={i} handleClickDeleteMovieParent={handleClickDeleteMovie} isAlreadyLiked={isAlreadyLiked} handleClickAddMovieParent={handleClickAddMovie } movieName={movie.original_title} movieDesc={movie.overview} movieImg={img} globalRating={movie.vote_average} globalCountRating={movie.vote_count} />
          )
          })}
         
        </Row>
    </Container >
    </div>
    
  );
}

export default App;
