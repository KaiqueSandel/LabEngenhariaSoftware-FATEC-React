import { useState } from 'react';
import './index.css';

function App() {
    function FormQuiz(){
        const [answer, setAnswer] = useState('');
        const [error, setError] = useState(null);
        const [status, setStatus] = useState('typing');
    
        if (status === 'success'){
            return <h1>That's Right</h1>
        }
    
        async function handleSubmit(e){
            e.preventDefault();
            setStatus('submitting');
            try{
                await submitForm(answer);
                setStatus('success');
            } catch (err){
                setStatus('typing');
                setError(err);
            }
        }
    
        function handleTextareaChange(e){
            setAnswer(e.target.value);
        }
        return (
            <>
            <form>
                <h2>City quiz</h2>
                <p>
                    In which city is there a billboard that turns air into drinkable water?
                </p>
                <form onSubmit={handleSubmit}></form>
                <textarea
                    value={answer}
                    onChange={handleTextareaChange}
                    disabled={status === 'submitting'}
                />
                <br />
                <button disabled={
                    answer.length === 0 ||
                    status === 'submitting'
                }>
                    Submit
                </button>
                {error !== null &&
                    <p className="Error">
                        {error.message}
                    </p>
                }
                </form>
            </>
        );
    }
    
    function submitForm(answer){
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                let shouldError = answer.toLowerCase() !== 'lima'
                if (shouldError){
                    reject(new Error('Try again!'));
                } else{
                    resolve();
                }
            },1500);
        });
    }

    function FormTicket(){
        const [firstName, setFirstName] = useState('');
        const [lastName, setLastName] = useState('');
    
        const fullName = firstName + '' + lastName;
    
        function handleFirstNameChange(e){
            setFirstName(e.target.value);
        }
        function handleLastNameChange(e){
            setLastName(e.target.value);
        }
    
        return (
            <>
    
                <h2>Let's check you in</h2>
                <label>
                    First name:{' '}
                    <input
                        value={firstName}
                        onChange={handleFirstNameChange}  
                />
                </label>
                <label>
                    Last name:{' '}
                    <input
                        value={lastName}
                        onChange={handleLastNameChange}  
                />
                </label>
                <p>Your ticket will be issued to: <b> {fullName} </b></p>
            </>
        );
    }

    function Accordion(){
        const [activeIndex, setActiveIndex] = useState(0);
        return(
            <>
                <h2>Almaty, Kazakhstan</h2>
                <Panel>
                    title = "About"
                    isActive={activeIndex === 0}
                    onShow={()=> setActiveIndex(0)}
                With a population of about 2 million, Almaty is Kazashstan largest city. From 1929 to 1997, it was its capital city.
                </Panel>
                <Panel>
                    title="Etymology"
                    isActive={activeIndex === 1}
                    onShow={() => setActiveIndex(1)}
                The name comes from <span lang="kk-KZ">AAA</span>,the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild <i lang="la">Malus sieversiic</i> is considered a likely candidate for the ancestor of the modern domestic apple.
                </Panel>
            </>
        );
    }
    
    function Panel({
        title,
        children,
        isActive,
        onShow
    }) {
        return(
            <section className="panel">
                <h3>{title}</h3>
                {isActive ? (
                    <p>{children}</p>
                ) : (
                    <button onClick={onShow}>
                        Show
                    </button>
                )}
            </section>
        );
    }

    function ContactList({
        selectedContact,
        contacts,
        onSelect
    }) {
        return(
            <section className="contact-list">
                <ul>
                    {contacts.map(contact =>
                        <li key={contact.email}>
                            <button onClick={() => {
                                onSelect(contact);
                            }}>
                                {contact.name}
                            </button>
                        </li>
                        )}
                </ul>
            </section>
        );
    }

    function Chat({ contact }){
        const [text, setText] = useState('');
        return (
            <section className="chat">
                <textarea value={text} placeholder={'Chat to ' + contact.name} on Change={e => setText(e.target.value)}
            />
            <br />
            <button>Send to {contact.email} </button>
            </section>
        );
    }

    function Messenger(){
        const [to, setTo] = useState(contacts[0]);
        return(
            <div>
                <ContactList 
                    contacts={contacts}
                    selectedContact ={to}
                    onSelect={contact => setTo(contact)
                    }
                />
                <Chat contact={to} />
            </div>
        )
    }
    const contacts = [
        {name: 'Taylor', email: 'taylor@mail.com'},
        {name: 'Alice', email: 'alice@mail.com'},
        {name: 'Bob', email: 'bob@mail.com'}
    ];

    return (
        <>
            <div className="Index-header">
                <FormQuiz />
                <FormTicket />
                <Accordion />
                <Messenger />
            </div>
        </>
        
    )
}

export default App;