/**
export default function Button() {
    return(
        <button>
            I don't do anything
        </button>
    );
} 

export default function Button(){
    function handleClick() {
        alert('You claimed me!');
    }
    return (
        <button onClick={handleClick}>
            click me
        </button>
    );
}

function AlertButton({ message, children }){
    return(
        <button onClick={()=> alert(message)}>
            {children}
        </button>
    );
}

export default function Toolbar(){
    return (
        <div>
            <AlertButton message="Playing!">
                Play Movie
            </AlertButton>
            <AlertButton message="Uploading!">
                Upload Imagem
            </AlertButton>
        </div>
    );
}

function Button({ onClick, children }){
    return(
        <button onClick={onClick}>
            {children}
        </button>
    );
}

function PlayButton({ movieName }){
    function handlePlayClick(){
        alert('Playing ${movieName}!');
    }  
    return(
        <Button onClick={HandlePlayClick}>
            Play "{movieName}"
        </Button>
    );
}

function UploadBUtton(){
    return(
        <Button onClick={()=> alert('Uploading!')}>
            Upload Image
        </Button>
    );
}

export default function Toolbar(){
    return(
        <div>
            <PlayButton movieName="Kiki's Delivery Service" />
            <UploadButton />
        </div>
    );
}

function Button({ onSmash, children }){
    return(
        <button onClick={onSmash}>
            {children}
        </button>
    );
}

export default function App() {
    return (
        <div>
            <Button onSmash={()=> alert('Playing')}>
                Play Movie
            </Button>
            <Button onSmash={()=> alert('Uploading')}>
                Upload Image
            </Button>
    );
}

export default function App(){
    return (
        <Toolbar
            onPlayMovie={()=>alert('Playing')}
            onUploadImage={()=>alert('Uploading')}
        />
    );
}

function ToolBar({ onPlayMovie, onUploadImage}) {
    return (
        <div>
            <Button onClickl={onPlayMovie}>
                Play Movie
            </Button>
            <Button onClick={onUploadImage}>
                Upload Image
            </Button>
        <div>
    );
}

function Button({ onClick, children }){
    return(
        <button onClick={onClick}>
            {children}
        </button>
    );
}

export default function Toolbar() {
    return (
        <div className="Toolbar" onClick={()->{
            alert('You clicked on the toolbar!');
        }}
            <button onClick={()=>alert('Playing')}>
                Play Movie
            </button>
            <button onClick={()=>alert('Uploading')}>
                Upload Image
            </button>
        <div>
    );
}

function Button({ onClick, children }){
    return(
        <button onClick={e => {
            e.stopPropagation();
            onClick();
        }}>
            {children}
        </button>
    );
}

export default function Toolbar() {
    return (
        <div className="Toolbar" onClick={()->{
            alert('You clicked on the toolbar!');
        }}
            <button onClick={()=>alert('Playing')}>
                Play Movie
            </button>
            <button onClick={()=>alert('Uploading')}>
                Upload Image
            </button>
        <div>
    );
}

export default function Signup(){
    return(
        <form onSubmit={(()=>alert('Submitting!'))}>
            <input />
            <button>Send</button>
        </form>
    );
}

export default function Signup(){
    return(
        <form onSubmit={e => {
            e.preventDefault();
            alert('Submitting!');
        }}>
            <input />
            <button>Send</button>
        </form>
    );
}

import { useState } from 'react';
import { sculptureList } from './Gdata.js';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
    setIndex(index + 1);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <div className="container">
          <button onClick={handleNextClick}>
            Next
          </button>
          <h2>
            <i>{sculpture.name} </i> 
            by {sculpture.artist}
          </h2>
          <h3>  
            ({index + 1} of {sculptureList.length})
          </h3>
          <img 
            src={sculpture.url} 
            alt={sculpture.alt}
          />
          <p>
            {sculpture.description}
          </p>
      </div>
    </>
  );
}

import Image from '.Image.js';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'))
root.render(<Image />);

export default function Image() {
    return (
        <img
            src = "https://i.imgur.com/ZF6s192.jpg"
            alt="'Floralis Genérica' by Eduardo Catalano"
        />
    );
}

import Gallery from './Gallery.js';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'))
root.render(<Gallery />);

export default function Clock({ time }){
    return (
        <>
            <h1>{time}</h1>
            <input />
        </>
    );
}
function useTime() {
        const [time, setTime] = useState(() => new Date());
        useEffect(()=> {
            const id = setInterval(() =>{
                setTime(new Date());
            }, 1000);
            return ()=> clearInterval(id);
        }, []);
        return time;

}
function Clock(){
        return useTime(toLocaleTimeString());
    }

export default function Form(){
    const [isSent, setIsSent] = userState(false);
    const [message, setMessage] = useState('Hi');
    if (isSent) {
        return <h1>Your message is on its way</h1>
    }
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            setIsSent(true);
            sendMessage(message);
        }}>
            <textarea
                placeholder="Message"
                value={message}
                onChange={e=>setMessage(e.target.value)}
            />
            <button type="submit">Send</button>
        </form>
    );
}

function sendMessage(message){
    //...
}

export default function Counter() {
    const [number, setNumber] = useState(0);
    return(
        <>
            <h1>{number}</h1>
            <button onClick={()=>{
                setNumber(numer+1);
                setNumber(numer+1);
                setNumber(numer+1);
            }}>+3</button>
        </>
    )
}

export default function Counter() {
    const [number, setNumber] = useState(0);
    return(
        <>
            <h1>{number}</h1>
            <button onClick={()=>{
                setNumber(numer+5);
                alert(number);
            }}>+5</button>
        </>
    )
}

export default function Counter() {
    const [number, setNumber] = useState(0);
    return(
        <>
            <h1>{number}</h1>
            <button onClick={()=>{
                setNumber(numer+5);
                setTimeout(()=>{
                    alert(number);
                },3000)
            }}>+5</button>
        </>
    )
}

export default function Counter() {
    const [number, setNumber] = useState(0);
    return(
        <>
            <h1>{number}</h1>
            <button onClick={()=>{
                setNumber(numer+5);
                setNumber(n => n+1);
            }}>Increase the number</button>
        </>
    )
}

export default function Counter() {
    const [number, setNumber] = useState(0);
    return(
        <>
            <h1>{number}</h1>
            <button onClick={()=>{
                setNumber(numer+5);
                setNumber(n => n+1);
                setNumber(42);
            }}>Increase the number</button>
        </>
    )
}

const iinitialList = [
        { id: 0, title: 'Big Bellies', seen: false },
        { id: 1, title: 'Lunar Landscape', seen: false },
        { id: 2, title: 'Terracotta Army', seen: true },
      ];
      
      function BucketList() {
        const [myList, updateMyList] = useState(
          iinitialList
        );
        const [yourList, updateYourList] = useState(
          iinitialList
        );
      
        function handleToggleMyList(id, nextSeen) {
          updateMyList(draft => {
            const artwork = draft.find(a =>
              a.id === id
            );
            artwork.seen = nextSeen;
          });
        }
      
        function handleToggleYourList(artworkId, nextSeen) {
          updateYourList(draft => {
            const artwork = draft.find(a =>
              a.id === artworkId
            );
            artwork.seen = nextSeen;
          });
        }
      
        return (
          <>
            <div className="container">
              <h1>Art Bucket List</h1>
              <h2>My list of art to see:</h2>
              <ItemList
                artworks={myList}
                onToggle={handleToggleMyList} />
              <h2>Your list of art to see:</h2>
              <ItemList
                artworks={yourList}
                onToggle={handleToggleYourList} />
            </div>
          </>
        );
      }
      
      function ItemList({ artworks, onToggle }) {
        return (
          <ul>
            {artworks.map(artwork => (
              <li key={artwork.id}>
                <label>
                  <input
                    type="checkbox"
                    checked={artwork.seen}
                    onChange={e => {
                      onToggle(
                        artwork.id,
                        e.target.checked
                      );
                    }}
                  />
                  {artwork.title}
                </label>
              </li>
            ))}
          </ul>
        );
    }

const iinitialList = [
        { id: 0, title: 'Big Bellies', seen: false },
        { id: 1, title: 'Lunar Landscape', seen: false },
        { id: 2, title: 'Terracotta Army', seen: true },
    ];
  
    function BucketList() {
        const [myList, setMyList] = useState(
        iinitialList
    );
        const [yourList, setYourList] = useState(
        iinitialList
    );
  
    function handleToggleMyList(artworkId, nextSeen) {
      setMyList(myList.map(artwork => {
        if (artwork.id === artworkId) {
            //Create a *new* object with chantges
            return { ...artwork, seen: nextSeen };
        } else {
            //no changes
            return artwork;
        }
    }));
    }
  
    function handleToggleYourList(artworkId, nextSeen) {
      setYourList(yourList.map(artwork => {
        if (artwork.id === artworkId) {
            //create a *new* object with changes
            return ({ ...artwork, seen: nextSeen });
        } else {
            // no changes
            return artwork;
        }
        }));
    }
  
    return (
      <>
        <div className="container">
          <h1>Art Bucket List</h1>
          <h2>My list of art to see:</h2>
          <BucketItemList
            artworks={myList}
            onToggle={handleToggleMyList} />
          <h2>Your list of art to see:</h2>
          <BucketItemList
            artworks={yourList}
            onToggle={handleToggleYourList} />
        </div>
      </>
    );
  }
  
  function BucketItemList({ artworks, onToggle }) {
    return (
      <ul>
        {artworks.map(artwork => (
          <li key={artwork.id}>
            <label>
              <input
                type="checkbox"
                checked={artwork.seen}
                onChange={e => {
                  onToggle(
                    artwork.id,
                    e.target.checked
                  );
                }}
              />
              {artwork.title}
            </label>
          </li>
        ))}
      </ul>
    );
  }


 */
import { useState } from 'react';
import './index.css';

function App() {
    function Button({ onClick, children }) {
        return (
            <button onClick={e => {
                e.stopPropagation();
                onClick();
            }}>
                {children}
            </button>
        );
    }
    
    function Toolbar() {
        return (
            <>
                <div className="container">
                    <div onClick={() => {
                        alert('You clicked on the toolbar');
                    }}>
                        <Button onClick={() => alert('Playing!')}>
                            Play Movie
                        </Button>
                        <Button onClick={() => alert('Uploading!')}>
                            Upload Image
                        </Button>
                    </div>
                </div>
            </>
        );
    }

    const sculptureList = [{
        name: 'Homenaje a la Neurocirugía',
        artist: 'Marta Colvin Andrade',
        description: 'Although Colvin is predominantly known for abstract themes that allude to pre-Hispanic symbols, this gigantic sculpture, an homage to neurosurgery, is one of her most recognizable public art pieces.',
        url: 'https://i.imgur.com/Mx7dA2Y.jpg',
        alt: 'A bronze statue of two crossed hands delicately holding a human brain in their fingertips.'  
      }, {
        name: 'Floralis Genérica',
        artist: 'Eduardo Catalano',
        description: 'This enormous (75 ft. or 23m) silver flower is located in Buenos Aires. It is designed to move, closing its petals in the evening or when strong winds blow and opening them in the morning.',
        url: 'https://i.imgur.com/ZF6s192m.jpg',
        alt: 'A gigantic metallic flower sculpture with reflective mirror-like petals and strong stamens.'
      }, {
        name: 'Eternal Presence',
        artist: 'John Woodrow Wilson',
        description: 'Wilson was known for his preoccupation with equality, social justice, as well as the essential and spiritual qualities of humankind. This massive (7ft. or 2,13m) bronze represents what he described as "a symbolic Black presence infused with a sense of universal humanity."',
        url: 'https://i.imgur.com/aTtVpES.jpg',
        alt: 'The sculpture depicting a human head seems ever-present and solemn. It radiates calm and serenity.'
      }, {
        name: 'Moai',
        artist: 'Unknown Artist',
        description: 'Located on the Easter Island, there are 1,000 moai, or extant monumental statues, created by the early Rapa Nui people, which some believe represented deified ancestors.',
        url: 'https://i.imgur.com/RCwLEoQm.jpg',
        alt: 'Three monumental stone busts with the heads that are disproportionately large with somber faces.'
      }, {
        name: 'Blue Nana',
        artist: 'Niki de Saint Phalle',
        description: 'The Nanas are triumphant creatures, symbols of femininity and maternity. Initially, Saint Phalle used fabric and found objects for the Nanas, and later on introduced polyester to achieve a more vibrant effect.',
        url: 'https://i.imgur.com/Sd1AgUOm.jpg',
        alt: 'A large mosaic sculpture of a whimsical dancing female figure in a colorful costume emanating joy.'
      }, {
        name: 'Ultimate Form',
        artist: 'Barbara Hepworth',
        description: 'This abstract bronze sculpture is a part of The Family of Man series located at Yorkshire Sculpture Park. Hepworth chose not to create literal representations of the world but developed abstract forms inspired by people and landscapes.',
        url: 'https://i.imgur.com/2heNQDcm.jpg',
        alt: 'A tall sculpture made of three elements stacked on each other reminding of a human figure.'
      }, {
        name: 'Cavaliere',
        artist: 'Lamidi Olonade Fakeye',
        description: "Descended from four generations of woodcarvers, Fakeye's work blended traditional and contemporary Yoruba themes.",
        url: 'https://i.imgur.com/wIdGuZwm.png',
        alt: 'An intricate wood sculpture of a warrior with a focused face on a horse adorned with patterns.'
      }, {
        name: 'Big Bellies',
        artist: 'Alina Szapocznikow',
        description: "Szapocznikow is known for her sculptures of the fragmented body as a metaphor for the fragility and impermanence of youth and beauty. This sculpture depicts two very realistic large bellies stacked on top of each other, each around five feet (1,5m) tall.",
        url: 'https://i.imgur.com/AlHTAdDm.jpg',
        alt: 'The sculpture reminds a cascade of folds, quite different from bellies in classical sculptures.'
      }, {
        name: 'Terracotta Army',
        artist: 'Unknown Artist',
        description: 'The Terracotta Army is a collection of terracotta sculptures depicting the armies of Qin Shi Huang, the first Emperor of China. The army consited of more than 8,000 soldiers, 130 chariots with 520 horses, and 150 cavalry horses.',
        url: 'https://i.imgur.com/HMFmH6m.jpg',
        alt: '12 terracotta sculptures of solemn warriors, each with a unique facial expression and armor.'
      }, {
        name: 'Lunar Landscape',
        artist: 'Louise Nevelson',
        description: 'Nevelson was known for scavenging objects from New York City debris, which she would later assemble into monumental constructions. In this one, she used disparate parts like a bedpost, juggling pin, and seat fragment, nailing and gluing them into boxes that reflect the influence of Cubism’s geometric abstraction of space and form.',
        url: 'https://i.imgur.com/rN7hY6om.jpg',
        alt: 'A black matte sculpture where the individual elements are initially indistinguishable.'
      }, {
        name: 'Aureole',
        artist: 'Ranjani Shettar',
        description: 'Shettar merges the traditional and the modern, the natural and the industrial. Her art focuses on the relationship between man and nature. Her work was described as compelling both abstractly and figuratively, gravity defying, and a "fine synthesis of unlikely materials."',
        url: 'https://i.imgur.com/okTpbHhm.jpg',
        alt: 'A pale wire-like sculpture mounted on concrete wall and descending on the floor. It appears light.'
      }, {
        name: 'Hippos',
        artist: 'Taipei Zoo',
        description: 'The Taipei Zoo commissioned a Hippo Square featuring submerged hippos at play.',
        url: 'https://i.imgur.com/6o5Vuyu.jpg',
        alt: 'A group of bronze hippo sculptures emerging from the sett sidewalk as if they were swimming.'
    }];
    function Gallery() {
        const [index, setIndex] = useState(0);
        const [showMore, setShowMore] = useState(false);
      
        function handleNextClick() {
          setIndex(index + 1);
        }
      
        function handleMoreClick() {
          setShowMore(!showMore);
        }
      
        let sculpture = sculptureList[index];
        return (
          <>
            <div className="container">
              <section>
                <button onClick={handleNextClick}>
                  Next
                </button>
                <h2>
                  <i>{sculpture.name} </i> 
                  by {sculpture.artist}
                </h2>
                <h3>  
                  ({index + 1} of {sculptureList.length})
                </h3>
                <button onClick={handleMoreClick}>
                  {showMore ? 'Hide' : 'Show'} details
                </button>
                {showMore && <p>{sculpture.description}</p>}
                <img 
                  src={sculpture.url} 
                  alt={sculpture.alt}
                />
              </section>
            </div>
          </>
        );
    }

    function Image() {
        return(
            <img
                src = "https://i.imgur.com/ZF6s192.jpg"
                alt="'Floralis Genérica' by Eduardo Catalano"
            />
        )
    }

    function Form() {
        const [to, setTo] = useState('Alice');
        const [message, setMessage] = useState('Olá');
      
        function handleSubmit(e) {
          e.preventDefault();
          setTimeout(() => {
            alert(`Você disse ${message} para ${to}`);
          }, 5000);
        }
        return (
            <>
              <div className="container">
                <form onSubmit={handleSubmit}>
                  <label>
                    Para:{' '}
                    <select
                      value={to}
                      onChange={e => setTo(e.target.value)}>
                      <option value="Alice">Alice</option>
                      <option value="Bob">Bob</option>
                    </select>
                  </label>
                  <textarea
                    placeholder="Message"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                  />
                  <button type="submit">Enviar</button>
                </form>
              </div>
            </>
          );
    }
    function Counter() {
        const [number, setNumber] = useState(0);
      
        return (
          <>
            <div className="container">
              <h1>{number}</h1>
              <button onClick={() => {
                setNumber(n => n + 1);
                setNumber(n => n + 1);
                setNumber(n => n + 1);
              }}>+3</button>
            </div>
          </>
        )
    }

    function MovingDot() {
        const [position, setPosition] = useState({
          x: 0,
          y: 0
        });
      
        return (
          <>
            <div className="container">
              <div
                onPointerMove={e => {
                  setPosition({
                    x: e.clientX,
                    y: e.clientY
                  });
                }}
                style={{
                  position: 'relative',
                  width: '100vw',
                  height: '100vh',
                }}>
                <div style={{
                  position: 'absolute',
                  backgroundColor: 'red',
                  borderRadius: '50%',
                  transform: `translate(${position.x}px, ${position.y}px)`,
                  left: -10,
                  top: -10,
                  width: 20,
                  height: 20,
                }} />
              </div>
            </div>
          </>
        );
    }
    
    function Form2() {
        const [person, setPerson] = useState({
          firstName: 'Barbara',
          lastName: 'Hepworth',
          email: 'bhepworth@sculpture.com'
        });
      
        function handleFirstNameChange(e) {
          setPerson(prevPerson => ({
            ...prevPerson,
            firstName: e.target.value
          }));
        }
      
        function handleLastNameChange(e) {
          setPerson(prevPerson => ({
            ...prevPerson,
            lastName: e.target.value
          }));
        }
      
        function handleEmailChange(e) {
          setPerson(prevPerson => ({
            ...prevPerson,
            email: e.target.value
          }));
        }
      
        return (
          <>
            <div className="container">
              <label>
                Nome:
                <input
                  value={person.firstName}
                  onChange={handleFirstNameChange}
                />
              </label>
              <label>
                Sobrenome:
                <input
                  value={person.lastName}
                  onChange={handleLastNameChange}
                />
              </label>
              <label>
                E-mail:
                <input
                  value={person.email}
                  onChange={handleEmailChange}
                />
              </label>
              <p>
                {person.firstName}{' '}
                {person.lastName}{' '}
                ({person.email})
              </p>
            </div>
          </>
        );
    }

    function Form3() {
        const [person, updatePerson] = useState({
          name: 'Niki de Saint Phalle',
          artwork: {
            title: 'Blue Nana',
            city: 'Hamburgo',
            image: 'https://i.imgur.com/Sd1AgUOm.jpg',
          }
        });
      
        function handleNameChange(e) {
          updatePerson(draft => {
            draft.name = e.target.value;
          });
        }
      
        function handleTitleChange(e) {
          updatePerson(draft => {
            draft.artwork.title = e.target.value;
          });
        }
      
        function handleCityChange(e) {
          updatePerson(draft => {
            draft.artwork.city = e.target.value;
          });
        }
      
        function handleImageChange(e) {
          updatePerson(draft => {
            draft.artwork.image = e.target.value;
          });
        }
      
        return (
          <>
            <div className="container">
              <label>
                Nome:
                <input
                  value={person.name}
                  onChange={handleNameChange}
                />
              </label>
              <label>
                Título:
                <input
                  value={person.artwork.title}
                  onChange={handleTitleChange}
                />
              </label>
              <label>
                Cidade:
                <input
                  value={person.artwork.city}
                  onChange={handleCityChange}
                />
              </label>
              <label>
                Imagem:
                <input
                  value={person.artwork.image}
                  onChange={handleImageChange}
                />
              </label>
              <p>
                <i>{person.artwork.title}</i>
                {' por '}
                {person.name}
                <br />
                (localizada em {person.artwork.city})
              </p>
              <img 
                src={person.artwork.image} 
                alt={person.artwork.title}
              />
            </div>
          </>
        );
    }
    let nextId = 0;

    function List() {
        const [name, setName] = useState('');
        const [artists, setArtists] = useState([]);

        return (
            <>
            <div className="container">
                <h1>Inspiring sculptors:</h1>
                <input
                value={name}
                onChange={e => setName(e.target.value)}
                />
                <button onClick={() => {
                setArtists([
                    ...artists,
                    { id: nextId++, name: name }
                ]);
                }}>Add</button>
                <ul>
                {artists.map(artist => (
                    <li key={artist.id}>{artist.name}</li>
                ))}
                </ul>
            </div>
            </>
        );
    }
    let initialArtists = [
        { id: 0, name: 'Marta Colvin Andrade' },
        { id: 1, name: 'Lamidi Olonade Fakeye'},
        { id: 2, name: 'Louise Nevelson'},
    ];
      
    function List2() {
        const [artists, setArtists] = useState(
          initialArtists
        );
      
        return (
          <>
            <div className="container">
              <h1>Inspiring sculptors:</h1>
              <ul>
                {artists.map(artist => (
                  <li key={artist.id}>
                    {artist.name}{' '}
                    <button onClick={() => {
                      setArtists(
                        artists.filter(a =>
                          a.id !== artist.id
                        )
                      );
                    }}>
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </>
        );
    }
    let nextIdd = 3;
    function List3() {
    const [name, setName] = useState('');
    const [artists, setArtists] = useState(
        initialArtists
    );

    function handleClick() {
        const insertAt = 1; // Could be any index
        const nextArtists = [
        // Items before the insertion point:
        ...artists.slice(0, insertAt),
        // New item:
        { id: nextIdd++, name: name },
        // Items after the insertion point:
        ...artists.slice(insertAt)
        ];
        setArtists(nextArtists);
        setName('');
    }
        return (
            <>
            <div className="container">
                <h1>Inspiring sculptors:</h1>
                <input
                value={name}
                onChange={e => setName(e.target.value)}
                />
                <button onClick={handleClick}>
                Insert
                </button>
                <ul>
                {artists.map(artist => (
                    <li key={artist.id}>{artist.name}</li>
                ))}
                </ul>
            </div>
            </>
        );
    }

    const initialList = [
        { id: 0, title: 'Big Bellies' },
        { id: 1, title: 'Lunar Landscape' },
        { id: 2, title: 'Terracotta Army' },
      ];
      
    function List4() {
        const [list, setList] = useState(initialList);
      
        function handleClick() {
          const nextList = [...list];
          nextList.reverse();
          setList(nextList);
        }
      
        return (
          <>
            <div className="container">
              <button onClick={handleClick}>
                Reverse
              </button>
              <ul>
                {list.map(artwork => (
                  <li key={artwork.id}>{artwork.title}</li>
                ))}
              </ul>
            </div>
          </>
        );
    }

    let initialShapes = [
        { id: 0, type: 'circle', x: 50, y: 100 },
        { id: 1, type: 'square', x: 150, y: 100 },
        { id: 2, type: 'circle', x: 250, y: 100 },
      ];
      
    function ShapeEditor() {
        const [shapes, setShapes] = useState(
          initialShapes
        );
      
        function handleClick() {
          const nextShapes = shapes.map(shape => {
            if (shape.type === 'square') {
              // No change
              return shape;
            } else {
              // Return a new circle 50px below
              return {
                ...shape,
                y: shape.y + 50,
              };
            }
          });
          // Re-render with the new array
          setShapes(nextShapes);
        }
      
        return (
          <>
            <div className="container">
              <button onClick={handleClick}>
                Move circles down!
              </button>
              {shapes.map(shape => (
                <div
                  key={shape.id}
                  style={{
                    background: 'purple',
                    position: 'absolute',
                    left: shape.x,
                    top: shape.y,
                    borderRadius:
                      shape.type === 'circle'
                        ? '50%' : '',
                    width: 20,
                    height: 20,
                  }} />
              ))}
            </div>
          </>
        );
    }

    let initialCounters = [
        0, 0, 0
      ];
      
    function CounterList() {
        const [counters, setCounters] = useState(
          initialCounters
        );
      
        function handleIncrementClick(index) {
          const nextCounters = counters.map((c, i) => {
            if (i === index) {
              return c + 1;
            } else {
              return c;
            }
          });
          setCounters(nextCounters);
        }
      
        return (
          <>
            <div className="container">
              <ul>
                {counters.map((counter, i) => (
                  <li key={i}>
                    {counter}
                    <button onClick={() => {
                      handleIncrementClick(i);
                    }}>+1</button>
                  </li>
                ))}
              </ul>
            </div>
          </>
        );
    }
    
    return (
        <>
            <div className="Index-header">
                <Toolbar />
                <Gallery />
                <section>
                    <h1>Inspiring Sculptures</h1>
                    <Image />
                </section>
                <Form />
                <Counter />
                <MovingDot />
                <Form2 />
                <Form3 />
                <List />
                <List2 />
                <List3 />
                <List4 />
                <ShapeEditor />
                <CounterList />
                <h4>BucketList não funciona, tentei de todas as formas Prof. ultimas linhas do comentado ta o Bucket List</h4>
            </div>
        </>
        
    )
}

export default App;