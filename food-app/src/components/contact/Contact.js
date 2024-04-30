
const Contact=()=>{

    return (
        <div className="h-[100vh]">
            <h3 className="font-bold text-4xl text-center mt-5">contact page</h3>
            <form className="text-center my-10" onSubmit={ e=> e.preventDefault()}>
                <input className="border-2 border-black px-2 py-1 my-2"  type="text" placeholder="name"/><br/>
                 <input    className="border-2 border-black px-2 py-1 my-2"  type="text" placeholder="message"/><br/>
                 <button className="border-2 border-black px-20 py-1 rounded-sm bg-green-500">Send</button>
            </form>
        </div>
    )
}

export default Contact;