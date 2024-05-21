/*
export default function Profile() {
    return (
        <img
        src="https://i.imgur.com/MK3eW3Am.jpg"
        alt="Katherine Johnson"
        />
    );
}

export function Profile() {
    return (
        <img
        src="https://i.imgur.com/QIrZWGIs.jpg"
        alt="Alan L. Hart"
        />
    );
}

export default function Gallery(){
    return (
        <section>
            <h1>Amazing scientists</h1>
            <Profile />
            <Profile />
            <Profile />
        </section>
    );
}


 * <h1>Hedy Lamarr's Todos</h1>
<img 
    src="https://i.imgur.com/yX0vd0Ss.jps"
    alt="Hedy Lamar"
    class="photo"
>
<ul>
    <li>Invent new traffic ligths</li>
    <li>Reharse a movie scene</li>
    <li>Improve the spectrum techology</li>
</ul>


export default function TodoList() {
    return (
        <>
        <h1>Hedy Lamarr's Todos</h1>
        <img 
            src="https://i.imgur.com/yX0vd0Ss.jps"
            alt="Hedy Lamar"
            className="photo"
        />
        <ul>
            <li>Invent new traffic ligths</li>
            <li>Reharse a movie scene</li>
            <li>Improve the spectrum techology</li>
        </ul>
        </>
    );
}

export default function Avatar(){
    return (
        <img
            className="avatar"
            src="https://i.imgur.com/7vQD0fPs.jpg"
            alt="Gregorio Y. Zara"
        />
    );
}

export default function Avatar(){
    const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
    const description = 'Gregorio Y. Zara';
    return (
        <img
            className="avatar"
            src={avatar}
            alt={description}
        />
    );
}

export default function TodoList(){
    const name = 'Gregorio Y. Zara';
    return (
        <h1>{name}'s To Do List</h1>
    );
}



export default function TodoList(){
    return (
        <ul style={{
            backgroundColor: 'black',
            color: 'pink'
        }}>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
        </ul>
    );
}

const person = {
    name: 'Gregorio Y. Zara',
    theme: {
        backgroundColor: 'black',
        color: 'pink'
    }
};
export default function TodoList(){
    return (
        <div style={person.theme}>
            <h1>{person.theme}'s Todos</h1>
            <img
                className="avatar"
                src="https://i.imgur.com/7vQD0fPs.jpg"
                alt="Gregorio Y. Zara"
            />
            <ul>
                <li>Improve the videophone</li>
                <li>Prepare aeronautics lectures</li>
                <li>Work on the alcohol-fuelled engine</li>
            </ul>
        </div>  
    );
}

function Avatar( {person, size} ){
    return(
        <img
            className="avatar"
            src="https://i.imgur.com/1bX5QH6.jpg"
            alt="Lin Lanying"
            width={100}
            height={100}
        />
    );
}
export default function Profile(){
    return(
        <Avatar 
            person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }}
            size={100}
        />
    );
}

/// utils.js


function Avatar( { person, size } ) {
    return (
        <img   
            className="avatar"
            src={getImagemUrl(person)}
            alt={person.name}
            width={size}
            height={size}
        />
    );
}
export default function Profile() {
    return (
        <div>
            <Avatar
                size={100}
                person={{
                    name:'Katsuko Saruhashi',
                    imageId: 'YfeOqp2'
                }}
            />
            <Avatar
                size={80}
                person={{
                    name:'Aklilu Lemma',
                    imageId: 'OKS67lh'
                }}
            />
            <Avatar
                size={50}
                person={{
                    name:'Lin Lanying',
                    imageId: '1bX5QH6'
                }}
            />
        </div>
    );
}

function Item( { name, isPacked } ) {
    return <li className="item">{name}</li>;
}

function Item( { name, isPacked } ) {
    if(isPacked) {
        return <li class=Name="Item">{name}✅</li>;
    }
    return <li className="item">{name}</li>
}

function Item( { name, isPacked } ) {
    if(isPacked) {
        return null;
    }
    return <li className="item">{name}</li>
}

function Item( { name, isPacked } ) {
    return (
        <li className="item">
            {isPacked ? (
                <del>
                    {name + '✅'}
                </del>
            ) : (
                name
            )}
        </li>
    );
}

function Item( { name, isPacked } ) {
    return(
        <li className="item">
            {name} {isPacked && '✅'}
        </li>
    );
}

function Item( { name, isPacked } ) {
    let itemContent = name;
    if (isPacked) {
        itemContent = name + "✅";
    }
    return (
        <li className="item">
            {itemContent}
        </li>
    );
}

function Item( { name, isPacked} ) {
    let itemContent = name;
    if (isPacked) {
        itemContent = (
            <del>
                {name + "✅"}
            </del>
        );
    }
    return (
        <li className="item">
            {itemContent}
        </li>
    );
}

export default function PackingList(){
    return (
        <section>
            <h1>Sally Ride's Packing List</h1>
            <ul>
                <Item> 
                    isPacked={true}
                    name="Space suit"
                />
                <Item> 
                    isPacked={true}
                    name="Helmet with a golden leaf"
                />
                <Item> 
                    isPacked={false}
                    name="Photo of Tam"
                />
            </ul>
        </section>
    );
}

const people=[
    'Creola Katherine Johnson: mathematician',
    'Mario José Molina-Pasquel Henriques: chemist',
    'Mohammad Abdus Salam: physicist',
    'Percy Lavon Julian: chemist',
    'Subrahmanyan Chandrasekhar: astrophysicist'
];
export default funciton List() {
    const listItems = people.map(person => 
        <li>{person}</li>
    );
    return <ul>{listItems}</ul>;
}
const people=[{
        id: 0,    
        name: 'Creola Katherine Johnson'
        profession: 'mathematician',
    }, {
        id: 1,    
        name: 'Mario José Molina-Pasquel Henriques'
        profession: 'chemist',
    }, {
        id: 2,    
        name: 'Mohammad Abdus Salam'
        profession: 'physicist',
    } , {
        name: 'Percy Lavon Julian'
        profession: 'chemist'
    } , {
        name: 'Subrahmanyan Chandrasekhar'
        profession: 'astrophysicist'    
}];

const chemists = people.filter(person=>
    person.profession === 'chemist'
);
const listItems = chemists.map(person =>
    <li>
        <img
            src={getImageUrl(person)}
            alt={person.name}
        />
        <p>
            <b>{person.name}:</b>
            {' ' + person.profession + ' '}
            know for {person.accomplishment}
        </p>
    </li>
)

function double(number){
    return 2 * number;
}

let guest = 0;
function cup() {
    // Bad: changing a preexisting variable!
    guest = guest +1;
    return <h2> Tea cup for guest #{guest}</h2>;
}
export default function TeaSet(){
    return (
        <>
            <Cup />
            <Cup />
            <Cup />
        </>
    )
} 
export default function TeaSet(){
    return (
        <>
            <Cup guest={1}/>
            <Cup guest={2} />
            <Cup guest={3} />
        </>
    )
} 
    function Cup({ guest }){
        return <h2> Tea cup for guest #{guest}</h2>;
    }
    function TeaGathering(){
        let cups = [];
        let i = 0;
        for (let i = 1, i <= 5; i++) {
            cups.push(<Cup key={i} guest={i} />);
        }
        return cups;
    }
*/
import './index.css';

const today = new Date();
function formatDate(date) {
    return new Intl.DateTimeFormat(
        'en-US',
        { weekday: 'long' }
    ).format(date);
}

function App() {
    function getImagemUrl(person, size = 's') {
        return (
            'https://i.imgur.com/' +
            person.imageId +
            size +
            '.jpg'
        );
    }

    function Avatar( { person, size } ) {
        return (
            <div className="container">
                <div className="pessoa">
                    <img   
                        className="avatar"
                        src={getImagemUrl(person)}
                        alt={person.name}
                        width={size}
                        height={size}
                    />
                </div>
            </div>
        );
    }
    
    function Card( { children } ){
        return (
            <div className="card">
                {children}
            </div>
        );
    }
    function Item( { name, isPacked} ) {
        let itemContent = name;
        if (isPacked) {
            itemContent = (
                <del>
                    {name + "✅"}
                </del>
            );
        }
        return (
            <li className="item">
                {itemContent}
            </li>
        );
    }
    const people = [{
            id:0,
            name: 'Creola Katherine Johnson',
            profession: 'mahematician',
            accomplishment: 'spaceflight calculations',
            imageId: 'PlVwsaR',
        }, {
            id:1,
            name: 'Mario José Molina-Pasquel Henriques',
            profession: 'chemist',
            accomplishment: 'discovery of Arctic ozone hole',
            imageId: '575LNS6',
        }, {
            id:2,
            name: 'Mohammad Abdus Salam',
            profession: 'physicist',
            accomplishment: 'electromagnetism theory',
            imageId: 'GFlIdn5',
        }, {
            id:3,
            name: 'Percy Lavon Julian',
            profession: 'chemist',
            accomplishment: 'pioneering cortise drugs, steroids',
            imageId: 'eYGS95N',
        } , {
            id:4,
            name: 'Subrahmanyan Chandrasekhar',
            profession: 'astrophysicist',
            accomplishment: 'discovery of Arctic ozone hole',
            imageId: 'Lzx7amf',
        }
    ];
    const chemists = people.filter(person=>
        person.profession === 'chemist'
    );
    const listItems = chemists.map(person=>
        <li>
            <img
                src={getImagemUrl(person)}
                alt={person.name}
            />
            <p>
                <b>{person.name}:</b>
                {' ' + person.profession + ' '}
                know for {person.accomplishment}
            </p>
        </li>
    )
    function Recipe({ drinkers }) {
        return (
            <ol>
                <li>Boil {drinkers} cups of water.</li>
                <li>Add  {drinkers} spoons of tea and {0.5 * drinkers} spoons of spice.</li>
                <li>Add {0.5 * drinkers} cups of milk to boil and sugar  to taste.</li>
            </ol>
        );
    }

    return (
        <div className="Index-header">
            <h1>To Do List for {formatDate(today)}</h1>
            <h1>The Amazing Cientists</h1>
            <Card>
                <Avatar
                    size={100}
                    person={{
                        name: 'Katherine Johnson',
                        imageId: 'PlVwsaR'
                    }}
                />
                <Avatar
                    size={100}
                    person={{
                        name: 'Alan L. Hart',
                        imageId: 'frEMA3U'
                    }}
                />
                <Avatar
                    size={100}
                    person={{
                        name: 'Hedy Lamar',
                        imageId: 'CJgoJ2K'
                    }}
                />
                <Avatar
                    size={100}
                    person={{
                        name: 'Gregorio Y. Zara',
                        imageId: 't9zG7Hj'
                    }}
                />
                <Avatar
                    size={100}
                    person={{
                        name: 'Lin Lanying',
                        imageId: 'x1waJJT'
                    }}
                />
                <Avatar
                    size={100}
                    person={{
                        name: 'Aklilu Lemmax',
                        imageId: 'BXxCjAc'
                    }}
                />
                <Avatar
                    size={100}
                    person={{
                        name: 'Katsuko Saruhashi',
                        imageId: '5MEaQ45'
                    }}
                />
            </Card>
            <section>
                <h1>Sally Ride's Packing List</h1>
                <ul>
                    <Item
                        isPacked={true}
                        name="Space suit"
                    />
                    <Item 
                        isPacked={true}
                        name="Helmet with a golden leaf"
                    />
                    <Item
                        isPacked={false}
                        name="Photo of Tam"
                    />
                </ul>
            </section>
            <ul>{listItems}</ul>
            <section>
                <h1>Spiced Chai Recipe</h1>
                <h2>For Two</h2>
                <Recipe drinkers={2}/>
                <h2>For a gathering</h2>
                <Recipe drinkers={4}/>
            </section>
        </div>
        
    )
}

export default App;